import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { ImageList, Image } from './doc-components'
import photo2 from '../images/2.jpg'

export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photo2.src}>
          <Image src={photo2.src} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  )
}
