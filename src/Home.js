import React from 'react'

export default function Home() {
  return (
    <div id='home' className='container'>
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

      <section className='story'>
        <span>Born in argentina</span>
        <span className='story-divider'></span>
        <span>Shaped in Japan</span>
        <span className='story-divider'></span>
        <span>Refined in Spain</span>
        <span className='story-divider'></span>
        <span>Perfected in Los Angeles</span>
        <span className='story-divider'></span>
      </section>

      <section className='definition'>
        <span className='story-divider'></span>
        <p>
          <span>El Cielo is</span>
          <span className='large'>a quiet expression of</span>
          <span className='large'>movement, memory and place</span>
          <span>where language</span>
          <span>becomes unnecessary</span>
          <span>at the table.</span>
        </p>
      </section>
    </div>
  );
}
