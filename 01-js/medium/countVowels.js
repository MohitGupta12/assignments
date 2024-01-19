/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let ans=0;
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let temp = str.toLowerCase().split('').map((item) => {
      vowel.includes(item)?ans++:ans;
    })
    return ans;
}

module.exports = countVowels;
