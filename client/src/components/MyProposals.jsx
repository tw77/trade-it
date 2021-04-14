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

export default function MyProposals() {
  const classes = useStyles();
  const fakeProposalsDataForUser = [
    {
      "id": 1,
      "message": "I'm very interested on your Game Boy! I used to have the same one when I was a kid :)",
      "is_accepted": null,
      "date_accepted": null,
      "listing_id": 4,
      "user_id": 2,
      "asset_id": 2,
      "status_id": 1,
      "wanted": {
        "id": 2,
        "name": "Sony Over-Ear Noise Cancelling Headphones",
        "description": "Noise-canceling headphones working well",
        "picture": "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
        "owner_id": 4,
        "storer_id": 4,
        "category_id": 1
      },
      "offered": {
        "id": 4,
        "name": "Old school Game Boy Color",
        "description": "Old school Game Boy Color with 5 games included(The Legend of Zelda, Pac-Man, Space Invaders, Star Wars, Top Gear Pocket). It's working well!",
        "picture": "https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "owner_id": 2,
        "storer_id": 2,
        "category_id": 1
      }
    },
    {
      "id": 2,
      "message": "Hope to hear from you soon!",
      "is_accepted": null,
      "date_accepted": null,
      "listing_id": 5,
      "user_id": 2,
      "asset_id": 1,
      "status_id": 1,
      "wanted": {
        "id": 1,
        "name": "Linen shirt, M",
        "description": "Rarely-worn light blue linen shirt, very comfortable",
        "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
        "owner_id": 3,
        "storer_id": 3,
        "category_id": 2
      },
      "offered": {
        "id": 5,
        "name": "Milk and Honey",
        "description": "Author: Rupi Kaur",
        "picture": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        "owner_id": 2,
        "storer_id": 2,
        "category_id": 3
      }
    }
  ]


  // const {userId} = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/proposals`)
  // }, [userId]);

  // function accept(){};

  // function decline(){};

  // function cancelOrRemove(){};

  // "View" button links to {AcceptedProposal}


    
  return (
    <div>
      <h2
      className={classes.proposalsContainer}
      >My Proposals</h2>
    </div>
  )
}