import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { ImageList } from './doc-components'
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'

export default function DocDemo() {
  return (
    <PhotoProvider
      speed={() => 800}
      easing={type =>
        type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    >
      <ImageList>
        <div>
          <PhotoView src={photo3.src}>
            <img src={photo3.src} tw="h-32" alt="" />
          </PhotoView>

          <PhotoView src={photo4.src} />
        </div>
      </ImageList>
    </PhotoProvider>
  )
}
