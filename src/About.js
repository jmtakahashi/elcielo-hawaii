import React, { useEffect, useRef } from 'react';
import { useHeader } from './contexts/HeaderContext';
import ourStoryImage from './assets/images/el-cielo-concept-2000px.jpg';
import masaImage from './assets/images/masa-gushiken-el-cielo-2000px.jpg';
import philosophyImage from './assets/images/el-cielo-philosophy-57-2000px.jpg';

export default function About({ headerEl}) {
  const aboutSectionRef = useRef();
  const { headerHeight } = useHeader();

  useEffect(() => {
    const callback = ([entry]) => {
      console.log(entry.target);
      entry.target.classList.add('revealed');
    };

    const options = {
      root: null,
      threshold: .5,
    };

    const observer = new IntersectionObserver(callback, options);

    for (let el of document.getElementsByClassName('reveal')) {
      observer.observe(el); // give it the element to observe
    }

    return () => observer.disconnect; // cleanup on unmount
  }, []);

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
      <section ref={aboutSectionRef} className='our-story twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Our Story</h2>
          <img className='reveal' src={ourStoryImage} alt='El Cielo Concept' />
        </div>
        <div className='content reveal'>
          <p>
            El Cielo began with a journey that started long before the kitchen.
          </p>
          <p>
            The chef was born in Argentina and moved to Japan at the age of
            twelve - an early experience of crossing cultures, languages, and
            ways of life. That transition shaped a deep sensitivity to
            discipline, adaptation, and respect for place.
          </p>
          <p>
            Culinary training later took the chef to Spain and Los Angeles,
            environments defined by creativity, openness, and constant cultural
            exchange. These experiences expanded perspective, instinct, and
            possibility.
          </p>
          <p>
            Seeking depth and refinement, the journey returned to Japan, where
            technique, precision, and respect for ingredients are treated not as
            skills, but as daily-practiced values. It was in Hawaii that these
            experiences finally came together.
          </p>
          <p>
            Hawaii is shaped by movement - of people, cultures, and shared
            histories. Here, cooking is not about importing ideas or narratives,
            but about listening: to the land, the ocean, and the community that
            sustains them.
          </p>
          <p>
            At El Cielo, our menu is an honest response to this journey - not
            fusion for novelty’s sake, but food grounded in where we are,
            informed by where we have been, and expressed without the need for
            explanation.
          </p>
        </div>
      </section>

      <section className='masa twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Masa</h2>
          <img className='reveal' src={masaImage} alt='Masa Arnaldo Gushiken' />
        </div>
        <div className='content reveal'>
          <p>
            Masa Arnaldo Gushiken spent the better part of his youth growing up
            in Argentina and after years learning Italian and French cuisines
            kitchens in Tokyo, went on a life-changing trip exploring the foods
            of Spain. There he worked in Barcelona, Galicia and San Sebastian in
            Spain, where the language and simpler preparations took him back to
            the world of his youth.
          </p>
          <p>
            At its heart, El Cielo is Spain through Gushiken's lens. This
            diverse menu includes classic dishes such as paella and croquetas de
            jamon as well as more niche recipes like tripe stew (callos) as well
            as boquerones and guindilla skewered around an olive. Tucked subtly
            in between are nods to Argentina, contemporary Japan and Spain. The
            totality of his training coalesces into his premier restaurant El
            Cielo, an elegantly renovated midcentury walk-up in Waikiki, which
            won editor's pick as the Hale Aina Awards' Best New Restaurant 2024.
          </p>
        </div>
      </section>

      <section className='philosophy twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Philosophy</h2>
          <img
            className='reveal'
            src={philosophyImage}
            alt='El Cielo Philosophy'
          />
        </div>
        <div className='content reveal'>
          <p>
            Our cooking reflects multiple influences - the openness of
            Argentina, the discipline refined in Japan, and the creativity
            shaped through Spain and Los Angeles.
          </p>
          <p>
            In Hawaii, these influences are guided by local ingredients and
            long-standing relationships with the people who grow, raise, and
            harvest them. Rather than imposing technique or narrative, we allow
            each ingredient to lead - respecting its origin, season, and natural
            character.
          </p>
          <p>
            The result is food that is thoughtful, restrained and deeply
            connected to place, meant to be experienced at the table, where
            taste speaks more clearly than words.
          </p>
        </div>
      </section>

      <section className='community'>
        <div className='heading'>
          <h2 className='reveal'>Community</h2>
        </div>
        <div className='content reveal'>
          <p>
            El Cielo exists because of the people who surround us - our team,
            our farmers, fishermen, producers, and the guests who return to our
            tables.
          </p>
          <p>We believe meaningful food begins with mutual respect.</p>
          <p>
            By fostering a fair and supportive kitchen environment and building
            long-term relationships, we aim to grow together with the community
            that has welcomed us.
          </p>
        </div>
      </section>

      <section className='looking-forward'>
        <div className='heading'>
          <h2 className='reveal'>Looking Forward</h2>
        </div>
        <div className='content reveal'>
          <p>
            El Cielo is not defined by a single origin, but by the path that led
            here.
          </p>
          <p>
            As part of Hawaii's evolving food culture, we remain committed to
            cooking with care, humility, and respect - honoring both our journey
            and the place we now call home.
          </p>
        </div>
      </section>
    </div>
  );
}
