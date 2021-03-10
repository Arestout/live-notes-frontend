import React from 'react';
import { Link } from 'react-router-dom';
import './DiariesCardItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

function DiariesCardItem(props) {
  return (
    <>
      <li className="diaries__cards__item">
        <div className="diaries__item__block">
          <div className="diaries__header">
            <div className="header__wrapper">
              <img
                className="diaries__item__avatar"
                alt="Avatar"
                src={props.avatar}
              />
              <div className="diaries__header__block">
                <div className="diaries__header__heading">
                  <h5 className="diary__item__title">{props.title}</h5>
                </div>
                <div className="pub_date">
                  <p>{props.date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="diaries__item__pic-wrap">
            <img
              className="diaries__item__img"
              alt="User Image"
              src={props.src}
            />
          </div>
          <div className="diary__item__info">
            <p className="diary__item__text">{props.text}</p>
            <div className="diaries__footer">
              <div className="diaries__icons">
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
              <Link className="read__more" to="/">
                Читать далее
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default DiariesCardItem;
