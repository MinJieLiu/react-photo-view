import React from 'react';

/**
 * 图片 item 类型
 */
export type dataType = {
  // 唯一标识
  key?: string;
  // 图片地址
  src: string;
  // 图片介绍
  intro?: React.ReactNode;
};

type overlayRenderProps = {
  // 图片列表
  images: dataType[];
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
};

export interface IPhotoProviderBase {
  // 背景可点击关闭，默认 true
  maskClosable?: boolean;
  // 图片点击可关闭，默认 false
  photoClosable?: boolean;
  // 导航条 visible，默认 true
  bannerVisible?: boolean;
  // 简介 visible，默认 true
  introVisible?: boolean;
  // 自定义渲染
  overlayRender?: (overlayProps: overlayRenderProps) => React.ReactNode;
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
  brokenElement?: JSX.Element;
}

export type ReachFunction = (clientX: number, clientY: number, scale?: number) => void;

export type PhotoTapFunction = (clientX: number, clientY: number) => void;

/**
 * 边缘超出状态
 */
export enum CloseEdgeEnum {
  Normal, // 正常滑动
  Small, // 小于屏幕宽度
  Before, // 抵触左边/上边
  After, // 抵触右边/下边
}

/**
 * 边缘触发状态
 */
export enum ReachTypeEnum {
  Normal, // 未触发
  XReach, // x 轴
  YReach, // y 轴
}

/**
 * 初始响应状态
 */
export enum TouchStartEnum {
  Normal, // 未触发
  X, // X 轴优先
  Y, // Y 轴优先
}
