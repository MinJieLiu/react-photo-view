import React from 'react'
import { keyframes } from 'styled-components'
import { styled } from 'twin.macro'

const rotate = keyframes`
  from {
   transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const delayIn = keyframes`
  0%, 50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const StyledSpinner = styled.div`
  animation: ${delayIn} 0.4s linear both;

  svg {
    animation: ${rotate} 0.6s linear infinite;
  }
`

function Spinner({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <StyledSpinner className={className} {...props}>
      <svg viewBox="0 0 32 32" width="36" height="36" fill="white">
        <path
          opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" />
      </svg>
    </StyledSpinner>
  )
}

export default Spinner
