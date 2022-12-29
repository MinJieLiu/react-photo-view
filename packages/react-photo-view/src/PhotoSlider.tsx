import React, { useMemo, useRef, useState } from 'react'
import type { DataType, PhotoProviderBase, OverlayRenderProps } from './types'
import type { ReachType } from './types'
import {
  defaultEasing,
  defaultSpeed,
  defaultOpacity,
  horizontalOffset,
  maxMoveOffset,
  defaultDragEasing,
} from './variables'
import isTouchDevice from './utils/isTouchDevice'
import { limitNumber } from './utils/limitTarget'
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect'
import useAdjacentImages from './hooks/useAdjacentImages'
import useSetState from './hooks/useSetState'
import useEventListener from './hooks/useEventListener'
import useAnimationVisible from './hooks/useAnimationVisible'
import useMethods from './hooks/useMethods'
import SlidePortal from './components/SlidePortal'
import CloseIcon from './components/CloseIcon'
import ArrowLeft from './components/ArrowLeft'
import ArrowRight from './components/ArrowRight'
import PreventScroll from './components/PreventScroll'
import PhotoBox from './PhotoBox'
import tw, { css, styled } from 'twin.macro'
import { keyframes } from 'styled-components'

export interface IPhotoSliderProps extends PhotoProviderBase {
  // 图片列表
  images: DataType[]
  // 图片当前索引
  index?: number
  // 索引改变回调
  onIndexChange?: (index: number) => void
  // 可见
  visible: boolean
  // 关闭回调
  onClose: (evt?: React.MouseEvent | React.TouchEvent) => void
  // 关闭动画结束后回调
  afterClose?: () => void
}

type PhotoSliderState = {
  // 当前预览图片是否加载中
  loading: boolean
  // 偏移量
  x: number
  // 偏移量
  y: number
  // 图片处于触摸的状态
  touched: boolean
  // 是否暂停 transition
  pause: boolean
  // Reach 开始时 x 坐标
  lastCX: number | undefined
  // Reach 开始时 y 坐标
  lastCY: number | undefined
  // 背景透明度
  bg: number | null | undefined
  // 上次关闭的背景透明度
  lastBg: number | null | undefined
  // 是否显示 overlay
  overlay: boolean
  // 是否为最小状态，可下拉关闭
  minimal: boolean
  // 缩放
  scale: number
  // 旋转
  rotate: number
  // 缩放回调
  onScale?: (scale: number) => void
  // 旋转回调
  onRotate?: (rotate: number) => void
}

const initialState: PhotoSliderState = {
  loading: false,
  x: 0,
  y: 0,
  touched: false,
  pause: false,
  lastCX: undefined,
  lastCY: undefined,
  bg: undefined,
  lastBg: undefined,
  overlay: true,
  minimal: true,
  scale: 1,
  rotate: 0,
}

const fade = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledArrow = styled.div(
  ({ currentOverlayVisible }: Record<'currentOverlayVisible', boolean>) => [
    tw`absolute top-0 bottom-0 flex justify-center items-center w-[70px] h-[100px] m-auto opacity-100 z-20 cursor-pointer select-none transition-opacity ease-linear delay-200 hover:opacity-100`,
    css`
      svg {
        ${tw`box-content p-2.5 w-6 h-6 fill-white bg-gray-900/30`}
      }
    `,
    !currentOverlayVisible && tw`opacity-0`,
  ],
)

const StyledArrowLeft = tw(StyledArrow)`left-0`
const StyledArrowRight = tw(StyledArrow)`right-0`

export default function PhotoSlider(props: IPhotoSliderProps) {
  const {
    mode: modeProp = 'slide',
    loop = 3,
    speed: speedFn,
    easing: easingFn,
    photoClosable,
    maskClosable = true,
    maskOpacity = defaultOpacity,
    pullClosable = true,
    bannerVisible = true,
    overlayRender,
    toolbarRender,
    className,
    maskClassName,
    photoClassName,
    photoWrapClassName,
    loadingElement,
    brokenElement,
    images,
    index: controlledIndex = 0,
    onIndexChange: controlledIndexChange,
    visible,
    onClose,
    afterClose,
    portalContainer,
    enableMouseZoom = true,
  } = props

  const isDragMode = useMemo(() => {
    if (isTouchDevice) return false
    return modeProp === 'drag'
  }, [modeProp])

  const [state, updateState] = useSetState(initialState)
  const [innerIndex, updateInnerIndex] = useState(0)

  const {
    loading,

    x,
    y,
    touched,
    pause,

    lastCX,
    lastCY,

    bg = maskOpacity,
    lastBg,
    overlay,
    minimal,

    scale,
    rotate,
    onScale,
    onRotate,
  } = state
  // 受控 index
  const isControlled = props.hasOwnProperty('index')
  const index = isControlled ? controlledIndex : innerIndex
  const onIndexChange = isControlled ? controlledIndexChange : updateInnerIndex
  // 内部虚拟 index
  const virtualIndexRef = useRef(index)

  // 当前图片
  const imageLength = images.length
  const currentImage: DataType | undefined = images[index]

  // 是否开启
  // noinspection SuspiciousTypeOfGuard
  const enableLoop = typeof loop === 'boolean' ? loop : imageLength > loop

  // 显示动画处理
  const [realVisible, activeAnimation, onAnimationEnd] = useAnimationVisible(visible, afterClose)

  useIsomorphicLayoutEffect(() => {
    // 显示弹出层，修正正确的指向
    if (realVisible) {
      updateState({
        pause: true,
        x: index * -(innerWidth + horizontalOffset),
      })
      virtualIndexRef.current = index
      return
    }
    // 关闭后清空状态
    updateState(initialState)
  }, [realVisible])

  const { close, changeIndex } = useMethods({
    close(evt?: React.MouseEvent | React.TouchEvent) {
      if (onRotate) {
        onRotate(0)
      }
      updateState({
        overlay: true,
        // 记录当前关闭时的透明度
        lastBg: bg,
      })
      onClose(evt)
    },
    changeIndex(nextIndex: number, isPause: boolean = false) {
      // 当前索引
      const currentIndex = enableLoop ? virtualIndexRef.current + (nextIndex - index) : nextIndex
      const max = imageLength - 1
      // 虚拟 index
      // 非循环模式，限制区间
      const limitIndex = limitNumber(currentIndex, 0, max)
      const nextVirtualIndex = enableLoop ? currentIndex : limitIndex
      // 单个屏幕宽度
      const singlePageWidth = innerWidth + horizontalOffset

      updateState({
        touched: false,
        lastCX: undefined,
        lastCY: undefined,
        x: -singlePageWidth * nextVirtualIndex,
        pause: isPause,
      })

      virtualIndexRef.current = nextVirtualIndex
      // 更新真实的 index
      const realLoopIndex = nextIndex < 0 ? max : nextIndex > max ? 0 : nextIndex
      if (onIndexChange) {
        onIndexChange(enableLoop ? realLoopIndex : limitIndex)
      }
    },
  })

  useEventListener('keydown', (evt: KeyboardEvent) => {
    if (visible) {
      switch (evt.key) {
        case 'ArrowLeft':
          changeIndex(index - 1, true)
          break
        case 'ArrowRight':
          changeIndex(index + 1, true)
          break
        case 'Escape':
          close()
          break
      }
    }
  })

  function handlePhotoTap(closeable: boolean | undefined) {
    return closeable ? close() : updateState({ overlay: !overlay })
  }

  function handleResize() {
    updateState({
      x: -(innerWidth + horizontalOffset) * index,
      lastCX: undefined,
      lastCY: undefined,
      pause: isDragMode ? false : true,
    })
    virtualIndexRef.current = index
  }

  function handleReachVerticalMove(clientY: number, nextScale?: number) {
    if (lastCY === undefined) {
      updateState({
        touched: true,
        lastCY: clientY,
        bg,
        minimal: true,
      })
      return
    }
    const opacity =
      maskOpacity === null
        ? null
        : limitNumber(maskOpacity, 0.01, maskOpacity - Math.abs(clientY - lastCY) / 100 / 4)

    updateState({
      touched: true,
      lastCY,
      bg: nextScale === 1 && !isDragMode ? opacity : maskOpacity,
      minimal: nextScale === 1,
    })
  }

  function handleReachHorizontalMove(clientX: number) {
    if (lastCX === undefined) {
      updateState({
        touched: true,
        lastCX: clientX,
        x,
        pause: false,
      })
      return
    }
    const originOffsetClientX = clientX - lastCX
    let offsetClientX = originOffsetClientX

    // 第一张和最后一张超出距离减半
    if (
      !enableLoop &&
      ((index === 0 && originOffsetClientX > 0) ||
        (index === imageLength - 1 && originOffsetClientX < 0))
    ) {
      offsetClientX = originOffsetClientX / 2
    }

    updateState({
      touched: true,
      lastCX: lastCX,
      x: -(innerWidth + horizontalOffset) * virtualIndexRef.current + offsetClientX,
      pause: false,
    })
  }

  function handleReachMove(
    reachPosition: ReachType,
    clientX: number,
    clientY: number,
    nextScale?: number,
  ) {
    if (isDragMode) {
      // handleReachDragMove
    } else if (reachPosition === 'x') {
      handleReachHorizontalMove(clientX)
    } else if (reachPosition === 'y') {
      handleReachVerticalMove(clientY, nextScale)
    }
  }

  function handleReachUp(clientX: number, clientY: number) {
    const offsetClientX = clientX - (lastCX ?? clientX)
    const offsetClientY = clientY - (lastCY ?? clientY)
    if (isDragMode) {
      updateState({
        touched: false,
      })
      return
    }
    let willClose = false
    // 下一张
    if (offsetClientX < -maxMoveOffset) {
      changeIndex(index + 1)
      return
    }
    // 上一张
    if (offsetClientX > maxMoveOffset) {
      changeIndex(index - 1)
      return
    }
    const singlePageWidth = innerWidth + horizontalOffset
    // 当前偏移
    const currentTranslateX = -singlePageWidth * virtualIndexRef.current

    if (Math.abs(offsetClientY) > 100 && minimal && pullClosable) {
      willClose = true
      close()
    }
    updateState({
      touched: false,
      x: currentTranslateX,
      lastCX: undefined,
      lastCY: undefined,
      bg: maskOpacity,
      overlay: willClose ? true : overlay,
    })
  }
  // 截取相邻的图片
  const adjacentImages = useAdjacentImages(images, index, enableLoop)

  if (!realVisible) {
    return null
  }

  const currentOverlayVisible = overlay && !activeAnimation
  // 关闭过程中使用下拉保存的透明度
  const currentOpacity = visible ? bg : lastBg
  // 覆盖物参数
  const overlayParams: OverlayRenderProps | undefined = onScale &&
    onRotate && {
      loading,
      mode: isDragMode ? 'drag' : 'slide',
      images,
      index,
      visible,
      onClose: close,
      onIndexChange: changeIndex,
      overlayVisible: currentOverlayVisible,
      overlay: currentImage && currentImage.overlay,
      scale,
      rotate,
      onScale,
      onRotate,
    }
  // 动画时间
  const currentSpeed = speedFn ? speedFn(activeAnimation) : defaultSpeed
  const currentEasing = easingFn
    ? easingFn(activeAnimation)
    : isDragMode
    ? defaultDragEasing
    : defaultEasing
  const slideSpeed = speedFn ? speedFn(3) : defaultSpeed + 200
  const slideEasing = easingFn ? easingFn(3) : defaultEasing

  return (
    <SlidePortal
      className={`PhotoView-Portal${className ? ` ${className}` : ''}`}
      role="dialog"
      onClick={e => e.stopPropagation()}
      container={portalContainer}
    >
      {visible && <PreventScroll />}
      <div
        className={maskClassName}
        css={[
          tw`absolute left-0 top-0 w-full h-full -z-[1] bg-black transition-[background-color]`,
          (activeAnimation === 1 || activeAnimation === 2) && tw`opacity-0`,
          activeAnimation === 1 &&
            css`
              animation: ${fade} linear both;
            `,
          activeAnimation === 2 &&
            css`
              animation: ${fade} linear both reverse;
            `,
        ]}
        style={{
          background: currentOpacity ? `rgba(0, 0, 0, ${currentOpacity})` : undefined,
          transitionTimingFunction: currentEasing,
          transitionDuration: `${touched ? 0 : currentSpeed}ms`,
          animationDuration: `${currentSpeed}ms`,
        }}
        onAnimationEnd={onAnimationEnd}
      />
      {bannerVisible && (
        <div
          css={[
            tw`absolute left-0 top-0 flex items-center justify-between w-full h-[44px] text-white bg-gray-900/50 transition-opacity ease-out delay-200 z-20 hover:opacity-100`,
            !currentOverlayVisible && tw`opacity-0`,
            !visible && tw`hover:opacity-0`,
          ]}
        >
          <div tw="px-2.5 text-base opacity-75">
            {index + 1} / {imageLength}
          </div>
          <div tw="flex items-center h-full">
            {toolbarRender && overlayParams && toolbarRender(overlayParams)}
            {!toolbarRender && (
              <CloseIcon
                tw="box-border p-2.5 fill-white opacity-75 cursor-pointer transition-opacity ease-linear delay-200 hover:opacity-100"
                onClick={close}
              />
            )}
          </div>
        </div>
      )}
      {adjacentImages.map((item, currentIndex) => {
        // 截取之前的索引位置
        const nextIndex =
          !enableLoop && index === 0
            ? index + currentIndex
            : virtualIndexRef.current - 1 + currentIndex
        const isActive = !item.isCloned && (currentImage && currentImage.key) === item.key
        return (
          <PhotoBox
            key={enableLoop ? `${item.key}/${item.src}/${nextIndex}` : item.key}
            item={item}
            speed={currentSpeed}
            easing={currentEasing}
            visible={visible}
            onReachMove={handleReachMove}
            onReachUp={handleReachUp}
            onPhotoTap={() => handlePhotoTap(photoClosable)}
            onMaskTap={() => handlePhotoTap(maskClosable)}
            isDragMode={isDragMode}
            wrapClassName={photoWrapClassName}
            className={photoClassName}
            style={{
              opacity: isDragMode ? (isActive ? 1 : 0) : undefined,
              left: `${(innerWidth + horizontalOffset) * nextIndex}px`,
              transform: `translate3d(${x}px, ${y}px, 0)`,
              transition: touched || pause ? undefined : `transform ${slideSpeed}ms ${slideEasing}`,
            }}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
            onPhotoResize={handleResize}
            isActive={isActive}
            expose={updateState}
            enableMouseZoom={enableMouseZoom}
          />
        )
      })}
      {!isTouchDevice && bannerVisible && (
        <>
          {(enableLoop || index !== 0) && (
            <StyledArrowLeft
              currentOverlayVisible={currentOverlayVisible}
              onClick={() => changeIndex(index - 1, true)}
            >
              <ArrowLeft />
            </StyledArrowLeft>
          )}
          {(enableLoop || index + 1 < imageLength) && (
            <StyledArrowRight
              currentOverlayVisible={currentOverlayVisible}
              onClick={() => changeIndex(index + 1, true)}
            >
              <ArrowRight />
            </StyledArrowRight>
          )}
        </>
      )}
      {overlayRender && overlayParams && (
        <div css={[!currentOverlayVisible && tw`opacity-0`]}>{overlayRender(overlayParams)}</div>
      )}
    </SlidePortal>
  )
}
