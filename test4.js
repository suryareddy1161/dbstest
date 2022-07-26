/* Q4) Given a 2D array arr[][] of order NxN, the task is to find the sum of all the elements present in both the diagonals and boundary elements of the given arr[][].

Examples:

Input: arr[][] = { {1, 2, 3, 4}, {1, 2, 3, 4}, {1, 2, 3, 4}, {1, 2, 3, 4} }

Output: 40 */


let arr = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
let sum = 0
let newarr = []
function sumofbondry() {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[0].length; j++) {
            if (i == 0 || j == 0 || i == arr.length - 1 || j == arr.length - 1) {
                newarr.push(arr[i][j])
            }
            if (i == j && i != 0 && i != arr.length - 1) {
                newarr.push(arr[i][j])
            }
            if (i != 0 && j != 0 && (i + j) == arr.length - 1) {
                newarr.push(arr[i][j])
            }


        }


    }
    for (let i = 0; i < newarr.length; i++) {
        sum += newarr[i]
    }
    console.log(sum)
}

sumofbondry()