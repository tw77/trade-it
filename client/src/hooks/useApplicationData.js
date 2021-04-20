import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    listings: [],
    users: [],
    wishes: [],
    proposals: [],
    reviews: []
  });


  const userId = 2;
  // for right now

  useEffect(() => {
    Promise.all([
      axios.get(`/api/listings`),
      axios.get(`/api/users`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        listings: all[0].data,
        users: all[1].data.map((user) => user.details),
        wishes: all[1].data.map((user) => user.wishes),
        proposals: all[1].data.map((user) => user.proposals),
        reviews: all[1].data.map((user) => user.reviews),
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
    // console.log('item in useApplicationData', item);
    const updatedListings = ([item, ...state.listings]);
    setState((state) => ({...state, listings: updatedListings}));
  }

  function propose(wantedItemId, offeredItemId, message) {
    const cloneStateProposals = [].concat.apply([], state.proposals);
    const newProposal = {
        id: (cloneStateProposals.length + 1),
        listing_id: offeredItemId,
        asset_id: Number(wantedItemId),
        status_id: 1,
        message: message,
        is_accepted: false,
        date_accepted: null,
        user_id: userId
      };
    const updatedProposals = ([...cloneStateProposals, newProposal]);
    // console.log('updatedProposals', updatedProposals);
    setState((state) => ({...state, proposals: updatedProposals}));
  }

  function updateProposalStatus(acceptedProposal) {
    const cloneStateProposals = [].concat.apply([], state.proposals);
    cloneStateProposals.find((proposal) => proposal.id === acceptedProposal.id).is_accepted = true;
    setState((state) => ({...state, proposals: cloneStateProposals}));
  }

  function updateWishes(newUserWish) {
    const cloneStateWishes = [].concat.apply([], state.wishes).filter((wish) => wish);
    const updatedWishes = ([...cloneStateWishes, newUserWish]);
    // console.log(updatedWishes);
    setState((state) => ({...state, wishes: updatedWishes}));
  }

  function removeWish(wishToRemove) {
    console.log('removing...');
    console.log('wishToRemove', wishToRemove);
    const cloneStateWishes = [].concat.apply([], state.wishes).filter((wish) => wish);
    const idToRemove = cloneStateWishes.indexOf(wishToRemove)
    cloneStateWishes[idToRemove] = null;
    setState((state) => ({...state, wishes: cloneStateWishes}));
  }

  function updateReviews(reviewedUserId, reviewText, rating){
    const cloneStateReviews = [].concat.apply([], state.reviews);
    const newReview = {
      id: (cloneStateReviews.length + 1),
      user_id: reviewedUserId,
      rating: rating.value,
      content: reviewText
    };
    const updatedReviews = ([newReview, ...cloneStateReviews]);
    // console.log('updatedProposals', updatedReviews);
    setState((state) => ({...state, reviews: updatedReviews}));
  };



  return { state, publishListing, propose, updateProposalStatus, updateWishes, removeWish, updateReviews };
}

