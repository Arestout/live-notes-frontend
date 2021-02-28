import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faYoutube,faLinkedinIn,faTwitter } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
          <div className='footer-link-items'>
            <Link to='/'>О проекте</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/'>Пользовательское соглашение</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/'>Помощь</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/'>Контакты</Link>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              LiveNote
            </Link>
          </div>
          <small class='website-rights'>LiveNote © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FontAwesomeIcon icon={faFacebookF}/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram}/>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faYoutube}/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faTwitter}/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedinIn}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
