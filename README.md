# react-photo-view

一款基于 `React` 的图片预览组件

[![npm](https://img.shields.io/npm/v/react-photo-view.svg?style=flat-square)](https://www.npmjs.com/package/react-photo-view)
[![npm](https://img.shields.io/npm/dt/react-photo-view.svg?style=flat-square)](https://github.com/MinJieLiu/react-photo-view)

Demo: [https://minjieliu.github.io/react-photo-view](https://minjieliu.github.io/react-photo-view)

### 特性

 1. 支持基本手势：左右切换、下滑关闭、双击放大/缩小、双指控制、拖动平移、点击切换控件等
 1. 打开/关闭缩放动画
 1. 自适应图像适应
 1. 支持桌面端/移动端
 1. 轻量的体积
 1. 高度的扩展性
 1. 基于 typescript 友好的语法提示


## 开始使用

    yarn add react-photo-view

基本:

```js
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import 'react-photo-view/dist/index.css';

function ImageView() {
  return (
    <PhotoProvider>
      {photoImages.map((item, index) => (
        <PhotoConsumer key={index} src={item} intro={item}>
          <img src={item} alt="" />
        </PhotoConsumer>
      ))}
    </PhotoProvider>
  );
}
```

### API

#### PhotoProvider

| 名称 | 类型 | 必选 | 描述 |
| :--- | :--- | :--- | :--- |
| children | React.ReactNode | 是 |  |
| maskClosable | boolean | 否 | 背景可点击关闭，默认 true |
| photoClosable | boolean | 否 | 图片点击可关闭，默认 false |
| bannerVisible | boolean | 否 | 导航条 visible，默认 true |
| introVisible | boolean | 否 | 简介 visible，默认 true |
| overlayRender | (overlayProps) => React.ReactNode | 否 | 自定义渲染 |
| className | string | 否 | className |
| maskClassName | string | 否 | 遮罩 className |
| viewClassName | string | 否 | 图片容器 className |
| imageClassName | string | 否 | 图片 className |
| loadingElement | JSX.Element | 否 | 自定义 loading |
| brokenElement | JSX.Element | 否 | 加载失败 Element |

#### PhotoConsumer

| 名称 | 类型 | 必选 | 描述 |
| :--- | :--- | :--- | :--- |
| src | string | 是 | 图片地址 |
| intro | React.ReactNode | 否 | 图片介绍 |
| children | React.ReactElement | 否 |  |

#### PhotoSlider

继承自 `PhotoProvider`。手动控制 `react-photo-view` 的展现与隐藏

| 名称 | 类型 | 必选 | 描述 |
| :--- | :--- | :--- | :--- |
| images | dataType[] | 是 | 图片列表 |
| index | number | 否 | 图片当前索引 |
| visible | boolean | 是 | 可见 |
| onClose | (evt) => void | 是 | 关闭事件 |
| onIndexChange | Function | 否 | 索引改变回调 |
