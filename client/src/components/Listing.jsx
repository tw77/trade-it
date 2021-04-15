import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
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
  const { match } = props;
  const [listingData, setlistingData] = useState()

  useEffect(() => {
    axios.get(`/api/listings/${listingId}`)
      .then((response) => {
        const { data } = response;
        console.log('response data', response.data)
        setlistingData(data)
      })
      .catch((error) => {
        setlistingData(false)
    });
  }, [listingId]);

  const generateListingJSX = () => {
    // const { id } = listingData;
    return (
    <>
      {listingData ? (
      <div>
        <p className={classes.listingContainer}></p>
          <Card>
          <CardContent style={{height: '200px', width: '100px'}}>
          Listing #{listingData.id}
          </CardContent>
          </Card>
          <div class="listingName">{listingData.id} <Button variant="contained" style={{textTransform: 'none'}}>
          Propose a trade!
          </Button></div>
          
          <p class="listingDescription">description description description description description description
          description description description description description description description
          description description description description description </p>
          <Divider />
          <div class="ownerUser">
            User Name, Location
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

  console.log('listing number' + listingId);

  console.log('props.listings', props.listings[(listingId - 1)]);



  // const { name, description, image } = listingData;
  // Propose a trade! button links to {ProposeTrade}
    
  return (
    <>
      {listingData === undefined && <CircularProgress/>}
      {listingData !== undefined && listingData && generateListingJSX(listingData )}
      {listingData !== false && <Typography>Listing not found</Typography>}
    </>
  )
}