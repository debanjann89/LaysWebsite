import { useState, useEffect } from 'react';

const FRAME_COUNT = 239;
const getFrameUrl = (index: number) => `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

export function usePreloadFrames() {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let realProgress = 0;
    
    // We want the loader to take AT LEAST 1.5 seconds.
    // So we run a fake timer that takes 1.5s to reach 100%.
    const startTime = Date.now();
    const MIN_LOAD_TIME = 1500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const timeProgress = Math.min((elapsed / MIN_LOAD_TIME) * 100, 100);
      
      // The displayed progress is the minimum of the real image loading progress and the time progress
      const currentDisplayProgress = Math.floor(Math.min(realProgress, timeProgress));
      setProgress(currentDisplayProgress);

      if (currentDisplayProgress === 100) {
        clearInterval(interval);
        setImages(loadedImages);
        setTimeout(() => setIsLoaded(true), 800);
      }
    }, 50);

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      
      const onImageLoad = () => {
        loaded++;
        loadedImages[i - 1] = img;
        realProgress = (loaded / FRAME_COUNT) * 100;
      };

      img.onload = onImageLoad;
      img.onerror = () => {
        onImageLoad(); // Proceed anyway so we don't get stuck forever
      };
    }

    return () => clearInterval(interval);
  }, []);

  return { progress, images, isLoaded };
}
