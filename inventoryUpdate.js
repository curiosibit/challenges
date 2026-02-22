function updateInventory(arr1, arr2) {
    for (let newItem of arr2) {
        for (let item of arr1) {
            if (newItem[1] == item[1]) {
                let q = newItem[0] + item[0]
                item[0] = q
                let index = arr2.indexOf(newItem)
                arr2.splice(index, 1)                
            }
        }
    }
    arr1 = [...arr1, ...arr2]
    arr1.sort((a, b) => a[1].localeCompare(b[1]))
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);