import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

export default function CategoryButton(props) {
  const { categoryId } = props;

  const categories = {
    1: 'Животные',
    2: 'Красота',
    3: 'Политика',
    4: 'Путешествия',
    5: 'Семья',
  };

  return (
    <Button
      component={Link}
      variant="outlined"
      color="inherit"
      to={`/diaries/${categoryId}`}
    >
      {categories[categoryId]}
    </Button>
  );
}
