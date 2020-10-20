// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, minIdx) {
  [arr[index1], arr[minIdx]] = [arr[minIdx], arr[index1]];
}

function selectionSort(list) {
  // your code here
  for (let i = 0; i < list.length - 1; i++) {
    let currentIdx;
    let minIdx;
    let minValue = list[i];
    let swapCheck;
    for (let j = i+1; j < list.length; j++) {
      currentIdx = i;
      let compValue = list[j];
      if (compValue < minValue) {
        minValue = compValue;
        minIdx = j;
        swapCheck = true;
      }
    }
    if (swapCheck) {
    [list[currentIdx], list[minIdx]] = [list[minIdx], list[currentIdx]];
    }
  }
}

selectionSort([2, 4, -1, 4, 3, 7, 3, -22]);

module.exports = {
  selectionSort,
  swap
};
