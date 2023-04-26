import React, { useState, useEffect, useRef } from 'react';
import './scroll.css';
const button=[
    {name:"menu1"}, {name:"menu1"}, {name:"menu1"}, {name:"menu1"}, {name:"menu2"}, {name:"menu3"}
]
const ScrollButtonMenu = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Update the scroll position when the component mounts
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleScroll = (event) => {
    setScrollLeft(event.target.scrollLeft);
  };

  const scrollLeftHandler = () => {
    containerRef.current.scrollLeft -= 100;
  };

  const scrollRightHandler = () => {
    containerRef.current.scrollLeft += 100;
  };

  return (
    <div className="scroll-button-menu-container">
      <button
        className="scroll-button"
        disabled={scrollLeft === 0}
        onClick={scrollLeftHandler}
      >
        &lt;
      </button>
      <div className="scroll-button-menu" onScroll={handleScroll} ref={containerRef}>
        {button.map((button, index) => (
          <button key={index} className="button">{button.name}</button>
        ))}
      </div>
      <button
        className="scroll-button"
        // disabled={scrollLeft === containerRef.current.scrollWidth - containerRef.current.clientWidth}
        onClick={scrollRightHandler}
      >
        &gt;
      </button>
    </div>
  );
};

export default ScrollButtonMenu;
