import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function AcceptedProposal() {
  const fakeProposalData = {
    "id": 2,
    "message": "Hope to hear from you soon!",
    "is_accepted": null,
    "date_accepted": null,
    "listing_id": 5,
    "user_id": 2,
    "asset_id": 1,
    "status_id": 1,
    "wanted": {
      "id": 1,
      "name": "Linen shirt, M",
      "description": "Rarely-worn light blue linen shirt, very comfortable",
      "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      "owner_id": 3,
      "storer_id": 3,
      "category_id": 2
    },
    "offered": {
      "id": 5,
      "name": "Milk and Honey",
      "description": "Author: Rupi Kaur",
      "picture": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "owner_id": 2,
      "storer_id": 2,
      "category_id": 3
    }
  }



  // const {userId, proposalId} = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/proposals/${proposalId}`)
  // }, [userId, proposalId]);

  // function confirmTrade(){};

  // function confirmPickUp(){};

  // function publishReview(){};
    
  return (
    <div>
      <h2>Trade proposal accepted!</h2>
    </div>
  )
}