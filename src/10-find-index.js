/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let array1 = [];
  array1 = array1.concat(array);
  let a = 0;
  if (array1[array1.length - 1] === value) return (array1.length - 1);
  if (array1[0] === value) return 0;
  if (array1.length % 2 !== 0) {
    array1.push(1);
  }
  while (array1[array1.length / 2 - 1] <= value) {
    a += array1.length / 2;
    array1 = array1.splice((array1.length) / 2);
  }
  if (array1.length % 2 !== 0) {
    array1.push(1);
  }
  if (array1[array1.length / 2 - 1] >= value) {
    a += array1.indexOf(value);
    array1 = array1.splice(0, array1.length / 2 - 1);
  }
  return a;
}

module.exports = findIndex;
