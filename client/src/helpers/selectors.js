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