function permAlone(str) {
  let arr = [...str]
  let cnt = 0

  function calcPerms(k, A) {
    if (k == 1) {
      let isValid = true
      for (let i = 0; i < A.length - 1; i++) {
        if (A[i] == A[i + 1]) {
          isValid = false
        }
      }

      if (isValid){
        console.log(A)
        cnt++
      }
      return
    } else {
      calcPerms(k - 1, A)

      for (let i = 0; i < k - 1; i++) {
        if (k % 2 === 0) {
          let temp = A[i]
          A[i] = A[k - 1]
          A[k - 1] = temp
        } else {
          let temp = A[0]
          A[0] = A[k - 1]
          A[k - 1] = temp
        }
        calcPerms(k - 1, A)
      }
    }
  }

  calcPerms(arr.length, arr)

  return cnt;
}

permAlone('aab');