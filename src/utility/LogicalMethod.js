export function capitalizeWords(sentence) {
  if (!sentence) return ""; // Handle empty input
  return sentence
    .split(" ") // Split words
    .map((word) => {
      // Check if the word is not empty and capitalize the first letter
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word; // Return the word as is if it's empty
    })
    .join(" "); // Join words back into a sentence
}

//Array Chuncks
export function chunkArray(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size); // create a chunk from the current index to the next index based on the chunk size.
    result.push(chunk);
  }
  return result;
}

//Reversing  String
export function reverseString(inputString) {
  // Step 1. Use the split() method to return a new array
  //Step 2. Use the reverse() method to reverse the new created array
  // Step 3. Use the join() method to join all elements of the array into a string
  return inputString.split(" ").reverse().join("");
}
//deduplicate Array
export function deduplicateArray(arr) {
  return [...new Set(arr)];
}
// sfizzBuzz
export function fizzBuzz() {
  const results = []; // Initialize an array to store results
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz"); // Use push to add results to the array
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i); // Add the number itself
    }
  }
  return results; // Return the array of results
}
//sumArray

export function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
//flat array
export function flattenArray(arr) {
  return arr.flat(); // Flattens the array by one level
}
