import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Button, ImageList } from './doc-components'
import photo4 from '../images/4.jpg'

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo4.src}>
          <Button primary>Click</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  )
}
