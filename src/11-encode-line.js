/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newArr = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    }
    if (str[i] !== str[i + 1]) {
      if (counter !== 1) {
        newArr.push(counter);
      } else newArr.push('');
      newArr.push(str[i]);
      counter = 1;
    }
  }
  return newArr.join('');
}

module.exports = encodeLine;
