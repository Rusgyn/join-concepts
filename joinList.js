/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// function that joins the arguments of a given array of strings
// Array of strings.
// the joined elements must be comma-separated.
// do not use built-in .join method

const joinList = function(arr) {
  
  let joinedList = "";

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      joinedList = joinedList + arr[i];
    } else if (arr[i] === "" || arr[i] === " ") {
      joinedList;
    } else {
      joinedList = joinedList + arr[i] + ", ";
    }
  }
  return joinedList;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

const list = ["apple", "", "carrot", " ", "eggplant"];
const newList = joinList(list);
console.log(`Today I learned about ${newList}.`);