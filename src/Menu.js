import React, { useEffect, useRef } from 'react';
import { useHeader } from './contexts/HeaderContext';
import menuImageOne from './assets/images/el-cielo-menu-20-2000px.jpg';
import menuImageTwo from './assets/images/el-cielo-menu-28-2000px.jpg';
import menuImageThree from './assets/images/el-cielo-menu-42-2000px.jpg';
import menuImageFour from './assets/images/el-cielo-menu-53-2000px.jpg';
import menuImageFive from './assets/images/el-cielo-menu-25-2000px.jpg';

export default function Menu({ headerEl }) {
  const menuSectionRef = useRef();
  const { headerHeight } = useHeader();

  // useEffect(() => {
  //   // Only set up the observer if we have both the story section and header ref
  //   if (menuSectionRef && headerEl) {
  //     // per react suggestion, safe the ref to a variable for use in the observer
  //     const menuSection = menuSectionRef.current;

  //     const callback = ([entry]) => {
  //       if (!entry.isIntersecting) {
  //         headerEl.classList.add('scrolledPastHero');
  //       } else {
  //         headerEl.classList.remove('scrolledPastHero');
  //       }
  //     };

  //     const options = {
  //       root: null,
  //       threshold: .1,
  //       rootMargin: `-${headerHeight}px 0px 0px 0px`,
  //     };

  //     const observer = new IntersectionObserver(callback, options);
  //     observer.observe(menuSection); // give it the element to observe

  //     return () => observer.disconnect(); // cleanup on unmount
  //   }
  // }, [headerHeight, headerEl]);

  useEffect(() => {
    const observedSection = menuSectionRef.current;

    const handleScroll = (e) => {
      if (!observedSection || !headerEl) return;

      const observedSectionTop = observedSection.getBoundingClientRect().top;

      if (observedSectionTop < headerHeight) {
        headerEl.classList.add('scrolledPastHero');
      } else {
        headerEl.classList.remove('scrolledPastHero');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight, headerEl]);

  const openPDF = (menu) => {
    window.open(`/menu/${menu}.pdf`, '_blank'); // Opens in a new tab
  };

  return (
    <div id='menu'>
      <section ref={menuSectionRef} className='menu'>
        <h2>Menu</h2>

        <div className='menu-links'>
          <button href='/ENGLISH.pdf' onClick={() => openPDF('ENGLISH')}>
            View english menu
          </button>
          <button href='/JAPANESE.pdf' onClick={() => openPDF('JAPANESE')}>
            View japanese menu
          </button>
        </div>

        <div className='menu-images'>
          <img src={menuImageOne} alt='Menu Item 1' />
          <img src={menuImageTwo} alt='Menu Item 2' />
          <img src={menuImageThree} alt='Menu Item 3' />
          <img src={menuImageFour} alt='Menu Item 4' />
          <img src={menuImageFive} alt='Menu Item 5' />
        </div>
      </section>
    </div>
  );
}
