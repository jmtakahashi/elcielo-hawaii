import React, { useEffect, useRef } from 'react';
import { useHeader } from './contexts/HeaderContext';
import ourStoryImage from './assets/images/el-cielo-entrance-1500px.jpg';
import masaImage from './assets/images/el-cielo-masa-gushiken-1500px.jpg';
import philosophyImage from './assets/images/el-cielo-concept-2000px.jpg';

export default function About({ headerEl}) {
  const aboutSectionRef = useRef();
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

  // header transparency on scroll
  useEffect(() => {
    const observedSection = aboutSectionRef.current;

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
    <div id='about'>
      <section className='masa twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Masa</h2>
          <img className='reveal' src={masaImage} alt='Masa Arnaldo Gushiken' />
        </div>
        <div className='content'>
          <p className='reveal'>
            Masa Arnaldo Gushiken was born in Argentina and moved to Japan at
            the age of twelve.
          </p>
          <p className='reveal'>
            Seeking depth and refinement, his culinary journey brought him back
            to Japan,where technique, precision, and respect for ingredients are
            treated not as skills,but as values practiced daily.
          </p>
          <p className='reveal'>
            The culmination of these experiences finally came together in
            Hawaii, where Masa now calls home.
          </p>
        </div>
      </section>

      <section ref={aboutSectionRef} className='our-story twoCol rowReverse'>
        <div className='heading'>
          <h2 className='reveal'>Our Story</h2>
          <img className='reveal' src={ourStoryImage} alt='El Cielo Concept' />
        </div>
        <div className='content'>
          <p className='reveal'>
            Seeking depth and refinement, the journey returned to Japan, where
            technique, precision, and respect for ingredients are treated not as
            skills, but as daily-practiced values. It was in Hawaii that these
            experiences finally came together.
          </p>
          <p className='reveal'>
            Hawaii is shaped by movement - of people, cultures, and shared
            histories. Here, cooking is not about importing ideas or narratives,
            but about listening: to the land, the ocean, and the community that
            sustains them.
          </p>
          <p className='reveal'>
            At El Cielo, our menu is an honest response to this journey - not
            fusion for novelty’s sake, but food grounded in where we are,
            informed by where we have been, and expressed without the need for
            explanation.
          </p>
        </div>
      </section>

      <section className='philosophy twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Our Cuisine</h2>
          <img
            className='reveal'
            src={philosophyImage}
            alt='El Cielo Philosophy'
          />
        </div>
        <div className='content'>
          <p className='reveal'>
            Our cooking reflects multiple influences - the openness of
            Argentina, the discipline refined in Japan, and the creativity
            shaped through Spain and Los Angeles.
          </p>
          <p className='reveal'>
            Ingredient quality and seasonality guide each of our dishes, with
            thoughtful sourcing and minimal intervention preserving
            authenticity.
          </p>
          <p className='reveal'>
            Ingredients are selected at their peak, sourced from Hawaii and
            regions with long-standing culinary traditions such as Spain and
            Japan. We allow our ingredients to guide us - respecting its origin,
            season, and natural character.
          </p>
        </div>
      </section>

      <section className='community'>
        <div className='heading'>
          <h2 className='reveal'>Community</h2>
        </div>
        <div className='content'>
          <p className='reveal'>
            El Cielo is built on relationships and exists because of the people
            who surround us.
          </p>
          <p className='reveal'>
            We work with producers and partners, both locally and
            internationally, who share a commitment to quality. We take extra
            care in sourcing ingredients that are sustainably and ethically
            produced, and continue that care in the kitchen, curating a menu
            worthy of the customers who come to dine with us.
          </p>
          <p className='reveal'>
            We believe meaningful food begins with mutual respect and we
            continue to grow together with the community that has welcomed us.
          </p>
        </div>
      </section>

      <section className='looking-forward'>
        <div className='heading'>
          <h2 className='reveal'>Looking Forward</h2>
        </div>
        <div className='content'>
          <p className='reveal'>
            El Cielo continues its work as a part of Hawaii's dining landscape
            and evolving food culture.
          </p>
          <p className='reveal'>
            Our goal remains simple: to cook with care, respect tradition, and
            serve food that honors both our journey and the place we now call
            home.
          </p>
        </div>
      </section>
    </div>
  );
}
