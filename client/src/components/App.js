import React from "react";
import "./App.css";
// import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigationAction, BottomNavigation, } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FolderIcon from '@material-ui/icons/Folder'

export default function App() {
  return (
    <>
      <div className="App">
        <p>Hello!</p>
      </div>
      <footer>
        <BottomNavigation>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </footer>
    </>
  );
}

