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

  // fade into view on scroll
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.1) {
          entry.target.classList.add('revealed');
        }
      })
    };

    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);

    for (let el of document.getElementsByClassName('reveal')) {
      observer.observe(el); // give it the element to observe
    }

    return () => observer.disconnect; // cleanup on unmount
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
            El Cielo’s cuisine is grounded in classical Spanish technique,
            shaped by years spent in Japan, Los Angeles, and Spain, and
            expressed through a clear sense of place in Hawaii. Influences
            beyond Spain present themselves in subtle ways, taking care to
            support the cuisine’s foundation and not overwhelm it.
          </p>

          <p className='reveal'>
            Our menu centers on tradition, elegantly executed with attention to
            detail. Tapas and pintxos highlight clean flavors and precise
            technique, while signature paellas are prepared patiently, allowing
            depth and balance to develop naturally. Ingredient quality and
            seasonality guide each of our dishes, with thoughtful sourcing and
            minimal intervention preserving authenticity. Desserts offer a quiet
            finish, completing the meal with clarity and balance.
          </p>

          <p className='reveal'>
            Our menu’s change with the seasons. Click below for our current
            offerings.
          </p>
        </div>
        <div className='menu-links reveal'>
          <button
            className='button'
            href='/ENGLISH.pdf'
            onClick={() => openPDF('ENGLISH')}
          >
            View english menu
          </button>
          <button
            className='button'
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
          <img className='reveal' src={menuImageThree} alt='Menu Item 3' />
          <img className='reveal' src={menuImageFour} alt='Menu Item 4' />
          <img className='reveal' src={menuImageFive} alt='Menu Item 5' />
        </div>
      </section>
    </div>
  );
}
