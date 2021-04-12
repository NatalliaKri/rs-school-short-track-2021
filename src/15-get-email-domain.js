/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let a = '';
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      a = email.slice(i + 1);
    }
  }
  return a;
}

module.exports = getEmailDomain;
