import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function ProposeTrade() {
  const fakeWantedItem = [
    {
      "id": 1,
      "name": "Linen shirt, M",
      "description": "Rarely-worn light blue linen shirt, very comfortable",
      "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      "owner_id": 3,
      "storer_id": 3,
      "category_id": 2
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


  // const {userId} = useParams();

  // // can the data for the wanted item be passed in here from {Listing}?
  // // also, is it necessary to include a get request to the current user's listings here?


  // function sendProposal(){
  //   // includes axios.post(`users/${userId}/proposals`)
  // };

  // back naviagation with a "Cancel" button?
    
  return (
    <div>
      <h2>Propose a trade!</h2>
    </div>
  )
}