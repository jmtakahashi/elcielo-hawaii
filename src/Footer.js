import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <img
        src='images/logo-black.png'
        alt='El Cielo Hawaii Logo'
        className='logo'
      />
      <div className='address'>
        <span>346 Lewers Street, </span>
        <span>Ground Floor, </span>
        <span>Honolulu, HI 96815</span>
      </div>
      <div className='hours'>5:00 PM - 11:00 PM</div>
      <div className='contact'>
        <span>(808) 772-4533</span>
        <a href='mailto:info@elcielo-hawaii.com'>
          <span>info@elcielo-hawaii.com</span>
        </a>
      </div>
      <div>
        <div className='copyright'>
          <span>© {currentYear} El Cielo Hawaii. </span>
          <span>All rights reserved.</span>
        </div>
        <div className='credit'>
          <span>Made with 🖤 by Jaytee</span>
        </div>
      </div>
    </footer>
  );
}
