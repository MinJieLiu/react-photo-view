import type React from 'react';
import { useRouter } from 'next/router';

import Icon1 from '../icons/Icon1';
import Icon2 from '../icons/Icon2';
import Icon3 from '../icons/Icon3';
import Icon4 from '../icons/Icon4';
import Icon5 from '../icons/Icon5';
import Icon6 from '../icons/Icon6';
import Icon7 from '../icons/Icon7';
import Icon8 from '../icons/Icon8';

import styles from './features.module.css';

const Feature = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
  <div className={styles.feature}>
    {icon}
    <h4>{text}</h4>
  </div>
);

const TITLE_WITH_TRANSLATIONS: Record<string, string> = {
  'en-US': 'A beautiful photo preview component',
  'zh-CN': '一款超精致的 React 图片预览组件',
};

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
};

const iconList = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8];

export default () => {
  const { locale, defaultLocale } = useRouter();

  const featureText = (key: number) => FEATURES_WITH_TRANSLATIONS[locale ?? defaultLocale!]?.[key];

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">{TITLE_WITH_TRANSLATIONS[locale!]}</p>
      <div className={styles.features}>
        {iconList.map((Icon, i) => (
          <Feature key={i} text={featureText(i + 1)} icon={<Icon />} />
        ))}
      </div>
    </div>
  );
};
