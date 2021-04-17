import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    listings: [],
    users: [],
    wishes: [],
    proposals: [],
    reviews: []
  });


  const userId = 2;
  // for right now

  useEffect(() => {
    Promise.all([
      axios.get(`/api/listings`),
      axios.get(`/api/users`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        listings: all[0].data,
        users: all[1].data.map((user) => user.details),
        wishes: all[1].data.map((user) => user.wishes),
        proposals: all[1].data.map((user) => user.proposals),
        reviews: all[1].data.map((user) => user.reviews),
      }));
    });
  }, []);

  function publishListing(item) {
    item = {
      id: state.listings.length + 1,
      name: item.name,
      description: item.description,
      picture: item.picture,
      owner_id: userId,
      storer_id: userId,
      category_id: 2,
      city: {id: 1, name: "Vancouver", province_id: 2},
      neighbourhood: {id: 1, name: "West End", city_id: 1},
      user: {
        id: 3,
        first_name: "Jenny",
        last_name: "McDonald",
        email: "jennymcdonald@gmail.com",
        phone: "778-xxx-xxx",
        password: "jenny",
        bio: "Hi, I'm Jenny",
        neighbourhood_id: 1,
        profile_picture: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
    };
    // console.log('item in useApplicationData', item);
    const updatedListings = ([item, ...state.listings]);
    setState((state) => ({...state, listings: updatedListings}));
  }

  function propose(wantedItem, offeredItem, message) {
    const cloneStateProposals = [].concat.apply([], state.proposals);
    const newProposal = {
        id: (cloneStateProposals.length + 1),
        listing_id: offeredItem.id,
        asset_id: wantedItem.id,
        status_id: 1,
        message: message,
        is_accepted: null,
        date_accepted: null
      };
    const updatedProposals = ([newProposal, ...cloneStateProposals]);
    console.log('updatedProposals', updatedProposals);
    // setState((state) => ({...state, proposals: updatedProposals}));
    // console.log('state.proposals now', state.proposals);
  }



  return { state, publishListing, propose };
}

