import React, { useEffect, useRef } from 'react';
import { useHeader } from '../contexts/HeaderContext';
import menuImageOne from '../assets/images/el-cielo-menu-1-1024px.jpg';
import menuImageTwo from '../assets/images/el-cielo-menu-2-1024px.jpg';
import menuImageFour from '../assets/images/el-cielo-menu-4-1024px.jpg';
import menuImageFive from '../assets/images/el-cielo-menu-5-1024px.jpg';
import menuImageSix from '../assets/images/el-cielo-menu-6-1024px.jpg';
import menuImageSeven from '../assets/images/el-cielo-menu-7-1024px.jpg';
import menuImageEight from '../assets/images/el-cielo-menu-8-1024px.jpg';
import menuImageNine from '../assets/images/el-cielo-menu-9-1024px.jpg';

export default function Menu({ headerEl }) {
  const menuSectionRef = useRef();
  const { headerHeight } = useHeader();

  // fade into view on scroll
  useEffect(() => {
    const callback = (entries, observer) => {
      let delay = 0;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`;
          delay += 80;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      })
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver(callback, options);

    for (let el of document.getElementsByClassName('reveal')) {
      observer.observe(el); // give it the element to observe
    }

    return () => observer.disconnect(); // cleanup on unmount
  }, []);

  // header transparency on scroll
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
        <div className='heading'>
          <h2 className='reveal'>Menu</h2>
        </div>
        <div className='content'>
          <p className='reveal'>
            Our menu’s change with the seasons. Click below for our current
            offerings.
          </p>
        </div>
        <div className='menu-links'>
          <button
            className='link-button reveal'
            href='/ENGLISH.pdf'
            onClick={() => openPDF('ENGLISH')}
          >
            View english menu
          </button>
          <button
            className='link-button reveal'
            href='/JAPANESE.pdf'
            onClick={() => openPDF('JAPANESE')}
          >
            View japanese menu
          </button>
        </div>
      </section>
      <section className='menu-images'>
        <div className='menu-images-container'>
          <img className='reveal' src={menuImageOne} alt='Menu Item 1' />
          <img className='reveal' src={menuImageTwo} alt='Menu Item 2' />
          <img className='reveal' src={menuImageFour} alt='Menu Item 4' />
          <img className='reveal' src={menuImageFive} alt='Menu Item 5' />
          <img className='reveal' src={menuImageSix} alt='Menu Item 6' />
          <img className='reveal' src={menuImageSeven} alt='Menu Item 7' />
          <img className='reveal' src={menuImageEight} alt='Menu Item 8' />
          <img className='reveal' src={menuImageNine} alt='Menu Item 9' />
        </div>
      </section>
    </div>
  );
}
