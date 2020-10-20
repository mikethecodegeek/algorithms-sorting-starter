// Implement Quick Sort

/*
1. choose an element called "the pivot", how that's done is up to the implementation
2. take two variables to point left and right of the list excluding pivot
3. left points to the low index
4. right points to the high
5. while value at left is less than pivot move right
6. while value at right is greater than pivot move left
7. if both step 5 and step 6 does not match swap left and right
8. if left ≥ right, the point where they met is new pivot
10. repeat, recursively calling this for smaller and smaller

*/

function quickSort(array) {
  // your code here
  if (array.length <=1) return array;

  let left = [], right=[], pivot = array.shift();
  array.forEach(el => el < pivot ? left.push(el) : right.push(el))
  // let sortedLeft = quickSort(left), 
  let sortedRight = quickSort(right);

  return quickSort(left).concat(pivot,sortedRight);

}

console.log(quickSort([2,3,5,7,1]))


module.exports = {
  quickSort
};
