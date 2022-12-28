import React from 'react'
import { useRouter } from 'next/router'

import Icon1 from '../icons/Icon1'
import Icon2 from '../icons/Icon2'
import Icon3 from '../icons/Icon3'
import Icon4 from '../icons/Icon4'
import Icon5 from '../icons/Icon5'
import Icon6 from '../icons/Icon6'
import Icon7 from '../icons/Icon7'
import Icon8 from '../icons/Icon8'

import tw, { css, styled } from 'twin.macro'

const StyledFeature = styled.div(() => [
  tw`inline-flex items-center`,
  css`
    svg {
      font-size: 22px;
    }

    h4 {
      margin: 0 0 0 0.5rem;
      font-weight: 700;
      font-size: 1.1rem;
      white-space: nowrap;
    }

    @media (max-width: 860px) {
      padding-left: 0;
      justify-content: center;

      svg {
        width: 20px;
      }

      h4 {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 370px) {
      h4 {
        font-size: 0.8rem;
      }
      svg {
        width: 16px;
        stroke-width: 2.5px;
      }
    }
  `,
])

const Feature = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
  <StyledFeature>
    {icon}
    <h4>{text}</h4>
  </StyledFeature>
)

const TITLE_WITH_TRANSLATIONS: Record<string, string> = {
  'en-US': 'A beautiful photo preview component',
  'zh-CN': '一款超精致的 React 图片预览组件',
}

const FEATURES_WITH_TRANSLATIONS: Record<string, Record<string, string>> = {
  'en-US': {
    1: 'Touch gesture',
    2: 'Feedback animation',
    3: 'Image adaptation',
    4: 'Custom element',
    5: 'keyboard navigation',
    6: 'Based on TypeScript',
    7: 'Lightweight',
    8: 'More...',
  },
  'zh-CN': {
    1: '触摸手势',
    2: '反馈动画',
    3: '图像自适应',
    4: '自定义元素',
    5: '键盘导航',
    6: '基于 TypeScript',
    7: '轻量体积',
    8: '更多...',
  },
}

const iconList = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8]

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem 2rem;
  margin: 2.5rem 0 2rem;

  @media (max-width: 860px) {
    gap: 1rem 0.5rem;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default () => {
  const { locale, defaultLocale } = useRouter()

  const featureText = (key: number) => FEATURES_WITH_TRANSLATIONS[locale ?? defaultLocale!]?.[key]

  return (
    <div tw="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p tw="text-lg mb-2 text-gray-600 md:!text-2xl">{TITLE_WITH_TRANSLATIONS[locale!]}</p>
      <StyledFeatures>
        {iconList.map((Icon, i) => (
          <Feature key={i} text={featureText(i + 1)} icon={<Icon />} />
        ))}
      </StyledFeatures>
    </div>
  )
}
