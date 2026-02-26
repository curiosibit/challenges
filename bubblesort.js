function bubbleSort(array) {
  // Only change code below this line
  let swapped = true
  let i, j, temp

  while (swapped) {
    swapped = false
    for (i = 0; i < array.length; i++) {
      j = i + 1
      if (array[i] > array[j]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
        swapped = true
      }
    }
  }
  return array;
  // Only change code above this line
}

bubbleSort([4, 5, 1, 3, 9, 2, 8, 7, 6])