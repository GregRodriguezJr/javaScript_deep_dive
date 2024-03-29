// Unique Sort Exercise

// It should return any duplicate values in the sorted array.
// input: [1,5,2,1] => output: [1,2,5]

const uniqueSort = function (arr) {
  const cache = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
};

const test = uniqueSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]
console.log(test);

// Memoization Exercise

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn

const times10 = (n) => {
  return n * 10;
};

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
console.log("times10 returns:", times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log("Fetching from cache: ", n);
    return cache[n];
  } else {
    console.log("Caluclating result");
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
console.log("Task 2 calculated value:", memoTimes10(9)); // calculated
console.log("Task 2 cached value:", memoTimes10(9)); // cached

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosure = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};

// returned function from memoizedAdd
const memoClosureTimes10 = memoizedClosure();
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
console.log("Task 3 cached value:", memoClosureTimes10(10)); // cached