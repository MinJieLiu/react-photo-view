import React from 'react';
import styled from 'styled-components';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList } from './doc-components';

const PreviewElement = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const customSize = 400;

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} loop={false}>
      <ImageList>
        <PhotoView
          width={customSize}
          height={customSize}
          render={({ scale, attrs }) => {
            const width = attrs.style!.width as number;
            const offset = (width - customSize) / customSize;
            // 保持子节点的 scale 的稳定
            const childScale = scale === 1 ? scale + offset : 1 + offset;

            return (
              <PreviewElement {...attrs}>
                <div style={{ transform: `scale(${childScale})` }}>
                  <div>自定义节点</div>
                  <Button>按钮</Button>
                  <input onMouseDown={(e) => e.stopPropagation()} />
                </div>
              </PreviewElement>
            );
          }}
        >
          <Button primary>自定义渲染</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
