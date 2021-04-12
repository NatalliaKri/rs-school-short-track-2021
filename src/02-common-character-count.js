/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const ss1 = s1.split('');
  const newArr1 = [];
  let counter1 = 1;
  let counterD = 1;
  for (let i = 0; i < ss1.length; i++) {
    for (let j = i + 1; j < ss1.length; j++) {
      if (ss1[i] === ss1[j]) {
        counter1++;
      }
    }
    if (newArr1.indexOf(ss1[i]) === -1) {
      newArr1.push(ss1[i]);
      newArr1.push(counter1);
      counter1 = 1;
    }
  }
  const ss2 = s2.split('');
  const newArr2 = [];
  for (let i = 0; i < ss2.length; i++) {
    for (let j = i + 1; j < ss2.length; j++) {
      if (ss2[i] === ss2[j]) {
        counterD += 1;
      }
    }
    if (newArr2.indexOf(ss2[i]) === -1) {
      newArr2.push(ss2[i]);
      newArr2.push(counterD);
      counterD = 1;
    }
  }
  let total = 0;
  if (newArr1.length <= newArr2.length) {
    for (let i = 0; i < newArr1.length; i++) {
      for (let j = 0; j < newArr2.length; j++) {
        if (newArr1[i] === newArr2[j] && newArr1[i + 1] > newArr2[j + 1]) {
          total += newArr2[j + 1];
        }
        if (newArr1[i] === newArr2[j] && newArr1[i + 1] < newArr2[j + 1]) {
          total += newArr1[i + 1];
        }
      }
    }
  }
  if (newArr1.length > newArr2.length) {
    for (let i = 0; i < newArr2.length; i++) {
      for (let j = 0; j < newArr1.length; j++) {
        if (newArr2[i] === newArr1[j] && newArr2[i + 1] > newArr1[j + 1]) {
          total += newArr1[j + 1];
        }
        if (newArr2[i] === newArr1[j] && newArr2[i + 1] < newArr1[j + 1]) {
          total += newArr2[i + 1];
        }
      }
    }
  }
  return total;
}

module.exports = getCommonCharacterCount;
