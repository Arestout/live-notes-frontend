import React from 'react';
import { Link } from 'react-router-dom';
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
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="O нас" value="about" icon={<InfoIcon />} />
      <BottomNavigationAction
        value="terms of use"
        icon={'Пользовательское соглашение'}
        component={Link}
        to="/terms-of-use"
      />
      <BottomNavigationAction
        label="Контакты"
        value="Контакты"
        icon={<LocationOnIcon />}
        component={Link}
        to="/contacts"
      />
      <BottomNavigationAction label="Помощь" value="help" icon={<HelpIcon />} />
    </BottomNavigation>
  );
}
