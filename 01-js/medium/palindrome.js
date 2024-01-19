/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // let isPal= true;
  str = str.toLowerCase().split(" ").join("").replace(/[^a-zA-Z0-9]/g, '');
  let revStr = str.split('')
  .reverse()
  .join('');
  console.log(revStr);
  return (str===revStr?true:false);
}

module.exports = isPalindrome;

