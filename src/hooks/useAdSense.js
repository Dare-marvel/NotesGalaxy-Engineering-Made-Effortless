import { useEffect, useRef, useState, useCallback } from 'react';

export const useAdSense = (isEnabled = true) => {
  const [isAdSenseLoaded, setIsAdSenseLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const initializationRef = useRef(false);
  const retryCountRef = useRef(0);
  const maxRetries = 3;

  // Check if AdSense is loaded
  useEffect(() => {
    const checkAdSense = () => {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        setIsAdSenseLoaded(true);
      } else {
        setTimeout(checkAdSense, 100);
      }
    };
    
    checkAdSense();
  }, []);

  // Initialize ads function
  const initializeAds = useCallback(async (containerRef) => {
    if (!isEnabled || !isAdSenseLoaded || initializationRef.current || !containerRef?.current) {
      return false;
    }

    try {
      const adElements = containerRef.current.querySelectorAll('.adsbygoogle');
      
      if (adElements.length === 0) {
        console.log('No ad elements found');
        return false;
      }

      // Filter out already initialized ads
      const uninitializedAds = Array.from(adElements).filter(ad => {
        const status = ad.getAttribute('data-adsbygoogle-status');
        return !status && ad.innerHTML.trim() === '';
      });

      if (uninitializedAds.length === 0) {
        console.log('All ads already initialized');
        setIsInitialized(true);
        return true;
      }

      console.log(`Initializing ${uninitializedAds.length} ads`);
      initializationRef.current = true;

      // Initialize ads one by one
      for (const ad of uninitializedAds) {
        try {
          // Final check before pushing
          if (!ad.getAttribute('data-adsbygoogle-status') && ad.innerHTML.trim() === '') {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        } catch (error) {
          console.error('Individual ad initialization error:', error);
        }
      }

      setIsInitialized(true);
      retryCountRef.current = 0;
      return true;

    } catch (error) {
      console.error('Ad initialization failed:', error);
      initializationRef.current = false;
      
      // Retry logic
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current++;
        setTimeout(() => initializeAds(containerRef), 2000);
      }
      
      return false;
    }
  }, [isEnabled, isAdSenseLoaded]);

  // Reset function
  const resetAds = useCallback(() => {
    initializationRef.current = false;
    setIsInitialized(false);
    retryCountRef.current = 0;
  }, []);

  return {
    isAdSenseLoaded,
    isInitialized,
    initializeAds,
    resetAds
  };
};