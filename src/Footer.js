import React from 'react'
import logo from './assets/images/logo-black.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer reveal'>
      <img src={logo} alt='El Cielo Hawaii Logo' className='logo' />
      <div className='address'>
        <span>346 Lewers Street,&nbsp;</span>
        <span>Ground Floor,&nbsp;</span>
        <span>Honolulu, HI 96815</span>
      </div>
      <div className='hours'>5:00 PM - 11:00 PM</div>
      <div className='contact'>
        <span>(808) 772-4533</span>
        <a href='mailto:info@elcielo-hawaii.com'>
          <span>info@elcielo-hawaii.com</span>
        </a>
      </div>
      <div className='copyright-contact-container'>
        <div className='copyright'>
          <span>© {currentYear} El Cielo Hawaii.&nbsp;</span>
          <span>All rights reserved.</span>
        </div>
        <div className='credit'>
          <span>Made with 🖤 by <a href="https://whoisjaytee.com" target="_blank" rel="noopener noreferrer">Jaytee</a></span>
        </div>
      </div>
    </footer>
  );
}
