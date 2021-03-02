import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-items">
          <Link to="/">О проекте</Link>
        </div>
        <div className="footer-link-items">
          <Link to="/">Пользовательское соглашение</Link>
        </div>
        <div className="footer-link-items">
          <Link to="/">Помощь</Link>
        </div>
        <div className="footer-link-items">
          <Link to="/">Контакты</Link>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              LiveNote
              <LibraryBooksIcon></LibraryBooksIcon>
            </Link>
          </div>
          <small className="website-rights">LiveNotes © 2021</small>
          <div className="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
