// Implement Insertion Sort
let array = [2, -1, 4, 3, 7, 3];

function insertionSort(list) {
  // your code here
  for (let a=1; a<= list.length-1;a++) {
    let w;
    let currentEl = list[a];
    for (w=a-1; w>-1 && currentEl<list[w];w--) {
      list[w+1]=list[w];
    }
    list[w+1]=currentEl;
  }

}

insertionSort(array);

module.exports = {
  insertionSort
};
