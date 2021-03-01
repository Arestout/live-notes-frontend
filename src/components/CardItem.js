import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.date}>
            <img
              className="cards__item__img"
              alt="User Image"
              src={props.src}
            />
            <div></div>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__title">{props.title}</h5>
            <Link
              className="social-icon-like"
              to="/"
              target="_blank"
              aria-label="Like"
            >
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link
              className="social-icon-like"
              to="/"
              target="_blank"
              aria-label="Comment"
            >
              <FontAwesomeIcon icon={faComment} />
            </Link>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
