# react-photo-view

**一款超精致的图片预览方案**

[![npm](https://img.shields.io/npm/v/react-photo-view.svg?style=flat-square)](https://www.npmjs.com/package/react-photo-view)
[![react-photo-view](https://badgen.net/bundlephobia/minzip/react-photo-view)](https://github.com/MinJieLiu/react-photo-view)
[![react-photo-view](https://badgen.net/npm/dt/react-photo-view)](https://github.com/MinJieLiu/react-photo-view)

文档: [https://minjieliu.github.io/react-photo-view](https://minjieliu.github.io/react-photo-view)

## 特性

1. 滑动左右切换
2. 拖动预览
3. 物理减速
4. 双击放大/缩小
5. 双指放大/缩小/平移
6. 左右切换导航
7. 上/下滑关闭
8. 键盘导航
9. 旋转 API
10. 点击切换控件
11. 缩放动画
12. 自适应图像适应
13. 长图模式
14. 自定义元素预览
15. 支持桌面端（兼容 IE10+）/移动端
16. 基于 `typescript`
17. 6KB
18. 无依赖
19. 支持服务端渲染
20. 高扩展性

## 安装

```bash
yarn add react-photo-view
```

## 基本使用:

```js
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function ImageView() {
  return (
    <PhotoProvider>
      <div>
        <PhotoView src="/1.jpg">
          <img src="/1-thumbnail.jpg" alt="" />
        </PhotoView>
      </div>

      <div>
        <PhotoView src="/2.jpg">
          <img src="/2-thumbnail.jpg" alt="" />
        </PhotoView>
      </div>
    </PhotoProvider>
  );
}
```
