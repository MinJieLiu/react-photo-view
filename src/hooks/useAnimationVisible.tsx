import { useReducer, useRef } from 'react';
import useForkedVariable from './useForkedVariable';

/**
 * 动画关闭处理真实关闭状态
 * 通过 onAnimationEnd 回调实现 leaveCallback
 */
export default function useAnimationVisible(visible: boolean | undefined, leaveCallback?: () => void) {
  const [, handleRender] = useReducer((c) => !c, false);

  const activeAnimation = useRef<'in' | 'out'>();

  // 可见状态分支
  const [realVisible, modifyRealVisible] = useForkedVariable(visible, (modify) => {
    // 可见状态：设置进入动画
    if (visible) {
      modify(visible);
      activeAnimation.current = 'in';
    } else {
      activeAnimation.current = 'out';
    }
  });

  function onAnimationEnd() {
    // 动画结束后触发渲染
    handleRender();
    // 结束动画：设置隐藏状态
    if (activeAnimation.current === 'out') {
      modifyRealVisible(false);
      // 触发隐藏回调
      leaveCallback?.();
    }
    // 重置状态
    activeAnimation.current = undefined;
  }

  return {
    /**
     * 真实可见状态
     */
    realVisible,
    /**
     * 正在进行的动画
     */
    activeAnimation: activeAnimation.current,
    /**
     * 动画结束后回调
     */
    onAnimationEnd,
  };
}
