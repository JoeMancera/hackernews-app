import React, { useRef, useState, useEffect } from "react";
import NewsList from "components/NewsList";

export default function Home() {
  const finalPageDiv = useRef();
  const [isNearFinalElement, setIsNearFinalElement] = useState(false);

  useEffect(() => {
    let callbackOnChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setIsNearFinalElement(true);
      } else {
        setIsNearFinalElement(false);
      }
      console.log(isNearFinalElement);
    };

    const observer = new IntersectionObserver(callbackOnChange, {
      rootMargin: "100px",
    });
    observer.observe(finalPageDiv.current);

    return () => observer.disconnect();
  }, [isNearFinalElement]);

  return (
    <>
      <NewsList />
      <div id="finalPageDiv" ref={finalPageDiv}></div>
    </>
  );
}
