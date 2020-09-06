import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Home
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
     
    );
};

export default Header;