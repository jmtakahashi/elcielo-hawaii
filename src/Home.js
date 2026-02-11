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
        <span className='story-divider'></span>
        <img
          src='images/el-cielo-expression-2000px.jpg'
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
          src='images/el-cielo-expression-2-2000px.jpg'
          alt='Definition of El Cielo'
          className='home-image float-left'
        />
      </section>
    </div>
  );
}
