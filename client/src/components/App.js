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
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 736px)": {
        minWidth: "auto",
        padding: "6px 0"
      }
    }
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
            </Toolbar>
          </AppBar>  
        </header> 
        <section>
              
          <Switch>
                
              <Route exact path="/login" component={Login} />
              <Route exact path="/offer" component={ProposeTrade} />
              <Route exact path="/register" component={Register} />  
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/wishlist" component={MyWishlist} />
              <Route exact path="/suggestions" component={MySuggestions} />
              <Route exact path="/proposals" component={MyProposals} />
              <Route exact path="/add" component={AddNewItem} />
              <Route exact path="/" render={(props) => <Listings {...props}/>}  />
              <Route exact path="/listings" render={(props) => <Listings {...props}/>}  />
              <Route
                  exact
                  path="/listings/:listingId"
                  render={(props) => <Listing { ...props } />}
              />
          </Switch>   
        </section>


        <footer style={{ zIndex: "999999" }}>
          <BottomNavigation
            className={classes.root}
            showLabels
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            
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

