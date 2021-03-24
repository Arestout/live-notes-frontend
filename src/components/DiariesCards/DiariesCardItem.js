import React from 'react';
import { Link } from 'react-router-dom';
import './DiariesCardItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

function DiariesCardItem(props) {
  return (
    <>
      <li className="diaries__cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="User Image"
              src={props.src}
            />
          </figure>
          <div className="diary__item__info">
            <h5 className="diary__item__title">{props.title}</h5>
            <div className="cards__footer">
              <div>
                <Link
                  className="social_icon_like"
                  to="/"
                  target="_blank"
                  aria-label="Like"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link
                  className="social_icon_like"
                  to="/"
                  target="_blank"
                  aria-label="Comment"
                >
                  <FontAwesomeIcon icon={faComment} />
                </Link>
              </div>
              <div className="pub_date">
                <p>Дата публикации: {props.date}</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default DiariesCardItem;
