import React from 'react';
import './DiariesCards.css';
import DiariesCardItem from './DiariesCardItem';
import CustomSelect from './CustomSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function DiariesCards() {
  return (
    <div className="container">
      <div className="search_and_categories center">
        <formAction className="search__line">
          <div className="search__icon" onClick="#">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input className="search__input" placeholder="Поиск..."></input>
        </formAction>
        <div className="categories">
          <h4 className="categories__heading">Категории </h4>
          <CustomSelect />
        </div>
      </div>
      <div className="diarycards__container">
        <div className="diarycards__wrapper">
          <ul>
            <DiariesCardItem
              src="images/livenote.jpg"
              avatar="images/avatar.png"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.2021"
              path="/services"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde labore non dolorem deserunt. Similique soluta consequatur deleniti voluptate cumque optio voluptatibus dolore, in quisquam voluptatum
                impedit
                eveniet ipsa. Quibusdam doloribus nulla laborum provident saepe tenetur ipsum non cum accusamus. Illo sed unde quibusdam ex nihil atque necessitatibus cumque ut eaque explicabo aliquam, est, dicta sequi in quod minima laborum
                voluptas,
                voluptatum vel harum eveniet labore obcaecati. Inventore quod fugit sequi suscipit quaerat, aspernatur nemo cum qui facilis. Magnam rerum tempore enim corrupti molestias, totam rem magni molestiae. Eveniet consequuntur dolores
                quaerat"
            />
            <DiariesCardItem
              src="images/livenote.jpg"
              avatar="images/avatar.png"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.2021"
              path="/services"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde labore non dolorem deserunt. Similique soluta consequatur deleniti voluptate cumque optio voluptatibus dolore, in quisquam voluptatum
                impedit
                eveniet ipsa. Quibusdam doloribus nulla laborum provident saepe tenetur ipsum non cum accusamus. Illo sed unde quibusdam ex nihil atque necessitatibus cumque ut eaque explicabo aliquam, est, dicta sequi in quod minima laborum
                voluptas,
                voluptatum vel harum eveniet labore obcaecati. Inventore quod fugit sequi suscipit quaerat, aspernatur nemo cum qui facilis. Magnam rerum tempore enim corrupti molestias, totam rem magni molestiae. Eveniet consequuntur dolores
                quaerat"
            />
          </ul>
          <ul>
            <DiariesCardItem
              src="images/livenote.jpg"
              avatar="images/avatar.png"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.2021"
              path="/services"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde labore non dolorem deserunt. Similique soluta consequatur deleniti voluptate cumque optio voluptatibus dolore, in quisquam voluptatum
                impedit
                eveniet ipsa. Quibusdam doloribus nulla laborum provident saepe tenetur ipsum non cum accusamus. Illo sed unde quibusdam ex nihil atque necessitatibus cumque ut eaque explicabo aliquam, est, dicta sequi in quod minima laborum
                voluptas,
                voluptatum vel harum eveniet labore obcaecati. Inventore quod fugit sequi suscipit quaerat, aspernatur nemo cum qui facilis. Magnam rerum tempore enim corrupti molestias, totam rem magni molestiae. Eveniet consequuntur dolores
                quaerat"
            />
            <DiariesCardItem
              src="images/livenote.jpg"
              avatar="images/avatar.png"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, adipisci."
              date="12.02.2021"
              path="/services"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde labore non dolorem deserunt. Similique soluta consequatur deleniti voluptate cumque optio voluptatibus dolore, in quisquam voluptatum
                impedit
                eveniet ipsa. Quibusdam doloribus nulla laborum provident saepe tenetur ipsum non cum accusamus. Illo sed unde quibusdam ex nihil atque necessitatibus cumque ut eaque explicabo aliquam, est, dicta sequi in quod minima laborum
                voluptas,
                voluptatum vel harum eveniet labore obcaecati. Inventore quod fugit sequi suscipit quaerat, aspernatur nemo cum qui facilis. Magnam rerum tempore enim corrupti molestias, totam rem magni molestiae. Eveniet consequuntur dolores
                quaerat"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiariesCards;
