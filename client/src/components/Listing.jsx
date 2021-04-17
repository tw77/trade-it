import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { BrowserRouter as Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Divider, CircularProgress, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Listing.css";



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
  const history = useHistory();

  const currentListing = props.listings.find((listing) => listing.id === Number(listingId));

  console.log('currentListing', currentListing);

  function toOffer() {
    history.push(`/offer/${listingId}`)
  }

  function toUserProfile() {
    history.push(`/profile/${currentListing.owner_id}`)
  }
  
  const generateListingJSX = () => {
    return (
    <>
      {currentListing ? (
      <div>
        <p className={classes.listingContainer}></p>
          <Card>
          <CardContent style={{height: '200px', width: '100px'}}>
          <img alt="listing_pic" src={currentListing.picture} />
          </CardContent>
          </Card>
          <div class="listingName">{currentListing.name}
          <Button variant="contained" style={{textTransform: 'none'}} onClick={toOffer}>
          Propose a trade!
          </Button></div>
          
          <p class="listingDescription">{currentListing.description} </p>
          <Divider />
          <div class="ownerUser">
            {currentListing.user.first_name} {currentListing.user.last_name} -- 
            {currentListing.neighbourhood.name}, {currentListing.city.name}
          <IconButton className="Account-button" onClick={toUserProfile} >
            <AccountCircleIcon fontSize="large" />   
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