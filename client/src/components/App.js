import React from "react";
import "./App.css";
// import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigationAction, BottomNavigation, makeStyles, Typography, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import MenuIcon from '@material-ui/core/Menu'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MyWishlist from "./MyWishlist";
import MySuggestions from "./MySuggestions";
import MyProposals from "./MyProposals";
import AddNewItem from "./AddNewItem";
import Listings from "./Listings";
// import Profile from "./Profile";
// import Listing from "./Listing";
// import ProposeTrade from "./ProposeTrade";
// import AcceptedProposal from "./AcceptedProposal";
// import { createBrowserHistory } from 'history';
const useStyles = makeStyles({
  root: {
    backgroundColor: '#E0E0E0',
    bottom: 0,
    position: 'fixed',
    width: '100%',
  }
});



export default function App() {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

// <Route path="/profile" component={Profile} /> 
// <Route path="/listing" component={Listing} />
// <Route path="/offer" component={ProposeTrade} />
// <Route path="/accepted" component={AcceptedProposal} />



  return (
    <>
      <Router>
      <Container maxWidth="xs">
      <div className="App" >
        <header className="App-header">
          <AppBar>
              <Toolbar className="Toolbar">
                <Typography variant="h3">
                  Trade It
                </Typography>
                <IconButton className="Account-button">
                  <AccountCircleIcon fontSize="large"/>   
                </IconButton>
              </Toolbar>
          </AppBar>  
        </header> 
        <section>
            <Switch>
            <Route path="/wishlist" component={MyWishlist} />
            <Route path="/suggestions" component={MySuggestions} />
            <Route path="/proposals" component={MyProposals} />
            <Route path="/add" component={AddNewItem} />
            <Route path="/" component={Listings} />
            </Switch>
        </section>


        <footer>
          <BottomNavigation
            className={classes.root}
            // showLabels
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            // style={{height: '40px',width: '15px'}}
            
          >
            <BottomNavigationAction component={Link} to="/" label="Search" icon={<SearchIcon />} />
            <BottomNavigationAction component={Link} to="/wishlist" label="My Wishlist" icon={<FavoriteBorderIcon />} />
            <BottomNavigationAction component={Link} to="/suggestions" label="My Suggestions" icon={<EmojiObjectsIcon />} />
            <BottomNavigationAction component={Link} to="/proposals" label="My Proposals" icon={<AutorenewIcon />} />
            <BottomNavigationAction component={Link} to="/add" label="Add New itel"  icon={<AddCircleOutlineIcon />} />
          </BottomNavigation>
        </footer>
      </div> 
      </Container>
      </Router>

    </>
  );
}

