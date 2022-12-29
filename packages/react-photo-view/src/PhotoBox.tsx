import React, { useRef } from 'react'
import isTouchDevice from './utils/isTouchDevice'
import getMultipleTouchPosition from './utils/getMultipleTouchPosition'
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale'
import { getReachType, computePositionEdge } from './utils/edgeHandle'
import getRotateSize from './utils/getRotateSize'
import { limitScale } from './utils/limitTarget'
import getSuitableImageSize from './utils/getSuitableImageSize'
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect'
import { minDragScale, minScale, minStartTouchOffset, scaleBuffer } from './variables'
import type {
  DataType,
  ReachMoveFunction,
  ReachFunction,
  PhotoTapFunction,
  BrokenElementParams,
  ExposedProperties,
} from './types'
import type { ReachType, TouchStartType } from './types'
import useSetState from './hooks/useSetState'
import useMethods from './hooks/useMethods'
import useDebounceCallback from './hooks/useDebounceCallback'
import useEventListener from './hooks/useEventListener'
import useContinuousTap from './hooks/useContinuousTap'
import useScrollPosition from './hooks/useScrollPosition'
import useAnimationPosition from './hooks/useAnimationPosition'
import useMountedRef from './hooks/useMountedRef'
import type { IPhotoLoadedParams } from './Photo'
import Photo from './Photo'
import tw, { styled } from 'twin.macro'

export interface PhotoBoxProps {
  isDragMode?: boolean
  // 图片信息
  item: DataType
  // 是否可见
  visible: boolean
  // 动画时间
  speed: number
  // 动画函数
  easing: string
  // 容器类名
  wrapClassName?: string
  // 图片类名
  className?: string
  // style
  style?: React.CSSProperties
  // 自定义 loading
  loadingElement?: JSX.Element
  // 加载失败 Element
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element)

  // Photo 点击事件
  onPhotoTap: PhotoTapFunction
  // Mask 点击事件
  onMaskTap: PhotoTapFunction
  // 到达边缘滑动事件
  onReachMove: ReachMoveFunction
  // 触摸解除事件
  onReachUp: ReachFunction
  // Resize 事件
  onPhotoResize: () => void
  // 向父组件导出属性
  expose: (state: ExposedProperties) => void
  // 是否在当前操作中
  isActive: boolean
  // 是否开启鼠标缩放
  enableMouseZoom?: boolean
}

const initialState = {
  // 真实宽度
  naturalWidth: undefined as number | undefined,
  // 真实高度
  naturalHeight: undefined as number | undefined,
  // 宽度
  width: undefined as number | undefined,
  // 高度
  height: undefined as number | undefined,
  // 加载成功状态
  loaded: undefined as boolean | undefined,
  // 破碎状态
  broken: false,

  // 图片 X 偏移量
  x: 0,
  // 图片 y 偏移量
  y: 0,
  // 图片处于触摸的状态
  touched: false,
  // 背景处于触摸状态
  maskTouched: false,
  // 旋转状态
  rotate: 0,
  // 放大缩小
  scale: 1,

  // 触摸开始时 x 原始坐标
  CX: 0,
  // 触摸开始时 y 原始坐标
  CY: 0,

  // 触摸开始时图片 x 偏移量
  lastX: 0,
  // 触摸开始时图片 y 偏移量
  lastY: 0,
  // 上一个触摸状态 x 原始坐标
  lastCX: 0,
  // 上一个触摸状态 y 原始坐标
  lastCY: 0,
  // 上一个触摸状态的 scale
  lastScale: 1,

  // 触摸开始时时间
  touchTime: 0,
  // 多指触控间距
  touchLength: 0,
  // 是否暂停 transition
  pause: true,
  // 停止 Raf
  stopRaf: true,
  // 当前边缘触发状态
  reach: undefined as ReachType,
}

const StyledView = styled.div`
  ${tw`absolute inset-0 w-full touch-none`}
  direction: ltr
`

const StyledWrap = styled(StyledView)(({ isDragMode }: Record<'isDragMode', boolean>) => [
  tw`z-10`,
  !isDragMode && tw`overflow-hidden`,
])

const StyledBox = styled(StyledView)`
  transform-origin: left top;
`

export default function PhotoBox({
  isDragMode = false,
  item: { src, render, width: customWidth = 0, height: customHeight = 0, originRef },
  visible,
  speed,
  easing,
  wrapClassName,
  className,
  style,
  loadingElement,
  brokenElement,
  enableMouseZoom = true,
  onPhotoTap,
  onMaskTap,
  onReachMove,
  onReachUp,
  onPhotoResize,
  isActive,
  expose,
}: PhotoBoxProps) {
  const [state, updateState] = useSetState(initialState)
  const initialTouchRef = useRef<TouchStartType>(0)
  const mounted = useMountedRef()

  const {
    naturalWidth = customWidth,
    naturalHeight = customHeight,
    width = customWidth,
    height = customHeight,
    loaded = !src,
    broken,
    x,
    y,
    touched,
    stopRaf,
    maskTouched,
    rotate,
    scale,
    CX,
    CY,
    lastX,
    lastY,
    lastCX,
    lastCY,
    lastScale,
    touchTime,
    touchLength,
    pause,
    reach,
  } = state

  const fn = useMethods({
    onScale: (current: number) => onScale(limitScale(current, isDragMode)),
    onRotate(current: number) {
      if (rotate !== current) {
        expose({ rotate: current })
        updateState({
          rotate: current,
          ...getSuitableImageSize(isDragMode, naturalWidth, naturalHeight, current),
          scale,
        })
      }
    },
  })

  // 默认为屏幕中心缩放
  function onScale(current: number, clientX?: number, clientY?: number) {
    if (scale !== current) {
      expose({ scale: current })
      updateState({
        scale: current,
        ...getPositionOnMoveOrScale(
          isDragMode,
          x,
          y,
          width,
          height,
          naturalWidth,
          naturalHeight,
          scale,
          current,
          clientX,
          clientY,
        ),
        ...((isDragMode ? current < minDragScale : current <= minScale) ? { x: 0, y: 0 } : {}),
      })
    }
  }

  const handleMove = useDebounceCallback(
    (nextClientX: number, nextClientY: number, currentTouchLength: number = 0) => {
      if ((touched || maskTouched) && isActive) {
        // 通过旋转调换宽高
        const [currentWidth, currentHeight] = getRotateSize(rotate, width, height)
        // 单指最小缩放下，以初始移动距离来判断意图
        if (currentTouchLength === 0 && initialTouchRef.current === 0) {
          const isStillX = Math.abs(nextClientX - CX) <= minStartTouchOffset
          const isStillY = Math.abs(nextClientY - CY) <= minStartTouchOffset
          // 初始移动距离不足
          if (isStillX && isStillY) {
            // 方向记录上次移动距离，以便平滑过渡
            updateState({ lastCX: nextClientX, lastCY: nextClientY })
            return
          }
          // 设置响应状态
          initialTouchRef.current = !isStillX ? 1 : nextClientY > CY ? 3 : 2
        }

        const offsetX = nextClientX - lastCX
        const offsetY = nextClientY - lastCY
        // 边缘触发状态
        let currentReach: ReachType = undefined
        if (currentTouchLength === 0) {
          // 边缘超出状态
          const [horizontalCloseEdge] = computePositionEdge(
            offsetX + lastX,
            scale,
            currentWidth,
            innerWidth,
          )
          const [verticalCloseEdge] = computePositionEdge(
            offsetY + lastY,
            scale,
            currentHeight,
            innerHeight,
          )
          // 边缘触发检测
          currentReach = getReachType(
            initialTouchRef.current,
            horizontalCloseEdge,
            verticalCloseEdge,
            reach,
          )
          // 接触边缘
          if (currentReach !== undefined) {
            onReachMove(currentReach, nextClientX, nextClientY, scale)
          }
        }
        // 横向边缘触发、背景触发禁用当前滑动
        if (currentReach === 'x' || maskTouched || isDragMode) {
          const state: Partial<typeof initialState> = { reach: 'x' }
          if (isDragMode) {
            state.x = lastX + offsetX
            state.y = lastY + offsetY
            state.pause = false
          }
          updateState(state)
          return
        }
        // 目标倍数
        const toScale = limitScale(
          scale + ((currentTouchLength - touchLength) / 100 / 2) * scale,
          isDragMode,
          naturalWidth / width,
          scaleBuffer,
        )
        // 导出变量
        expose({ scale: toScale })
        updateState({
          touchLength: currentTouchLength,
          reach: currentReach,
          scale: toScale,
          ...getPositionOnMoveOrScale(
            isDragMode,
            x,
            y,
            width,
            height,
            naturalWidth,
            naturalHeight,
            scale,
            toScale,
            nextClientX,
            nextClientY,
            offsetX,
            offsetY,
          ),
        })
      }
    },
    {
      maxWait: 8,
    },
  )

  function updateRaf(position: { x?: number; y?: number }) {
    if (stopRaf || touched) {
      return false
    }
    if (mounted.current) {
      // 下拉关闭时可以有动画
      updateState({ ...position, pause: visible })
    }
    return mounted.current
  }

  const slideToPosition = useScrollPosition(
    nextX => updateRaf({ x: nextX }),
    nextY => updateRaf({ y: nextY }),
    nextScale => {
      if (mounted.current) {
        expose({ scale: nextScale })
        updateState({ scale: nextScale })
      }
      return !touched && mounted.current
    },
  )

  const handlePhotoTap = useContinuousTap(
    onPhotoTap,
    (currentClientX: number, currentClientY: number) => {
      if (!reach && !isDragMode) {
        // 若图片足够大，则放大适应的倍数
        const endScale = scale !== 1 ? 1 : Math.max(2, naturalWidth / width)
        onScale(endScale, currentClientX, currentClientY)
      }
    },
  )

  function handleUp(nextClientX: number, nextClientY: number) {
    // 重置响应状态
    initialTouchRef.current = 0
    if ((touched || maskTouched) && isActive) {
      updateState({
        touched: false,
        maskTouched: false,
        pause: false,
        stopRaf: false,
        reach: undefined,
      })
      const safeScale = limitScale(scale, isDragMode, naturalWidth / width)
      // Go
      if (!isDragMode) {
        slideToPosition(
          x,
          y,
          lastX,
          lastY,
          width,
          height,
          naturalWidth,
          naturalHeight,
          scale,
          safeScale,
          lastScale,
          rotate,
          touchTime,
        )
      }

      onReachUp(nextClientX, nextClientY)
      // 触发 Tap 事件
      if (CX === nextClientX && CY === nextClientY) {
        if (touched) {
          handlePhotoTap(nextClientX, nextClientY)
          return
        }
        if (maskTouched) {
          onMaskTap(nextClientX, nextClientY)
        }
      }
    }
  }

  useEventListener(isTouchDevice ? undefined : 'mousemove', e => {
    e.preventDefault()
    handleMove(e.clientX, e.clientY)
  })
  useEventListener(isTouchDevice ? undefined : 'mouseup', e => {
    handleUp(e.clientX, e.clientY)
  })
  useEventListener(
    isTouchDevice ? 'touchmove' : undefined,
    e => {
      e.preventDefault()
      const position = getMultipleTouchPosition(e)
      handleMove(...position)
    },
    { passive: false },
  )
  useEventListener(
    isTouchDevice ? 'touchend' : undefined,
    ({ changedTouches }) => {
      const touch = changedTouches[0]
      handleUp(touch.clientX, touch.clientY)
    },
    { passive: false },
  )
  useEventListener(
    'resize',
    useDebounceCallback(
      () => {
        if (loaded && !touched) {
          if (isDragMode) {
            updateState({
              x: 0,
              y: 0,
            })
          } else updateState(getSuitableImageSize(isDragMode, naturalWidth, naturalHeight, rotate))
          onPhotoResize()
        }
      },
      { maxWait: 8 },
    ),
  )

  useIsomorphicLayoutEffect(() => {
    if (isActive) {
      expose({ scale, rotate, loading: !loaded, ...fn })
    }
  }, [isActive])

  useIsomorphicLayoutEffect(() => {
    expose({ loading: !loaded })
  }, [loaded])

  function handlePhotoLoad(params: IPhotoLoadedParams) {
    updateState({
      ...params,
      ...(params.loaded &&
        getSuitableImageSize(
          isDragMode,
          params.naturalWidth || 0,
          params.naturalHeight || 0,
          rotate,
        )),
    })
  }

  function handleStart(
    currentClientX: number,
    currentClientY: number,
    currentTouchLength: number = 0,
  ) {
    updateState({
      touched: true,
      CX: currentClientX,
      CY: currentClientY,
      lastCX: currentClientX,
      lastCY: currentClientY,
      lastX: x,
      lastY: y,
      lastScale: scale,
      touchLength: currentTouchLength,
      touchTime: Date.now(),
    })
  }

  function handleWheel(e: React.WheelEvent) {
    if (!reach && enableMouseZoom) {
      // 限制最大倍数和最小倍数
      const delta = isDragMode ? e.deltaY / 100 / 16 : e.deltaY / 100 / 2
      const toScale = limitScale(scale - delta, isDragMode, naturalWidth / width)
      updateState({ stopRaf: true })
      onScale(toScale, e.clientX, e.clientY)
    }
  }

  function handleMaskStart(e: { clientX: number; clientY: number }) {
    updateState({
      maskTouched: true,
      CX: e.clientX,
      CY: e.clientY,
      lastX: x,
      lastY: y,
    })
  }

  function handleTouchStart(e: React.TouchEvent) {
    e.stopPropagation()
    handleStart(...getMultipleTouchPosition(e))
  }

  function handleMouseDown(e: React.MouseEvent) {
    e.stopPropagation()
    if (e.button === 0) {
      handleStart(e.clientX, e.clientY, 0)
    }
  }

  // 计算位置
  const [
    translateX,
    translateY,
    currentWidth,
    currentHeight,
    currentScale,
    opacity,
    easingMode,
    FIT,
  ] = useAnimationPosition(
    isDragMode,
    visible,
    originRef,
    loaded,
    x,
    y,
    width,
    height,
    naturalWidth,
    naturalHeight,
    scale,
    speed,
    (isPause: boolean) => updateState({ pause: isPause }),
  )
  // 图片 objectFit 渐变时间
  const transitionLayoutTime = easingMode < 4 ? speed / 2 : easingMode > 4 ? speed : 0
  const transitionCSS = `transform ${speed}ms ${easing}`

  const attrs = {
    className,
    onMouseDown: isTouchDevice ? undefined : handleMouseDown,
    onTouchStart: isTouchDevice ? handleTouchStart : undefined,
    onWheel: handleWheel,
    style: {
      width: currentWidth,
      height: currentHeight,
      opacity,
      objectFit: easingMode === 4 ? undefined : FIT,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      transition:
        // 初始状态无渐变
        easingMode > 2
          ? isDragMode
            ? `width ${transitionLayoutTime}ms ${easing}, height ${transitionLayoutTime}ms ${easing}`
            : `${transitionCSS}, opacity ${speed}ms ease, height ${transitionLayoutTime}ms ${easing}`
          : undefined,
    },
  }

  return (
    <StyledWrap
      isDragMode={isDragMode}
      className={wrapClassName}
      style={style}
      onMouseDown={!isTouchDevice && isActive ? handleMaskStart : undefined}
      onTouchStart={isTouchDevice && isActive ? e => handleMaskStart(e.touches[0]) : undefined}
    >
      <StyledBox
        style={{
          transform: isDragMode
            ? undefined
            : `matrix(${currentScale}, 0, 0, ${currentScale}, ${translateX}, ${translateY})`,
          left: isDragMode ? translateX : undefined,
          top: isDragMode ? translateY : undefined,
          transition:
            touched || pause
              ? undefined
              : isDragMode
              ? `left ${transitionLayoutTime}ms ${easing}, top ${transitionLayoutTime}ms ${easing}`
              : transitionCSS,
          willChange: isActive ? 'transform' : undefined,
        }}
      >
        {src ? (
          <Photo
            src={src}
            loaded={loaded}
            broken={broken}
            {...attrs}
            onPhotoLoad={handlePhotoLoad}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
          />
        ) : (
          render && render({ attrs, scale: currentScale, rotate })
        )}
      </StyledBox>
    </StyledWrap>
  )
}
