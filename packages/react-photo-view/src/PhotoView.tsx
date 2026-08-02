import type React from 'react';
import type { RefObject } from 'react';
import { Children, cloneElement, useContext, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import useInitial from './hooks/useInitial';
import useMethods from './hooks/useMethods';
import type { PhotoContextType } from './photo-context';
import PhotoContext from './photo-context';
import type { PhotoRenderParams } from './types';

type Event = (e: React.MouseEvent<Element, MouseEvent>) => void;
type EventStore = { [key: string]: Event };

interface ChilProps {
  ref: RefObject<HTMLElement | null>;
  eventListeners: EventStore;
}

export interface PhotoViewProps {
  /**
   * 图片地址
   */
  src?: string;
  /**
   * 自定义渲染，优先级比 src 低
   */
  render?: (props: PhotoRenderParams) => React.ReactNode;
  /**
   * 自定义覆盖节点
   */
  overlay?: React.ReactNode;
  /**
   * 自定义渲染节点宽度
   */
  width?: number;
  /**
   * 自定义渲染节点高度
   */
  height?: number;
  /**
   * 子节点，一般为缩略图
   */
  children?: React.ReactElement<ChilProps, any>;

  /**
   * 触发的事件
   */
  triggers?: ('onClick' | 'onDoubleClick')[];
}

const PhotoView: React.FC<PhotoViewProps> = ({
  src,
  render,
  overlay,
  width,
  height,
  triggers = ['onClick'],
  children,
}) => {
  const photoContext = useContext<PhotoContextType>(PhotoContext);
  const key = useInitial(() => photoContext.nextId());
  const originRef = useRef<HTMLElement>(null);

  useImperativeHandle(children?.props.ref, () => originRef.current as HTMLElement);

  useEffect(() => {
    return () => {
      photoContext.remove(key);
    };
  }, []);

  function invokeChildrenFn(eventName: string, e: React.SyntheticEvent) {
    if (children) {
      // suppressImplicitAnyIndexErrors has been removed
      // @ts-ignore
      const eventFn = children.props[eventName];
      if (eventFn) {
        eventFn(e);
      }
    }
  }

  const fn = useMethods({
    render(props: PhotoRenderParams) {
      return render && render(props);
    },
    show(eventName: string, e: React.MouseEvent) {
      photoContext.show(key);
      invokeChildrenFn(eventName, e);
    },
  });

  const eventListeners = useMemo(() => {
    const listener: EventStore = {};
    triggers.forEach((eventName) => {
      listener[eventName] = fn.show.bind(null, eventName);
    });
    return listener;
  }, []);

  useEffect(() => {
    photoContext.update({
      key,
      src,
      originRef,
      render: fn.render,
      overlay,
      width,
      height,
    });
  }, [src]);

  if (children) {
    return Children.only(cloneElement(children, { ...eventListeners, ref: originRef }));
  }
  return null;
};

export default PhotoView;
