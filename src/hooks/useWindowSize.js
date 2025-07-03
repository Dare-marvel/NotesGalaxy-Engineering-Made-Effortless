import {useState,useEffect} from 'react';
export const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      // Debounce the resize handler to prevent too many updates
      let timeoutId;
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setWidth(window.innerWidth);
        }, 150);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return width;
  };