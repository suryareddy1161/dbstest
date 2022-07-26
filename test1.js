/* Q1) Given an integer array A of size n. Find and print all the leaders present in the input array. An array element A[i] is called Leader, if all the elements following it (i.e. present at its right) are less than or equal to A[i].
Print all the leader elements separated by space and in the same order they are present in the input array.
Input Format :
Line 1 : Array A elements (separated by space)

Output Format :
leaders of array (separated by space)

Sample Input 1 :
[16,17,4,5,2,1]

Sample Output 1 :
17
5
2
1 */
function leadersofarr(arr){
    let res = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let res = arr[i] 
            console.log(res)
            //console.log(arr[arr.length - 1])
        }
        
    }
    console.log(arr[arr.length - 1])
    
}
leadersofarr([16,17,4,5,2,1]) 

