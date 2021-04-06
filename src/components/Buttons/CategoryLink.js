import React from 'react';
import Link from '@material-ui/core/Link';
import { Tooltip } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

export default function CategoryLink(props) {
  const { categoryId } = props;

  const categories = {
    1: 'Животные',
    2: 'Красота',
    3: 'Политика',
    4: 'Путешествия',
    5: 'Семья',
  };

  return (
    <ThemeProvider theme={theme}>
      <Tooltip title="Категория записи">
        <Link href={`/diaries/${categoryId}`} underline="hover">
          {categories[categoryId]}
        </Link>
      </Tooltip>
    </ThemeProvider>
  );
}
