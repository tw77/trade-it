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

export default function MySuggestions() {
  const classes = useStyles();
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
  
  const fakeWishesDataForUser = [
    {
      "id": 1,
      "name": "Bluetooth speakers",
      "category_id": 1,
      "user_id": 1
    }
  ];

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


  // const {userId} = useParams(); <--- would this be replaced by useState or no?

  // const [state, setState] = useState({
  //   listingsIndex: [],
  //   wishesFromUser: {},
  //   proposalsByUser: {},
  // }); 
  // // do we need this here or in some sort of useApplicationData.js file?

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`listings/`),
  //     axios.get(`users/${userId}/wishes`),
  //     axios.get(`users/${userId}/proposals`),
  //   ]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       listingsIndex: all[0].data,
  //       wishesFromUser: all[1].data,
  //       proposalsByUser: all[2].data,
  //     }));
  //   });
  // }, []);

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