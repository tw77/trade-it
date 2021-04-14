import React from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./Listings.css";

const useStyles = makeStyles({
  listingContainer: {
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  }
});

const getListingCard = () => {
  return (
    <Grid container item xs={12}>
      <Card>
        <CardContent>
          Listing 1
        </CardContent>
      </Card>
    </Grid>
  )
}

export default function Listings() {

  const classes = useStyles();
  
  return (
    
    <>
      <AppBar position="static">
        <Toolbar/>
      </AppBar>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        // className={classes.listingContainer}
      >
        <Grid container item xs={20} direction="column">
          {getListingCard()}
          {getListingCard()}
          {getListingCard()}
          {getListingCard()}
        </Grid>
      </Grid>
    </>
  )
}