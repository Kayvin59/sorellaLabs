import { useEffect, useState } from 'react';

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setWindowHeight(window.innerHeight);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return windowHeight;
};
export default useWindowHeight;
