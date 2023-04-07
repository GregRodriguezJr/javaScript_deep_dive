// Fibonacci sequence: Write a function that takes a number n as input and 
// returns the first n numbers in the Fibonacci sequence. 
// The Fibonacci sequence is a series of numbers in which each 
// number is the sum of the two preceding numbers, starting from 0 and 1

// write function that takes in a number
const fibonacci = (num) => {
    // starting fibo number into an array
    const fibos = [0,1];

    // for loop needs to account for 2 exisiting array elements (-2)
    for(let i = 0; i < num - 2; i++) {
        // Get the sum of current index and next index stored in new variable
        let nextFibo = fibos[i] + fibos[i + 1];
        // Push the sum into the array
        fibos.push(nextFibo);
    }
    // return array -1 to account for array starting index of 0
    return fibos[num - 1];
}

// invoke function and test
const result = fibonacci(10);
console.log(result);