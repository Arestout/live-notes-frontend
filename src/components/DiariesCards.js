import React from 'react';
import './DiariesCards.css';
import DiariesCardItem from './DiariesCardItem';

function DiariesCards() {
  return (
    <div className="container">
      <h2 className="diary__header">Дневники</h2>
      <div className="diarycards__container">
        <div className="diarycards__wrapper">
          <ul>
            <DiariesCardItem
              src="images/livenote.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.21"
              path="/services"
            />
            <DiariesCardItem
              src="images/livenote.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.21"
              path="/services"
            />
          </ul>
          <ul>
            <DiariesCardItem
              src="images/livenote.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.21"
              path="/services"
            />
            <DiariesCardItem
              src="images/livenote.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.21"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiariesCards;
