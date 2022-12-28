import React from 'react'
import tw from 'twin.macro'
import photo1 from '../images/1.jpg'
import photo2 from '../images/2.jpg'
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'
import photo5 from '../images/5.jpg'
import photo6 from '../images/6.jpg'

export const photoImages = [photo1.src, photo2.src, photo3.src, photo4.src, photo5.src, photo6.src]

export const ImageList: React.FC = ({ children }) => {
  return <div tw="flex flex-wrap items-center my-6">{children}</div>
}

export const Image = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ src, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        tw="mr-2 mb-2 w-24 h-24 cursor-pointer object-cover"
        alt=""
        {...props}
      />
    )
  },
)

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  primary?: boolean
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ primary, className = '', ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        css={[
          tw`px-4 py-2 mr-2 rounded-md focus:outline-none cursor-pointer select-none`,
          primary && tw`bg-sky-600 text-white hover:bg-sky-700`,
          !primary &&
            tw`border border-gray-300 hover:text-white hover:bg-sky-500 hover:border-sky-500`,
        ]}
        className={className}
      />
    )
  },
)

export const Overlay: React.FC = ({ children }) => {
  return (
    <div tw="absolute left-0 bottom-0 p-2 w-full min-h-[24px] text-sm text-slate-300 z-50 bg-black/50">
      {children}
    </div>
  )
}
