import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Grid, Card, CardContent, AppBar, Toolbar, CircularProgress, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import useApplicationData from "../hooks/useApplicationData";
import fakeListingsData from '../mockData/fakeListingsData'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    paddingTop: "100px",
  },
  progress: {
    paddingTop: "150px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },

}));

export default function ProposeTrade() {
  const classes = useStyles();

  const fakeWantedItem = [
    {
      "id": 1,
      "name": "Linen shirt, M",
      "description": "Rarely-worn light blue linen shirt, very comfortable",
      "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      "owner_id": 3,
      "storer_id": 3,
      "category_id": 2
    }
  ];

  const fakeListingsForUser = [
    {
      "id": 4,
      "name": "Old school Game Boy Color",
      "picture": "https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
      "id": 5,
      "name": "Milk and Honey",
      "picture": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    }
  ];


  // const {userId} = useParams();

  // // can the data for the wanted item be passed in here from {Listing}?
  // // also, is it necessary to include a get request to the current user's listings here?


  // function sendProposal(){
  //   // includes axios.post(`users/${userId}/proposals`)
  // };

  // back naviagation with a "Cancel" button?
    
  return (
    <>
      <CssBaseline />
    <div className={classes.heroContent}></div>
    <div>
      <h2>Propose a trade!</h2>
    </div>

    <Grid item xs={6} sm={6} md={4} >
    <Card className={classes.card} >
     
      <CardMedia
              className={classes.cardMedia}
              image={""}
              title={""}
            />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6" component="h2">
          Item</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions> */}
    </Card>
    </Grid>
    </>
  )
}