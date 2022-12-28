import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { ImageList } from './doc-components'
import photo2 from '../images/2.jpg'
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'

export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <div tw="m-2">
          <PhotoView src={photo4.src}>
            <img src={photo4.src} tw="h-72" alt="" />
          </PhotoView>
        </div>

        <div tw="flex flex-col">
          <PhotoView src={photo2.src}>
            <img src={photo2.src} tw="m-2 h-36" alt="" />
          </PhotoView>

          <PhotoView src={photo3.src}>
            <img src={photo3.src} tw="m-2 h-32" alt="" />
          </PhotoView>
        </div>
      </ImageList>
    </PhotoProvider>
  )
}
