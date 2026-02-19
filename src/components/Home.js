import { useEffect, useRef } from 'react';
import { useHeader } from '../contexts/HeaderContext';

export default function Home({ headerEl }) {
  const storySectionRef = useRef();
  const { headerHeight } = useHeader();

  // fade into view on scroll
  useEffect(() => {
    const callback = (entries, observer) => {
      let delay = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`;
          delay += 80;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // unobserve after revealing
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

  // header transparency on scroll
  useEffect(() => {
    const observedSection = storySectionRef.current;

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

  return (
    <div id='home'>
      <section className='hero'>
        <div className='hero-content'>
          <p className='hero-text'>
            <span>A culinary journey that</span>
            <span>found its meaning in Hawaii</span>
          </p>
          <a
            className='button'
            href='https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=70ddbf08-837a-4108-be51-9de075811a11&restRef=1345438&otSource=Restaurant%20website'
            target='_blank'
            rel='noopener noreferrer'
          >
            Reservations
          </a>
        </div>
      </section>

      <section ref={storySectionRef} className='story'>
        <p className='reveal'>
          <span>Born in</span> argentina
        </p>
        <p className='reveal'>
          <span>Shaped in</span> Japan
        </p>
        <p className='reveal'>
          <span>Refined in</span> Los Angeles
        </p>
        <p className='reveal'>
          <span>Perfected in</span> Spain
        </p>
      </section>

      <section className='definition'>
        <p>
          <span className='reveal'>El Cielo is</span>
          <span className='large reveal'>a quiet expression of</span>
          <span className='large reveal'>movement, memory and place</span>
          <span className='reveal'>where language</span>
          <span className='reveal'>becomes unnecessary</span>
          <span className='reveal'>at the table.</span>
        </p>
      </section>
    </div>
  );
}
