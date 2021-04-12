/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const m1 = [];
  let d;
  let m2;
  const m = n.toString();
  const k = m.split('');
  if (m.length === 2 && +m[0] > +m[1]) {
    return +(m[0]);
  }
  if (m.length > 2) {
    for (let i = 0; i < k.length; i++) {
      if (k[i] === k[i + 1]) {
        m1.push(k[i]);
      }
      if (k[i] !== k[i + 1]) {
        m2 = k.splice(i);
      }
    }
    if (+m2[0] > +m2[1] && +m2[0] > +m2[2] && +m2[1] >= +m2[2]) {
      d = m2.slice(0, 2).join('') + m2.slice(3).join('');
    } else {
      d = m2[0] + m2[2];
    }
    if ((+m2[1]) > (+m2[0]) && (+m2[1]) > (+m2[2])) {
      d = m2.slice(1).join('');
    }
    if (+m2[2] > +m2[0] && +m2[2] > +m2[1] && +m2[1] > +m2[0]) {
      d = m2.slice(0, 1) + m2.slice(2);
    }
  }
  return +(m1.join('') + d);
}

module.exports = deleteDigit;
