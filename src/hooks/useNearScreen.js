import {useEffect, useRef, useState} from 'react'

/**
 * 
 * @param {string} distance distance from the top of the screen 
 * @returns {Object} { isNearFinalElement, finalPageDiv }
 */
export default function useNearScreen({ distance = "100px", firstTime = true} = {}) {
  const finalPageDivRef = useRef();
  const [isNearFinalElement, setIsNearFinalElement] = useState(false);

  useEffect(() => {
    console.log("useNearScreen.js: useEffect()", isNearFinalElement, firstTime, distance);
    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setIsNearFinalElement(true);
        firstTime && observer.disconnect();
      } else {
        !firstTime && setIsNearFinalElement(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(finalPageDivRef.current);

    return () => observer.disconnect();
  });

  return { isNearFinalElement, finalPageDivRef };
}
