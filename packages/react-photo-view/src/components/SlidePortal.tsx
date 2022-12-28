import React from 'react'
import { createPortal } from 'react-dom'

export interface ISliderPortalProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: HTMLElement
}

function SlidePortal({ container = document.body, ...rest }: ISliderPortalProps) {
  return createPortal(
    <div tw="fixed top-0 left-0 w-full h-full z-50 overflow-hidden touch-none" {...rest} />,
    container,
  )
}

export default SlidePortal
