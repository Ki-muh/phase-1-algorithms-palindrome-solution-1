function isPalindrome(word) {
  // Write your algorithm here
  const reversedString = reverseString(word);

  if(word === reversedString) {
    return true;
  } else {
    return false;
  }
}

function reverseString(word) {

  //create an array from the input string
  const wordArray = word.split('');

  //reverse the array
  const reversedWordArray = wordArray.reverse();

  //create a string from the reversed array
  const reversedWord = reversedWordArray.join('');

  //return the reversed string
  return reversedWord;

}

/* 
  Add your pseudocode here
*/
//declare a var that passes a function
//loop the param of the function to return a boolean
//iterate the relevant vars
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
