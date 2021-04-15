import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Divider } from '@material-ui/core';
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
  const {listingId} = useParams();

  
  // const { match } = props;
  // const { params } = match;
  // const { listingId } = params;



  // useEffect(() => {
  //   axios.get(`listings/${listingId}`)
  // }, [listingId]);


  // Propose a trade! button links to {ProposeTrade}
    
  return (
    <div>
      <p className={classes.listingContainer}></p>
        <Card>
        <CardContent style={{height: '200px', width: '100px'}}>
        Listing {listingId}
        </CardContent>
        </Card>
        <div class="listingName">(asset.name) <Button variant="contained" style={{textTransform: 'none'}}>
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
  )
}

