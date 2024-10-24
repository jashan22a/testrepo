import React from "react";
import {
  capitalizeWords,
  chunkArray,
  reverseString,
  deduplicateArray,
  fizzBuzz,
  sumArray,
  flattenArray,
} from "@/utility/LogicalMethod";

export default function Logical() {
  const sentence = "hello my name jashan";
  const capitalizedSentence = capitalizeWords(sentence);
  //array chuncks
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkSize = 3;
  const chunks = chunkArray(inputArray, chunkSize);
  console.log("chunks", chunks);

  //reverce string
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  console.log(reversedString);

  //deduplicate Array
  const numberList = [1, 2, 3, 1, 2, 4, 5];
  const uniqueArray = deduplicateArray(numberList);

  // fizzBuzz()
  const fizzBuzzGame = fizzBuzz();
  console.log("fizzBuzzGame", fizzBuzzGame);

  //Sum of array
  const numberSum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arayOfSum = sumArray(numberSum);

  //flat // Example usage
  const nestedArray = [1, [2, 3], [4, 5, 6]];
  const flattenedArray = flattenArray(nestedArray);

  return (
    <>
      <div>
        <h1>Capitalize Every Word in a Sentence</h1>
        <b>{capitalizedSentence}</b>
      </div>
      <div>
        <h1>Splits an array into chunks of a specified size</h1>
        <b>{chunks}</b>
      </div>
      <div>
        <h1> Reverse a string </h1>
        <b>{reversedString}</b>
      </div>
      <div>
        <h1> Deduplicate a string remove </h1>
        <b>{uniqueArray}</b>
      </div>
      <div>
        <h1> Fizz Buzz Game </h1>
        <b>{fizzBuzzGame}</b>
      </div>
      <div>
        <h1> Sum of Array </h1>
        <b>{arayOfSum}</b>
      </div>
      <div>
        <h1> Flat of Array </h1>
        <b>{flattenedArray}</b>
      </div>
    </>
  );
}
