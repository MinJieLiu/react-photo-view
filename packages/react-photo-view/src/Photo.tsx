import React from 'react'
import tw, { css } from 'twin.macro'
import Spinner from './components/Spinner'
import useMountedRef from './hooks/useMountedRef'
import type { BrokenElementParams } from './types'

export interface IPhotoLoadedParams {
  loaded?: boolean
  naturalWidth?: number
  naturalHeight?: number
  broken?: boolean
}

export interface IPhotoProps extends React.HTMLAttributes<HTMLElement> {
  src: string
  loaded: boolean
  broken: boolean
  onPhotoLoad: (params: IPhotoLoadedParams) => void
  loadingElement?: JSX.Element
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element)
}

const iconStyles = [tw`absolute left-0 top-0 inline-block -translate-x-1/2 -translate-y-1/2`]

export default function Photo({
  src,
  loaded,
  broken,
  className,
  onPhotoLoad,
  loadingElement,
  brokenElement,
  ...restProps
}: IPhotoProps) {
  const mountedRef = useMountedRef()

  function handleImageLoaded(e: React.SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth, naturalHeight } = e.target as HTMLImageElement
    if (mountedRef.current) {
      onPhotoLoad({
        loaded: true,
        naturalWidth,
        naturalHeight,
      })
    }
  }

  function handleImageBroken() {
    if (mountedRef.current) {
      onPhotoLoad({
        broken: true,
      })
    }
  }

  if (src && !broken) {
    return (
      <>
        <img
          css={[
            tw`cursor-grab active:cursor-grabbing bg-white`,
            css`
              max-width: initial;
            `,
          ]}
          className={className}
          src={src}
          onLoad={handleImageLoaded}
          onError={handleImageBroken}
          alt=""
          {...restProps}
        />
        {!loaded &&
          (<span css={iconStyles}>{loadingElement}</span> || <Spinner css={iconStyles} />)}
      </>
    )
  }

  if (brokenElement) {
    return (
      <span css={iconStyles}>
        {typeof brokenElement === 'function' ? brokenElement({ src }) : brokenElement}
      </span>
    )
  }

  return null
}
