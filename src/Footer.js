import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <image
        src='/assets/logo.png'
        alt='El Cielo Hawaii Logo'
        className='logo'
      />
      <p>346 Lewers Street, Ground Floor, Honolulu, HI 96815</p>
      <p>5:00 PM - 11:00 PM</p>
      <p>
        <span>(808)-772-4533</span>
        <a href="mailto:info@elcielo-hawaii.com">info@elcielo-hawaii.com</a>
      </p>
      <p className='copyright'>© 2024 El Cielo Hawaii. All rights reserved.</p>
      <p className='credit'>Made with 🖤 by Jaytee</p>
    </footer>
  );
}
