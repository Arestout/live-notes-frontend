import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image-9.jpg"
              title="День 25 скрытый водопад глубоко в джунглях Амазонки"
              date="12.02.21"
              path="/services"
            />
            <CardItem
              src="images/image-2.jpg"
              title="Как мы отметили мое ДР"
              date="01.03.21"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image-1.jpg"
              title="День 24 нападение диких животных на лагерь в джунглях"
              date="10.01.21"
              path="/services"
            />
            <CardItem
              src="images/image-4.jpg"
              title="Как кот нашел меня, а я нашел его"
              date="03.03.21"
              path="/products"
            />
            <CardItem
              src="images/image-8.jpg"
              title="О себе"
              date="28.02.21"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
