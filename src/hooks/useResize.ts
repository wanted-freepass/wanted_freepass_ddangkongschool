import { useState, useEffect } from 'react';

export function useResize() {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width: number | null = hasWindow ? window.innerWidth : null;
    const height: number | null = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = function handleResize() {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}
