import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function MyProposals() {
  const {userId} = useParams();

  useEffect(() => {
    axios.get(`users/${userId}/proposals`)
  }, [userId]);

  function accept(){};

  function decline(){};

  function cancelOrRemove(){};

  // "View" button links to {AcceptedProposal}


    
  return (
    <div>
      <h2>My Proposals</h2>
    </div>
  )
}