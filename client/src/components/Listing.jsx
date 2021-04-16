import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Divider, CircularProgress, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Listing.css";
import { useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  listingContainer: {
    paddingTop: "70px",
    paddingLeft: "3px",
    paddingRight: "3px",
  }
});


export default function Listing(props) {
  const classes = useStyles();
  const { listingId } = useParams();

  const currentListing = props.listings.find((listing) => listing.id === Number(listingId));
  
  const generateListingJSX = () => {
    return (
    <>
      {currentListing ? (
      <div>
        <p className={classes.listingContainer}></p>
          <Card>
          <CardContent style={{height: '200px', width: '100px'}}>
          <img src={currentListing.picture} />
          </CardContent>
          </Card>
          <div class="listingName">{currentListing.name}
          <Button variant="contained" component={Link} to="/offer" style={{textTransform: 'none'}}>
          Propose a trade!
          </Button></div>
          
          <p class="listingDescription">{currentListing.description} </p>
          <Divider />
          <div class="ownerUser">
            {currentListing.user.first_name} {currentListing.user.last_name} -- 
            {currentListing.neighbourhood.name}, {currentListing.city.name}
          <IconButton className="Account-button">
            <AccountCircleIcon fontSize="large"/>   
          </IconButton>
          </div>
          <Divider />
      </div>
      ) : (
        <div className={classes.progress}>
        <CircularProgress/>
        </div>
      )}
    </>
    )
  }

  // Propose a trade! button links to {ProposeTrade}
    
  return (
    <>
      {currentListing === undefined && <CircularProgress/>}
      {currentListing !== undefined && currentListing && generateListingJSX()}
    </>
  )
}