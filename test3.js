/* Q3) You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:

Input: nums = [1,2,5,2,3], target = 2

Output: [1,2] */

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
    for (let i = 0; i < arr.length; i++) {
        if (t == arr[i]) {
           res.push(i)
        }
    }
    console.log (arr,res)
}
indexelement([1, 2, 5, 2, 3], 2)