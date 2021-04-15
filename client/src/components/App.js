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


import useApplicationData from "../hooks/useApplicationData";
import MyWishlist from "./MyWishlist";
import MySuggestions from "./MySuggestions";
import MyProposals from "./MyProposals";
import AddNewItem from "./AddNewItem";
import Listings from "./Listings";
import Profile from "./Profile";
import Listing from "./Listing";
import Login from './Login'
import Register from './Register'
import DropDownMenu from './DropDownMenu'
import ProposeTrade from "./ProposeTrade";

// import ProposeTrade from "./ProposeTrade";
// import AcceptedProposal from "./AcceptedProposal";
// import { createBrowserHistory } from 'history';
const useStyles = makeStyles({
  root: {
    backgroundColor: '#E0E0E0',
    bottom: 0,
    left: "0px",
    // paddingTop: "30px",
    right: "0px",
    position: 'fixed',
    justifyContent: 'center',
    height: '70px',
    width: '100%',
    display: 'flex',
    right: "0px",
    position: 'fixed',
    height: '70px',
    width: '100%',
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 736px)": {
        minWidth: "auto",
        padding: "6px 0"
      }
    }
  }
});



export default function App() {
  const { state } = useApplicationData();

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  return (
    <>
      <Router>
      <Container maxWidth="s">
      <div className="App" >
        <header className="App-header">
          <AppBar
            className={classes.root}
          >
            <Toolbar className="Toolbar">
              <Typography variant="h3" className='Pagetitle'>
                Trade It
              </Typography>
              <DropDownMenu className="DropDown"/>  
              <Typography variant="h3">
                  <p className='Pagetitle'>Trade It</p>
              </Typography>
              <IconButton className="Account-button" component={Link} to="/profile">
                <AccountCircleIcon fontSize="large"/>   
              </IconButton>
            </Toolbar>
          </AppBar>  
        </header> 
        <section>
              
       
        <footer style={{ zIndex: "999999" }}>
        <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />  
              <Route exact path="/profile"> <Profile listingsByUser={state.listingsByUser} reviews={state.reviews} /> </Route>
              <Route exact path="/wishlist"> <MyWishlist wishes={state.wishes} /> </Route>
              <Route exact path="/suggestions">
                <MySuggestions wishes={state.wishes} listingsByUser={state.listingsByUser} listings={state.listings} proposals={state.proposals} /> 
                </Route>
              <Route exact path="/proposals"> <MyProposals proposals={state.proposals} /> </Route>
              <Route exact path="/add" component={AddNewItem} />
              <Route exact path="/"> <Listings listings={state.listings} /> </Route>
              <Route exact path="/listings/:listingId"> <Listing listings={state.listings} /> </Route>
          </Switch>     
        </section>


        <footer>
          <BottomNavigation
            className={classes.root}
            showLabels
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            // style={{height: '40px',width: '414px'}}
            
          >
            <BottomNavigationAction component={Link} to="/" label="Search" icon={<SearchIcon />} />
            <BottomNavigationAction component={Link} to="/wishlist" label="Wishlist" icon={<FavoriteBorderIcon />} />
            <BottomNavigationAction component={Link} to="/suggestions" label="Suggestions" icon={<EmojiObjectsIcon />} />
            <BottomNavigationAction component={Link} to="/proposals" label="Proposals" icon={<AutorenewIcon />} />
            <BottomNavigationAction component={Link} to="/add" label="New item"  icon={<AddCircleOutlineIcon />} />
          </BottomNavigation>
        </footer>
      </div> 
      </Container>
      </Router>

    </>
  );
}

