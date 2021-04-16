import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  suggestionsContainer: {
    paddingTop: "50px",
    paddingLeft: "3px",
    paddingRight: "3px",
  }
});
  
export default function MySuggestions(props) {
  const classes = useStyles();
  
  // const {userId} = useParams(); <--- would this be replaced by useState or no?

  console.log('relevant data', props.listings, props.proposals, props.listingsByUser, props.wishes);

  // "Propose a trade!" button links to {ProposeTrade}
  // "Dismiss" removes suggestion from view (all client-side)

    
  return (
    <div>
      <h2
      className={classes.suggestionsContainer}
      >My Suggestions</h2>
    </div>
  )
}