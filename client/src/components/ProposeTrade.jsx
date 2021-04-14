import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function ProposeTrade() {
  const {userId} = useParams();

  // can the data for the wanted item be passed in here from {Listing}?
  // also, is it necessary to include a get request to the current user's listings here?


  function sendProposal(){
    // includes axios.post(`users/${userId}/proposals`)
  };

  // back naviagation with a "Cancel" button?
    
  return (
    <div>
      <h2>Propose a trade!</h2>
    </div>
  )
}