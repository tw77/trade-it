import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    listings: [],
    wishes: [],
    reviews: [],
    proposals: [],
    listingsByUser: [],
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
    console.log('item in useApplicationData', item);
    const updatedListings = ([item, ...state.listings]);
    setState((state) => ({...state, listings: updatedListings}));
  }

  return { state, publishListing };
}

