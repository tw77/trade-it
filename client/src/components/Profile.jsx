import React, { useEffect, useState,  } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function Profile() {
  // const {userId} = useParams(); <--- would this be replaced by useState or no?

  const fakeReviewsDataForUser = [
    {
      "id": 1,
      "content": "Alice was on time and the tennis rackets she gave me were in great condition",
      "rating": 5,
      "user_id": 1
    },
    {
      "id": 6,
      "content": "Hey",
      "rating": 5,
      "user_id": 1
    }
  ];

  const fakeListingsForUser = [
    {
      "id": 4,
      "name": "Old school Game Boy Color",
      "picture": "https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
      "id": 5,
      "name": "Milk and Honey",
      "picture": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    }
  ];
  
  // const [state, setState] = useState({
  //   userDetailsAndListings: [],
  //   reviewsOfUser: {},
  // }); 

  // useEffect(() => {
  //   axios.get(`users/${userId}/profiles`)
  // }, [userId]);

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`users/${userId}/profiles`),
  //     axios.get(`users/${userId}/reviews`),
  //   ]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       userDetailsAndListings: all[0].data,
  //       reviewsOfUser: all[1].data,
  //     }));
  //   });
  // }, []);

  // if the userId matches the current user, render "editable" Profile.

  // Edit button beside profile pic allows for modifying user details
  // Edit buttons by items in My Listings section link to specific {Listing}
    
  return (
    <div>
      <h2>Profile</h2>
    </div>
  )
}