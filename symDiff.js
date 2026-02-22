function sym(...args) {
  let final = []

  function getDiff(arr1, arr2) {

    let temp1 = []
    let temp2 = []

    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i]) && !temp1.includes(arr1[i])) {
        temp1.push(arr1[i])
      }
    }

    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i]) && !temp2.includes(arr2[i])) {
        temp2.push(arr2[i])
      }
    }

    return temp1.concat(temp2).sort()
  }

  let index = 0

  while (index < args.length) {
    final = getDiff(final, args[index])
    index++
  }


  console.log(final)

  return final;
}

