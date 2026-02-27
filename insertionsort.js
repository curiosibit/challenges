function insertionSort(array) {
  // Only change code below this line
  for (let i = 1; i < array.length; i++) {
    let key = i

    while (key > 0 && array[key - 1] > array[key]) {
      let temp = array[key - 1]
      array[key - 1] = array[key]
      array[key] = temp
      key--
    }
  }

  console.log(array)
  return array;
  // Only change code above this line
}

insertionSort([1, 4, 2, 7, 3, 9, 12, 5, 21, 17, 14, 8])