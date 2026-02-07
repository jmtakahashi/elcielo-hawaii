import React from 'react'

export default function Home() {
  return (
    <section className='home'>
      <section className='splash'>
        <p className='splash-text'>
          <span>A culinary journey that</span>
          <span>found its meaning in Hawaii</span>
        </p>
        <button>Reservations</button>
      </section>

      <section className='story'>
        <h3>Born in argentina</h3>
        <span className='story-divider'></span>
        <h3>Shaped in Japan</h3>
        <span className='story-divider'></span>
        <h3>Refined in Spain</h3>
        <span className='story-divider'></span>
        <h3>Perfected in Los Angeles</h3>
        <span className='story-divider'></span>
      </section>

      <section className='definition'>
        <span className='story-divider'></span>
        <span>El Cielo is</span>
        <span>a quiet expression of</span>
        <span>movement, memory and place</span>
        <span>where language</span>
        <span>becomes unnecessary</span>
        <span>at the table.</span>
      </section>
    </section>
  );
}
