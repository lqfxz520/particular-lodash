/**
 * get a random element for array
 *
 * @param {Array} array The array to sample
 * @returns {*} return the random element
 */
const sample = function (array) {
  const length = array != null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
};
export default sample;
