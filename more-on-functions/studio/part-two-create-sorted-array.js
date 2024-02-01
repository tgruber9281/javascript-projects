function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

function sortNumbers(arr) {
  let sortedArr = [];
  let indexOfMinValue = 0;
  // for (i = 0; i < arr.length; i++) {
  //   sortedArr[i] = findMinValue(arr);
  //   console.log('i',i);
  //   console.log('min',findMinValue(arr));
  // }
  while (arr.length > 0) {
    indexOfMinValue = arr.indexOf(findMinValue(arr));
    sortedArr.push(arr[indexOfMinValue]);
    arr.splice(indexOfMinValue, 1);
  }
  return sortedArr;
}

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


let sortedArr = [];
let indexOfMinValue = 0;

function sortRecursion(arr) {
  //if let sortedArr = []; was here, it would be reset to an empty array before having something added to it
  //you could leave let indexOfMinValue = 0; as it gets a new value very loop anyways, but I went ahead and moved it outside the function.
  if (arr.length === 1) {
    indexOfMinValue = arr.indexOf(findMinValue(arr)); //same code as in the while loop
    sortedArr.push(arr[indexOfMinValue]); //same code as in the while loop
    arr.splice(indexOfMinValue, 1); //same code as in the while loop
    return sortedArr;
  } else {
    indexOfMinValue = arr.indexOf(findMinValue(arr));  //same code as in the while loop
    sortedArr.push(arr[indexOfMinValue]); //same code as in the while loop
    arr.splice(indexOfMinValue, 1); //same code as in the while loop
    return sortRecursion(arr); //the else in a recursive function has to return the argument to the new call of the function with something different. in the factorial example we used "return integer * factorial(integer-1);".  I tried putting the splice function inside as return sortRecursion(arr.splice(indexOfMinValue,1)), but that passed the spliced value to the next loop rather than the array minus one value.  return sortRecursion(arr.slice(indexOfMinValue, indexOfMinValue + 1)) might work but I haven't tried it yet.
  }
}

console.log(sortRecursion(nums3));