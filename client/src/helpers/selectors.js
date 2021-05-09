export function findMostRepresented(userWishCategories) {
  const frequency = {};
  userWishCategories.forEach((id) => {
    frequency[id] = 0;
  });
  const uniques = userWishCategories.filter((id) => {
    return ++frequency[id] === 1;
  });
  return uniques.sort((a, b) => {
    return frequency[b] - frequency[a];
  });
}

export function getUserProposals(state) {
  const userId = 2; // for now
  return state.proposals.filter((proposal) => proposal.user_id === userId);
}

export function getTradesProposedToUser(state) {
  const userId = 2; // for now
  const userListingIds = state.listings
    .filter((listing) => listing.user.id === userId)
    .map((listing) => listing.id);
  return state.proposals.filter((proposal) =>
    userListingIds.includes(proposal.asset_id)
  );
}

export function getPicturesOfListingsByUser(state, userProposals) {
  const offeredItemIds = userProposals.map((proposal) => proposal.listing_id);
  let allOfferedListings = [];
  let offeredItem;
  for (const id of offeredItemIds) {
    offeredItem = state.listings.find((listing) => listing.id === id);
    allOfferedListings.push(offeredItem);
  }
  return allOfferedListings.map((offeredItem) => offeredItem.picture);
}

export function getPicturesOfListingsWantedByUser(state, userProposals) {
  const wantedItemIds = userProposals.map((proposal) => proposal.asset_id);
  let allWantedListings = [];
  let wantedItem;
  for (const id of wantedItemIds) {
    wantedItem = state.listings.find((listing) => listing.id === id);
    allWantedListings.push(wantedItem);
  }
  return allWantedListings.map((wantedItem) => wantedItem.picture);
}

export function getPicturesOfListingsOfferedToUser(state, tradesProposedToUser) {
  const offeredToMeIds = tradesProposedToUser.map(
    (proposal) => proposal.listing_id
  );
  let allListingsOfferedToMe = [];
  let offeredItem;
  for (const id of offeredToMeIds) {
    offeredItem = state.listings.find((listing) => listing.id === id);
    allListingsOfferedToMe.push(offeredItem);
  }
  return allListingsOfferedToMe.map((offeredItem) => offeredItem.picture);
}

export function getPicturesOfListingsWantedFromUser(state, tradesProposedToUser) {
  const listingsTheyWantIds = tradesProposedToUser.map(
    (proposal) => proposal.asset_id
  );
  let allListingsTheyWant = [];
  let wantedItem;
  for (const id of listingsTheyWantIds) {
    wantedItem = state.listings.find((listing) => listing.id === id);
    allListingsTheyWant.push(wantedItem);
  }
  return allListingsTheyWant.map((wantedItem) => wantedItem.picture);
}
