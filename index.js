// How to remove duplicate elements from this array?
const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// How to find out the largest/lowest elements from this array?
const arr2 = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];
const max = Math.max(...arr2);

console.log("The largest element is:", max);

// How to slice(22, 48) from this array
const startIndex = arr.indexOf(22);
const endIndex = arr.indexOf(48) + 1;

const subArray = arr.slice(startIndex, endIndex);

console.log("Subarray:", subArray);
