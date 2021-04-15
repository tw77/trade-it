import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, AppBar, Toolbar, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useApplicationData from "../hooks/useApplicationData";
import fakeListingsData from '../mockData/fakeListingsData'

const useStyles = makeStyles({
  listingContainer: {
    paddingTop: "50px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  progress: {
    paddingTop: "150px",
  },
  cardContent: {
    textAlign: 'center',
  }

});


export default function Listings(props) {
  const classes = useStyles();
  // const { history } = props;
  // const [ listingsData, setListingsData] = useState([fakeListingsData]);

  const { state } = useApplicationData();

  console.log('state', state.listings);
  
  // getListingCard(obj)

  // let i = 0; i++
  // listingsData[i].id

  function getListingCard(listingsId) {
    // console.log(listingsData[`${listingsId}`])
    // const {id, name} = listingsData[`${listingsId}`]
  
    return (
      <Grid item xs={4} key={listingsId}>
        <Card  >
        {/* onClick={() => history.push(`/${listingsId}`)} */}
          <CardContent style={{ height: '150px', width: '150px' }}>
            <Typography>Listing {listingsId}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }


  // {listingsData.forEach((obj, index) =>
  //   getListingCard(obj[index].id)
  // )}

  
  return (
    <>
      <AppBar position="static">
        <Toolbar/>
      </AppBar>
      {state.listings ? (
        
      <Grid
        container
        justify="center"
        spacing={4}
        className={classes.listingContainer}
        >
          <Grid container spacing={3} style={{flexDirection: "row", alignItems: "stretch"}} >
          {state.listings.map(item => getListingCard(item.id))}
            

          </Grid>
          
        </Grid>
      ) : (
          <div className={classes.progress}>
          <CircularProgress/>
          </div>
        )}
        
      </>
    
  )
}
