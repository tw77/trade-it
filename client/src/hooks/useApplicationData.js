import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    listings: [],
    wishes: [],
    reviews: [],
    proposals: [],
    listingsByUser: [],
    updatedListings: []
  });


  const userId = 2;
  // for right now

  useEffect(() => {
    Promise.all([
      axios.get(`/api/listings`),
      axios.get(`/api/users/${userId}/wishes`),
      axios.get(`/api/users/${userId}/reviews`),
      axios.get(`/api/users/${userId}/proposals`),
      axios.get(`/api/users/${userId}/profiles`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        listings: all[0].data,
        wishes: all[1].data,
        reviews: all[2].data,
        proposals: all[3].data,
        listingsByUser: all[4].data
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
      category_id: 2
    };
    console.log('item in useApplicationData', item);
    const updatedListings = ([item, ...state.listings]);
    setState((state) => ({...state, listings: updatedListings}));
  }

  return { state, publishListing };
}

