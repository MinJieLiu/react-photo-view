import React from 'react'
import { PhotoView, PhotoProvider } from 'react-photo-view'
import { ImageList, photoImages, Image } from './doc-components'

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            {index < 2 ? <Image src={item} /> : undefined}
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  )
}
