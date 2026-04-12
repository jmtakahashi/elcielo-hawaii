import React from 'react';

const useRevealOnScroll = () => {
  React.useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver(callback, options);

    for (let el of document.getElementsByClassName('reveal')) {
      observer.observe(el); // give it the element to observe
    }

    return () => observer.disconnect(); // cleanup on unmount
  }, []);
};

export default useRevealOnScroll;