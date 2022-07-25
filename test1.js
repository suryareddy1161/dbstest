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
leadersofarr([16,17,4,3,2,1]) 

