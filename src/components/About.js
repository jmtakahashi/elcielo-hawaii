import React from 'react';
import { useHeader } from '../contexts/HeaderContext';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useHeaderTransparencyOnScroll from '../hooks/useHeaderTransparencyOnScroll';

import masaImage from '../assets/images/el-cielo-masa-gushiken-saturated-1024px.jpg';
import ourStoryImage from '../assets/images/el-cielo-interior-angle-saturated-1024px.jpg';
import ourCuisineImage from '../assets/images/el-cielo-kitchen-prep-saturated-1024px.jpg';
import communityImage from '../assets/images/el-cielo-community-saturated-960px.jpg';

export default function About() {
  const aboutSectionRef = React.useRef();
  const { headerHeight, headerEl } = useHeader();

  // fade into view on scroll
  useRevealOnScroll();

  // header transparency on scroll
  useHeaderTransparencyOnScroll(aboutSectionRef, headerEl, headerHeight);

  return (
    <div id='about'>
      <section ref={aboutSectionRef} className='masa twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Masa</h2>
          <img className='reveal' src={masaImage} alt='Masa Arnaldo Gushiken' />
        </div>
        <div className='content'>
          <p className='reveal'>
            Masa Arnaldo Gushiken was born in Argentina and built his culinary
            foundation through professional training in Japan. He later worked
            in Los Angeles before refining his craft in Spain, where tapas
            culture, paella, and regional Spanish cooking became central to his
            approach. Seeking depth and refinement, his culinary journey brought
            him back to Japan, where technique, precision, and respect for
            ingredients are treated not as skills, but as values practiced
            daily. Following his return to Japan, Masa moved to Hawaii where the
            culmination of his experience came together.
          </p>
        </div>
      </section>

      <section className='our-story twoCol rowReverse'>
        <div className='heading'>
          <h2 className='reveal'>El Cielo</h2>
          <img
            className='reveal'
            src={ourStoryImage}
            alt='El Cielo Concept'
            loading='lazy'
          />
        </div>
        <div className='content'>
          <p className='reveal'>
            Rooted in classic Spanish technique and shaped by years of
            experience in Japan, Los Angeles and Spain, El Cielo is a natural
            continuation of Masa’s journey; a true expression of his experience
            in the locales he has worked and studied in.
          </p>
          <p className='reveal'>
            Multiple influences come together under our roof where great care is
            taken to preserve tradition and authenticity, embrace creativity,
            execute with discipline, care and attention to detail and foster
            community.
          </p>
        </div>
      </section>

      <section className='philosophy twoCol'>
        <div className='heading'>
          <h2 className='reveal'>Our Cuisine</h2>
          <img
            className='reveal'
            src={ourCuisineImage}
            alt='El Cielo Philosophy'
            loading='lazy'
          />
        </div>
        <div className='content'>
          <p className='reveal'>
            Influences beyond Spain elegantly infuse our traditional Spanish
            base, but never overpower it. Tapas and pintxos highlight clean
            flavors and precise technique, while signature paellas are prepared
            patiently to develop depth and balance. Desserts offer a quiet
            finish, completing the meal with balance.
          </p>
          <p className='reveal'>
            Ingredient quality and seasonality guide each of our dishes.
            Ingredients are selected at their peak, sourced both locally in
            Hawaii and from regions with long-standing culinary traditions such
            as Spain and Japan.
          </p>
        </div>
      </section>

      <section className='community twoCol rowReverse'>
        <div className='heading'>
          <h2 className='reveal'>Community</h2>
          <img
            className='reveal'
            src={communityImage}
            alt='El Cielo Community'
            loading='lazy'
          />
        </div>
        <div className='content'>
          <p className='reveal'>
            El Cielo is built on relationships and exists because of the people
            who surround us.
          </p>
          <p className='reveal'>
            We work with producers and partners, both locally and
            internationally, who share a commitment to quality.
          </p>
          <p className='reveal'>
            We believe meaningful food begins with mutual respect and we
            continue to grow together with the community of patrons and
            supporters that have welcomed and supported us.
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
