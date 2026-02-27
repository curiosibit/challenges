function selectionSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i]
    let key = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j]
        key = j
      }
    }

    let temp = array[i]
    array[i] = smallest
    array[key] = temp


  }

  console.log(array)
  return array;
  // Only change code above this line
}

selectionSort([3, 1, 8, 5, 2])