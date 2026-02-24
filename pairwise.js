function pairwise(arr, arg) {
  let baseIndex = 0;
  let index = 1;
  let indexSum = 0
  let flag = []

  function getPair(base, idx) {
    if (base >= arr.length - 1) {
      return
    }

    
    if (idx > arr.length - 1) {
      base = base + 1
      idx = base + 1
      getPair(base, idx)
    } else if (arr[base] + arr[idx] == arg && !flag.includes(idx) && !flag.includes(base)) {
      flag.push(base, idx)
      indexSum = indexSum + base + idx
      base = base + 1
      idx = base + 1
      getPair(base, idx)
    } else {
      idx++
      getPair(base, idx)
    }

  }

  getPair(baseIndex, index)
  return indexSum;
}

pairwise([1, 1, 1], 2)
