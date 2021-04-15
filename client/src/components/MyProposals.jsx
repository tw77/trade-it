import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  proposalsContainer: {
    paddingTop: "50px",
    paddingLeft: "3px",
    paddingRight: "3px",
  }
});

export default function MyProposals(props) {
  const classes = useStyles();

  // const {userId} = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/proposals`)
  // }, [userId]);

  // function accept(){};

  // function decline(){};

  // function cancelOrRemove(){};

  // "View" button links to {AcceptedProposal}

  console.log('props.proposals', props.proposals);
    
  return (
    <div>
      <h2
      className={classes.proposalsContainer}
      >My Proposals</h2>
    </div>
  )
}