import React, { useEffect, useState,  } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function Profile() {
  // const {userId} = useParams(); <--- would this be replaced by useState or no?
  
  const [state, setState] = useState({
    userDetailsAndListings: [],
    reviewsOfUser: {},
  }); 

  useEffect(() => {
    axios.get(`users/${userId}/profiles`)
  }, [userId]);

  useEffect(() => {
    Promise.all([
      axios.get(`users/${userId}/profiles`),
      axios.get(`users/${userId}/reviews`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        userDetailsAndListings: all[0].data,
        reviewsOfUser: all[1].data,
      }));
    });
  }, []);

  // if the userId matches the current user, render "editable" Profile.

  // Edit button beside profile pic allows for modifying user details
  // Edit buttons by items in My Listings section link to specific {Listing}
    
  return (
    <div>
      <h2>Profile</h2>
    </div>
  )
}