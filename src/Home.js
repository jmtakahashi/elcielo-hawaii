import React from 'react'

export default function Home() {
  return (
    <>
      <section className='hero'>
        <div className='hero-background'></div>
        <div className='hero-content'>
          <p className='hero-text'>
            <span>A culinary journey that</span>
            <span>found its meaning in Hawaii</span>
          </p>
          <button>Reservations</button>
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
          <span >El Cielo is</span>
          <span className='large'>a quiet expression of</span>
          <span className='large'>movement, memory and place</span>
          <span >where language</span>
          <span >becomes unnecessary</span>
          <span >at the table.</span>
        </p>
      </section>
    </>
  );
}
