// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let array = [];
  // [1, 3, 5] [2, 4, 6]
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      array.push(array1.shift());
    } else if (array2[0] <= array1[0]) {
      array.push(array2.shift());
    }
  }
  if (array1.length) {
    array.push(...array1);
  } else if (array2.length) {
    array.push(...array2)
  }
  return array;
}


function mergeSort(array) {
  // your code here
  if (array.length <= 1) return array;

  let midPoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0,midPoint));
  let right = mergeSort(array.slice(midPoint));
  return merge(left,right);
}

console.log(mergeSort([1,3,9,4,3,8,7,3,1]));

module.exports = {
  merge,
  mergeSort
};
