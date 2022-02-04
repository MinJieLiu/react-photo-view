import type React from 'react';

/**
 * 图片数据类型
 */
export interface DataType {
  // 唯一标识
  key: number | string;
  // 图片地址
  src: string;
  // 原触发 ref
  originRef?: React.MutableRefObject<HTMLElement | null>;
  // 图片介绍
  intro?: React.ReactNode;
}

/**
 * brokenElement 函数参数
 */
export interface BrokenElementParams {
  src: string;
}

export type OverlayRenderProps = {
  // 图片列表
  images: DataType[];
  // 图片当前索引
  index: number;
  // 可见
  visible: boolean;
  // 关闭事件
  onClose: (evt?: React.MouseEvent | React.TouchEvent) => void;
  // 索引改变回调
  onIndexChange: (photoIndex: number) => void;
  // 覆盖物可见度
  overlayVisible: boolean;
  // 当前图片旋转角度
  rotate: number;
  // 旋转事件
  onRotate: (rotate: number) => void;
  // 放大缩小
  scale: number;
  // 放大缩小事件
  onScale: (scale: number) => void;
};

export interface IPhotoProviderBase {
  // 图片点击可关闭，默认 false
  photoClosable?: boolean;
  // 背景可点击关闭，默认 true
  maskClosable?: boolean;
  // 下拉是否可关闭，默认 true
  pullClosable?: boolean;
  // 导航条 visible，默认 true
  bannerVisible?: boolean;
  // 简介 visible，默认 true
  introVisible?: boolean;
  // 自定义渲染
  overlayRender?: (overlayProps: OverlayRenderProps) => React.ReactNode;
  // 工具栏渲染
  toolbarRender?: (overlayProps: OverlayRenderProps) => React.ReactNode;
  // className
  className?: string;
  // 遮罩 className
  maskClassName?: string;
  // 图片容器 className
  viewClassName?: string;
  // 图片 className
  imageClassName?: string;
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element);
}

export type ReachMoveFunction = (reachPosition: ReachType, clientX: number, clientY: number, scale?: number) => void;

export type ReachFunction = (clientX: number, clientY: number) => void;

export type PhotoTapFunction = (clientX: number, clientY: number) => void;

/**
 * 边缘超出状态
 */
export type CloseEdgeType =
  | 'normal' // 正常滑动
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
