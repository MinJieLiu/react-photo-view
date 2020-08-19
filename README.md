# react-photo-view

一款精致的 `React` 的图片预览组件

[![npm](https://img.shields.io/npm/v/react-photo-view.svg?style=flat-square)](https://www.npmjs.com/package/react-photo-view)
[![react-photo-view](https://badgen.net/bundlephobia/minzip/react-photo-view)](https://github.com/MinJieLiu/react-photo-view)
[![react-photo-view](https://badgen.net/npm/dt/react-photo-view)](https://github.com/MinJieLiu/react-photo-view)

Demo: [https://minjieliu.github.io/react-photo-view](https://minjieliu.github.io/react-photo-view)

### 特性

1.  支持左右切换导航、上/下滑关闭、双击放大/缩小、双指放大/缩小/平移、键盘导航/关闭、旋转、点击切换控件等
1.  打开/关闭缩放动画
1.  自适应图像适应
1.  长图模式
1.  支持桌面端（兼容 IE10+）/移动端
1.  轻量的体积
1.  高度的扩展性
1.  支持服务端渲染
1.  基于 `typescript`

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

受控 `PhotoSlider`

```js
function ImageView() {
  const [visible, setVisible] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <PhotoSlider
        images={photoImages.map(item => ({ src: item }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={photoIndex}
        onIndexChange={setPhotoIndex}
      />
    </div>
  );
}
```

### API

#### PhotoProvider

| 名称           | 类型                              | 必选 | 描述                       |
| :------------- | :-------------------------------- | :--- | :------------------------- |
| children       | React.ReactNode                   | 是   |                            |
| maskClosable   | boolean                           | 否   | 背景可点击关闭，默认 true  |
| photoClosable  | boolean                           | 否   | 图片点击可关闭，默认 false |
| bannerVisible  | boolean                           | 否   | 导航条 visible，默认 true  |
| introVisible   | boolean                           | 否   | 简介 visible，默认 true    |
| overlayRender  | (overlayProps) => React.ReactNode | 否   | 自定义渲染                 |
| toolbarRender  | (overlayProps) => React.ReactNode | 否   | 工具栏渲染                 |
| className      | string                            | 否   | className                  |
| maskClassName  | string                            | 否   | 遮罩 className             |
| viewClassName  | string                            | 否   | 图片容器 className         |
| imageClassName | string                            | 否   | 图片 className             |
| loadingElement | JSX.Element                       | 否   | 自定义 loading             |
| brokenElement  | JSX.Element &#124; ((photoProps: brokenElementDataType) => JSX.Element)                       | 否   | 加载失败 Element           |

#### PhotoConsumer

| 名称     | 类型               | 必选 | 描述     |
| :------- | :----------------- | :--- | :------- |
| src      | string             | 是   | 图片地址 |
| intro    | React.ReactNode    | 否   | 图片介绍 |
| children | React.ReactElement | 否   |          |

注意：若 `PhotoConsumer` 的 `children` 为自定义组件

1. 需要向外部参数暴露 `React.HTMLAttributes`
1. 展开/关闭动画精准位置则需要用 `React.forwardRef` 暴露内部 `React.ReactHTMLElement` 节点的 `Ref`

#### PhotoSlider

继承自 `PhotoProvider`。手动控制 `react-photo-view` 的展现与隐藏

| 名称          | 类型          | 必选 | 描述         |
| :------------ | :------------ | :--- | :----------- |
| images        | dataType[]    | 是   | 图片列表     |
| index         | number        | 否   | 图片当前索引 |
| visible       | boolean       | 是   | 可见         |
| onClose       | (evt) => void | 是   | 关闭事件     |
| onIndexChange | Function      | 否   | 索引改变回调 |

## 谁在使用

<a href="http://www.saastrip.com/"><img src="https://minjieliu.github.io/assets/md-image/saastrip_logo.png" align="left" height="48" width="48" /></a>
<a href="http://www.zhinanmao.com/"><img src="https://minjieliu.github.io/assets/md-image/zhinanmao_logo.png" align="left" height="48" width="48" /></a>
