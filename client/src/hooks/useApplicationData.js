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
        id: 2,
        first_name: "Judit",
        last_name: "Mendez",
        email: "mendez.puig@gmail.com",
        phone: "236-888-8525",
        password: "judit",
        bio: "I'm Judit and I love coding. I have some cameras that I wanna trade.",
        neighbourhood_id: 1,
        profile_picture: "https://lh3.googleusercontent.com/onvvPdJRtIj4iHlR1zWb3nTELZDQ4553E0gu6mZyUdkafUAccQv-mF_wMBoW1jPIIhTXUO4LQs1FeQu8fApr0TsUSeO5T50N2Z1TEh6YHUA9ASzupZXWtN4K-eKghclmw1iGpYqxvH04G2DPv4zvgQ7rOwhF9gOVoKHXb9dEpitiLsNeyTyOmeKKY6RQ0pTzRu_aY0i05FgYHkP7PsLy8d6mgA4okWPhlMq2SfZaFtmZceufZdAzQGYxsjWW6K8gaRMzCsetY70yifjbC8jf7VfdCFIZ6ph--OCKNrFLJHFsB8KV1lwHF9NhVbFX35FojmfSevOefMMw2rxHRy7HPUQde0fdSV57Bsjd8xRR9A8m9flDe9EKf0yZ23vwM3aBVMHmY8DEy0KuAlQZG8adfk-APp8_gjnpQ5478iVTsALkeiRjicUrqgBzOvNHGQZsMAcyforOElcli-kh4KEAPMOr-cXoo1A9nbiMnCuKLJsLS5kZ624LwYhiSGi-7BL7_zVFf4bqEvPIOHxKdsB135xotK7MD_ESdLJbbw-q_OQR0NIAIKQ73uIavroGz-HIVWv8fbORc0BCRFyUin35D8pdtuazA5Z10od-tycTZAQiEfS0Dr2h9jlhGkg-8bcjd5GAWUA8EpKE0YxzdbXNvi9R3jwV4SirybFfbwgBueHDjNptXyRQ7ckDdTF3TI1cXUgG3Cny8-OmNdcLnhDbt5k=w770-h513-no?authuser=0"
      },
      history: []
    };
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
    setState((state) => ({...state, reviews: updatedReviews}));
  };



  return { state, publishListing, propose, updateProposalStatus, updateWishes, removeWish, updateReviews };
}

