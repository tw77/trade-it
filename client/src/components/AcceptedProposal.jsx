import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function AcceptedProposal() {
  const {userId, proposalId} = useParams();

  useEffect(() => {
    axios.get(`users/${userId}/proposals/${proposalId}`)
  }, [userId, proposalId]);

  function confirmTrade(){};

  function confirmPickUp(){};

  function publishReview(){};
    
  return (
    <div>
      <h2>Trade proposal accepted!</h2>
    </div>
  )
}