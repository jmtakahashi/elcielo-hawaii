import { useEffect, useRef } from 'react';
import { useHeader } from './contexts/HeaderContext';
import expressionImageOne from './assets/images/el-cielo-expression-2000px.jpg';
import expressionImageTwo from './assets/images/el-cielo-expression-2-2000px.jpg';

export default function Home({ headerEl }) {
  const storySectionRef = useRef();
  const { headerHeight } = useHeader();

  // useEffect(() => {
  //   // Only set up the observer if we have both the story section and header ref
  //   if (heroSectionRef && headerEl) {
  //     // per react suggestion, safe the ref to a variable for use in the observer
  //     const heroSection = heroSectionRef.current;

  //     const callback = ([entry]) => {
  //       if (!entry.isIntersecting) {
  //         headerEl.classList.add('scrolledPastHero');
  //       } else {
  //         headerEl.classList.remove('scrolledPastHero');
  //       }
  //     };

  //     const options = {
  //       root: null,
  //       threshold: 0,
  //       rootMargin: `-${headerHeight}px 0px 0px 0px`,
  //     };

  //     const observer = new IntersectionObserver(callback, options);
  //     observer.observe(heroSection); // give it the element to observe

  //     return () => observer.disconnect(); // cleanup on unmount
  //   }
  // }, [headerHeight, headerEl]);

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
        <div className='hero-background'></div>
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
        <p>
          <span>Born in</span> argentina
        </p>
        <p>
          <span>Shaped in</span> Japan
        </p>
        <p>
          <span>Refined in</span> Spain
        </p>
        <p>
          <span>Perfected in</span> Los Angeles
        </p>
      </section>

      <section className='definition'>
        <img
          src={expressionImageOne}
          alt='Definition of El Cielo'
          className='home-image float-right'
        />
        <p>
          <span>El Cielo is</span>
          <span className='large'>a quiet expression of</span>
          <span className='large'>movement, memory and place</span>
          <span>where language</span>
          <span>becomes unnecessary</span>
          <span>at the table.</span>
        </p>
        <img
          src={expressionImageTwo}
          alt='Definition of El Cielo'
          className='home-image float-left'
        />
      </section>
    </div>
  );
}
