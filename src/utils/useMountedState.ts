import React from 'react';

export default function useMountedState(): () => boolean {
  const mountedRef = React.useRef<boolean>(false);
  React.useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  return React.useCallback(() => mountedRef.current, []);
}
