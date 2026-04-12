import React from 'react';
import { useHeader } from '../contexts/HeaderContext';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useHeaderTransparencyOnScroll from '../hooks/useHeaderTransparencyOnScroll';

export default function Home() {
  const storySectionRef = React.useRef();
  const { headerHeight, headerEl } = useHeader();

  // fade into view on scroll
  useRevealOnScroll();

  // header transparency on scroll
  useHeaderTransparencyOnScroll(storySectionRef, headerEl, headerHeight);

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
