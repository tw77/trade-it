import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  proposalsContainer: {
    paddingTop: "50px",
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
      <h2
      className={classes.proposalsContainer}
      >{`Listing number ${listingId}`}</h2>
    </div>
  )
}