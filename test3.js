function indexelement(arr, t) {
    let res =[]
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    for (let i = 0; i < arr.length-1; i++) {
        if (t == arr[i]) {
           res.push(i)
        }
    }
    console.log (arr,res)
}
indexelement([1, 2, 5, 2, 3], 2)