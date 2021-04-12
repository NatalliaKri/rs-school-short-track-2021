/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const addArr = [];
  const addArr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      addArr.push(arr[i]);
    }
  }
  addArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      addArr2.push(arr[i]);
    }
    if (arr[i] !== -1) {
      const a = addArr.shift();
      addArr2.push(a);
    }
  }
  return addArr2;
}

module.exports = sortByHeight;
