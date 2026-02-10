import React, { useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty(
          '--header-height',
          `${height}px`,
        );
      }
    }

    // Run after fonts/images load or window resizes
    window.addEventListener('load', updateHeaderHeight);
    window.addEventListener('resize', updateHeaderHeight);

    // Initial call (after render)
    updateHeaderHeight();

    return () => {
      window.removeEventListener("load", updateHeaderHeight);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <header ref={headerRef} className='header'>
      <Link to='/'>
        <h1 hidden>El Cielo Hawaii</h1>
        <img
          src='images/logo-black.png'
          alt='El Cielo Hawaii Logo'
          className='logo'
        />
      </Link>

      <nav className='nav desktop'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          About
        </NavLink>
        <NavLink
          to='/menu'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Menu
        </NavLink>
        <a
          href='https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=49e3accf-db76-4750-b873-65114256b1d0&restRef=1345438&otSource=Restaurant%20website'
          target='_blank'
          rel='noopener noreferrer'
        >
          Reservations
        </a>
      </nav>

      <div className='socials desktop'>
        <a
          href='https://www.facebook.com/people/El-Cielo-by-Masa-Gushiken/61557016725011/#'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href='https://www.instagram.com/elcielo_hawaii'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href='https://www.yelp.com/biz/el-cielo-by-chef-masa-honolulu-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faYelp} />
        </a>
        <a
          href='https://www.google.com/search?q=el+cielo+by+chef+masa+reviews&oq=El+Cielo+by+chef+Masa&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB7SAQk0ODc2ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x7c006d9006881d5f:0x2777fc6aa28cc28a,1,,,,'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>

      <div className='mobileMenu'>
        <nav className='nav'>
          <NavLink
            to='/'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            About
          </NavLink>
          <NavLink
            to='/menu'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Menu
          </NavLink>
          <a
            href='https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=49e3accf-db76-4750-b873-65114256b1d0&restRef=1345438&otSource=Restaurant%20website'
            target='_blank'
            rel='noopener noreferrer'
          >
            Reservations
          </a>
        </nav>

        <div className='socials'>
          <a
            href='https://www.facebook.com/people/El-Cielo-by-Masa-Gushiken/61557016725011/#'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='https://www.instagram.com/elcielo_hawaii'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href='https://www.yelp.com/biz/el-cielo-by-chef-masa-honolulu-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faYelp} />
          </a>
          <a
            href='https://www.google.com/search?q=el+cielo+by+chef+masa+reviews&oq=El+Cielo+by+chef+Masa&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB7SAQk0ODc2ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x7c006d9006881d5f:0x2777fc6aa28cc28a,1,,,,'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </header>
  );
}
