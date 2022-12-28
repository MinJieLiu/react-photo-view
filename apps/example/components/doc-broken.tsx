import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Button, ImageList } from './doc-components'
import { EosIconsBubbleLoading } from '../icons/EosIconsBubbleLoading'
import defaultPhoto from '../images/default-photo.svg'

export default function DocDemo() {
  return (
    <ImageList>
      <PhotoProvider
        loadingElement={<EosIconsBubbleLoading tw="text-white w-8 h-8" />}
        brokenElement={<img tw="w-32 h-32" src={defaultPhoto.src} alt="" />}
      >
        <PhotoView src="/error.png">
          <Button>Click</Button>
        </PhotoView>
      </PhotoProvider>
    </ImageList>
  )
}
