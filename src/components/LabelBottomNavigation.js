import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 'auto',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="O нас" value="about" icon={<InfoIcon />} />
      <BottomNavigationAction
        value="terms of use"
        icon={'Пользовательское соглашение'}
      />
      <BottomNavigationAction
        label="Контакты"
        value="Контакты"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Помощь" value="help" icon={<HelpIcon />} />
    </BottomNavigation>
  );
}
