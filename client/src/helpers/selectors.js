export function findMostRepresented(userWishCategories) {
  const frequency = {};

  userWishCategories.forEach(function (id) {
    frequency[id] = 0;
  });

  const uniques = userWishCategories.filter(function (id) {
    return ++frequency[id] === 1;
  });

  return uniques.sort(function (a, b) {
    return frequency[b] - frequency[a];
  });
}

export function getUserProposals(state) {
  const userId = 2; // for now
  return state.proposals.filter(
    (proposal) => proposal.user_id === userId
  );
}

export function getTradesProposedToUser(state) {
  const userId = 2; // for now
  const userListings = state.listings.filter(
    (listing) => listing.user.id === userId
  );
  const userListingIds = userListings.map((listing) => listing.id);
  return state.proposals.filter((proposal) => userListingIds.includes(proposal.asset_id));
}