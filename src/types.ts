import type React from 'react';

/**
 * 资源数据类型
 */
export interface DataType {
  /**
   * 唯一标识
   */
  key: number | string;
  /**
   * 资源地址
   */
  src: string;
  /**
   * 触发 ref
   */
  originRef?: React.MutableRefObject<HTMLElement | null>;
  /**
   * 介绍
   */
  intro?: React.ReactNode;
}

/**
 * brokenElement 函数参数
 */
export interface BrokenElementParams {
  src: string;
}

export type OverlayRenderProps = {
  /**
   * 图片列表
   */
  images: DataType[];
  /**
   * 当前索引
   */
  index: number;
  /**
   * 索引改变回调
   */
  onIndexChange: (index: number) => void;
  /**
   * 是否可见
   */
  visible: boolean;
  /**
   * 关闭事件回调
   */
  onClose: (evt?: React.MouseEvent | React.TouchEvent) => void;
  /**
   * 覆盖物是否可见
   */
  overlayVisible: boolean;
  /**
   * 当前旋转角度
   */
  rotate: number;
  /**
   * 旋转事件回调
   */
  onRotate: (rotate: number) => void;
  /**
   * 当前缩放
   */
  scale: number;
  /**
   * 缩放事件回调
   * @param scale
   */
  onScale: (scale: number) => void;
};

export interface IPhotoProviderBase {
  /**
   * 图片点击是否可关闭
   */
  photoClosable?: boolean;
  /**
   * 背景点击是否可关闭
   * @defaultValue true
   */
  maskClosable?: boolean;
  /**
   * 下拉是否可关闭
   * @defaultValue true
   */
  pullClosable?: boolean;
  /**
   * 导航条 visible
   * @defaultValue true
   */
  bannerVisible?: boolean;
  /**
   * 简介 visible
   * @defaultValue true
   */
  introVisible?: boolean;
  /**
   * 自定义渲染覆盖物
   */
  overlayRender?: (overlayProps: OverlayRenderProps) => React.ReactNode;
  /**
   * 自定义渲染工具栏
   */
  toolbarRender?: (overlayProps: OverlayRenderProps) => React.ReactNode;
  className?: string;
  maskClassName?: string;
  photoWrapClassName?: string;
  photoClassName?: string;
  /**
   * 自定义 loading
   */
  loadingElement?: JSX.Element;
  /**
   * 自定义加载失败渲染
   */
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element);
}

export type ReachMoveFunction = (reachPosition: ReachType, clientX: number, clientY: number, scale?: number) => void;

export type ReachFunction = (clientX: number, clientY: number) => void;

export type PhotoTapFunction = (clientX: number, clientY: number) => void;

/**
 * 边缘超出状态
 */
export type CloseEdgeType =
  | 'small' // 小于屏幕宽度
  | 'before' // 抵触左边/上边
  | 'after' // 抵触右边/下边
  | undefined; // 正常滑动

/**
 * 边缘触发状态
 */
export type ReachType =
  | 'x' // x 轴
  | 'y' // y 轴
  | undefined; // 未触发

/**
 * 初始响应状态
 */
export type TouchStartType =
  | 'x' // X 轴优先
  | 'push' // Y 轴往上
  | 'pull' // Y 轴往下
  | undefined; // 未触发

/**
 * 触发源位置
 */
export type OriginRectType =
  | {
      clientX: number;
      clientY: number;
    }
  | undefined;
