# react-photo-view

**一款超精致的图片预览方案**

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Minified size][min-size-image]][bundlephobia-url]
[![Gzip size][gzip-size-image]][bundlephobia-url]

### 快速开始

- [文档入口](https://minjieliu.github.io/react-photo-view)
- [基本示例](https://minjieliu.github.io/react-photo-view/#/getting-started)
- [API](https://minjieliu.github.io/react-photo-view/#/api)

### 特性

1. 拖动切换预览
2. 物理减速
3. 双击放大/缩小
4. 双指放大/缩小/平移
5. 左右切换导航
6. 上/下滑关闭
7. 键盘导航
8. 旋转 API
9. 点击切换控件
10. 缩放动画
11. 自适应图像适应
12. 长图模式
13. 自定义元素预览
14. 支持桌面端（兼容 IE10+）/移动端
15. 基于 `typescript`
16. 6KB
17. 无依赖
18. 支持服务端渲染
19. 高扩展性

### 安装

```bash
yarn add react-photo-view
```

### 基本使用:

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

### License

Apache-2.0 © [MinJieLiu](https://github.com/MinJieLiu)

[npm-image]: https://img.shields.io/npm/v/react-photo-view.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-photo-view
[downloads-image]: http://img.shields.io/npm/dm/react-photo-view.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-photo-view
[min-size-image]: https://badgen.net/bundlephobia/min/react-photo-view?label=minified
[gzip-size-image]: https://badgen.net/bundlephobia/minzip/react-photo-view?label=gzip
[bundlephobia-url]: https://bundlephobia.com/result?p=react-photo-view
