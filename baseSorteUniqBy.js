import baseSortedUniq from "./.internel/baseSortedUniq";

const sortedUniqBy = function (array, iteratee) {
  return array != null && array.length ? baseSortedUniq(array, iteratee) : [];
};

export default sortedUniqBy;
