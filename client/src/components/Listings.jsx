import React from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useApplicationData from "../hooks/useApplicationData";


// listingId = 2 for now

const fakeListingsData = [
  {
    "id": 1,
    "name": "Linen shirt, M",
    "description": "Rarely-worn light blue linen shirt, very comfortable",
    "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
    "owner_id": 3,
    "storer_id": 3,
    "category_id": 2
  },
  {
    "id": 2,
    "name": "Sony Over-Ear Noise Cancelling Headphones",
    "description": "Noise-canceling headphones working well",
    "picture": "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
    "owner_id": 4,
    "storer_id": 4,
    "category_id": 1
  },
  {
    "id": 3,
    "name": "Old school PSone",
    "description": "Old school PSone with 9 games included(Tom Raider II, Spider-Man, Mega Man X4, Street Fighter, Gran Turismo, Resident Evil, Tekken 3, Crash Bandicoot, Tony Hawk's Pro Skater 2). It's working well!",
    "picture": "https://images.unsplash.com/photo-1551219059-b5f8e7acee56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "owner_id": 1,
    "storer_id": 1,
    "category_id": 1
  },
  {
    "id": 4,
    "name": "Old school Game Boy Color",
    "description": "Old school Game Boy Color with 5 games included(The Legend of Zelda, Pac-Man, Space Invaders, Star Wars, Top Gear Pocket). It's working well!",
    "picture": "https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "owner_id": 2,
    "storer_id": 2,
    "category_id": 1
  },
  {
    "id": 5,
    "name": "Milk and Honey",
    "description": "Author: Rupi Kaur",
    "picture": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    "owner_id": 2,
    "storer_id": 2,
    "category_id": 3
  }
];


const useStyles = makeStyles({
  listingContainer: {
    paddingTop: "50px",
    paddingLeft: "3px",
    paddingRight: "3px",
  }
});

//2 = to be replaced with listingId
const getListingCard = () => {
  console.log(getListingCard[2]) //We will need a number
  return (
    <Grid item xs={4} key={2}>
      <Card>
        <CardContent style={{height: '100px',width: '100px'}}>
          Listing 1
        </CardContent>
      </Card>
    </Grid>
  )
}

export default function Listings() {
  const { state } = useApplicationData();
  console.log('state right now', state);
  // const [state, setState]  = useApplicationData();
  console.log('fake data id', fakeListingsData[2].id)
  console.log('id', state.listings[0].id);
  
  const classes = useStyles();

  // const {id, name, picture} = state.listings[2]

  // const id = state.listings[2].id
  // const name = state.listings[2].name
  // const picture = state.listings[2].picture

  // Object.keys(state.listings).map(listingId => getListingCard(listingId))
  
  return (
    <>
      <AppBar position="static">
        <Toolbar/>
      </AppBar>
      <Grid
        container
        justify="center"
        spacing={2}
        className={classes.listingContainer}
        style={{ flexDirection: "row", alignItems: "stretch" }}
        
      >
        <Grid container item xs={5} spacing={3} style={{flexDirection: "row"}} >
          {getListingCard()}
          {getListingCard()}
        </Grid>
        <Grid container item xs={5} spacing={3} style={{flexDirection: "row"}}>
          {getListingCard()}
          {getListingCard()}
        </Grid>
      </Grid>
    </>
  )
}