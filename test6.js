function printlengthword(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].length)
    }

    for (let i = 0; i < res.length; i++) {
        for (let j = 1; j < res.length; j++) {
            if (res[i] === res[j]) {
                return res[i] * res[j]
            }
        }
    }
    return 0

}
console.log(printlengthword(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))