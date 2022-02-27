# react-photo-view

**一款超精致的图片预览组件**

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Minified size][min-size-image]][bundlephobia-url]
[![Gzip size][gzip-size-image]][bundlephobia-url]

## 快速开始

- [文档入口](https://react-photo-view.vercel.app)
- [基本示例](https://react-photo-view.vercel.app/docs/getting-started)
- [API](https://react-photo-view.vercel.app/docs/api)
- [更新日志](https://react-photo-view.vercel.app/docs/change-log)

## 特性

- 支持触摸手势，**拖动/平移/物理效果滑动，双指指定位置放大/缩小**
- 全方面动画衔接，**打开/关闭/回弹/触边**，顺其自然的交互效果
- 图像自适应，以一个合适的最初呈现大小，并根据调整自适应
- 支持自定义如 `<video />` 或任意 `HTML` 元素的预览
- 键盘导航，完美适配桌面端
- 支持自定义节点扩展，轻松实现**全屏预览、旋转控制、图片介绍**以及更多功能
- 基于 `typescript`，`7KB Gzipped`，支持服务端渲染
- 简单易用的 `API`，上手零成本

## 安装

```bash
yarn add react-photo-view
```

## 基本使用:

```js
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <PhotoProvider>
      <PhotoView src="/1.jpg">
        <img src="/1-thumbnail.jpg" alt="" />
      </PhotoView>
    </PhotoProvider>
  );
}
```

## License

Apache-2.0 © [MinJieLiu](https://github.com/MinJieLiu)

[npm-image]: https://img.shields.io/npm/v/react-photo-view.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-photo-view
[downloads-image]: http://img.shields.io/npm/dm/react-photo-view.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-photo-view
[min-size-image]: https://badgen.net/bundlephobia/min/react-photo-view?label=minified
[gzip-size-image]: https://badgen.net/bundlephobia/minzip/react-photo-view?label=gzip
[bundlephobia-url]: https://bundlephobia.com/result?p=react-photo-view
