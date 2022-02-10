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

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} loop={false}>
      <ImageList>
        <PhotoView
          width={400}
          height={400}
          render={(props) => (
            <PreviewElement {...props} onWheel={undefined}>
              <div>自定义节点</div>
              <Button>按钮</Button>
              <input onMouseDown={(e) => e.stopPropagation()} />
            </PreviewElement>
          )}
        >
          <Button primary>自定义渲染</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
