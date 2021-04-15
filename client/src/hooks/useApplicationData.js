import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    listings: [{
      "id": 1,
      "name": "Linen shirt, M",
      "description": "Rarely-worn light blue linen shirt, very comfortable",
      "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      "owner_id": 3,
      "storer_id": 3,
      "category_id": 2
    }],
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

  return { state };
}

