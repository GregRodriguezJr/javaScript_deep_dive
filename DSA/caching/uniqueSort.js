// It should return any duplicate values in the sorted array.
// input: [1,5,2,1] => output: [1,2,5]

const uniqueSort = function (arr) {
    const cach = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!cach[arr[i]]) {
            result.push(arr[i]);
            cach[arr[i]] = true;
        }
    }
    return result.sort((a,b) => a - b);
};

const test = uniqueSort([4,2,2,3,2,2,2]); // => [2,3,4]
console.log(test);
