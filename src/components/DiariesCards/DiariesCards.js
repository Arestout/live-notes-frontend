import React, { useState, useEffect } from 'react';
import './DiariesCards.css';
import DiariesCardItem from './DiariesCardItem';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';

function DiariesCards() {
  const { auth } = useAuth();
  const [diaries, setDiaries] = useState([]);
  const { isLoading, response, error, doFetch } = useFetch('/blogs');

  console.log(response);

  useEffect(() => {
    doFetch({
      headers: {
        Authorization: 'bearer' + auth.access_token,
      },
    });
  }, [doFetch, auth.access_token]);

  return (
    <div className="container">
      <h2 className="diary__header">Дневники</h2>
      <div className="diarycards__container">
        <div className="diarycards__wrapper">
          <ul className="diarycards__list">
            {response &&
              response.data.map((diary) => (
                <DiariesCardItem
                  key={diary.id}
                  src="images/image-2.jpg"
                  diary={diary}
                  path={`/diary/${diary.id}`}
                />
              ))}
          </ul>
          {/* <ul>
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default DiariesCards;
