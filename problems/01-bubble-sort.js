// Implement Bubble Sort


function bubbleSort(array) {
  // your code here
  let swapCheck =true; 
  while(swapCheck) {
    swapCheck=false;
    for (let a=0; a< array.length-1; a++) {
     if (array[a] > array[a+1]) {
       [array[a],array[a+1]] = [array[a+1],array[a]]
       swapCheck=true;
     }
   }
  }
}

module.exports = {
  bubbleSort,
 
};
