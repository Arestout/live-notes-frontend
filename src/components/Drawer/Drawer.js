import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import ImageAvatar from '../Avatar/Avatar';
import { ListItemIcon } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function ClippedDrawer({ user }) {
  const classes = useStyles();
  console.log(user);
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div className={classes.avatar}>
            <ImageAvatar />
            <p>{user.login}</p>
          </div>

          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Мой профиль" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Мои достижения" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BookmarkBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Избранное" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Настройки" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}
