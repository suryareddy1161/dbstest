/* Q6) Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

 

Example 1:

Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]

Output: 16 */


function printlengthword(arr) {
    let max = 0;
    let word1= ""
    let word2 = ""
    for (let i = 0; i < arr.length; i++){
        for(let j=0;j<arr.length;j++){
            let res=strcompare(arr[i],arr[j])
            {
                if(res!=-1){
                    let length = arr[i].length*arr[j].length
                    if(max<length){
                        max=length
                        word1=arr[i]
                        word2=arr[j]
                    }
                    
                }
                
            }
            
        }
        
    }
    console.log(max)
       

}

function strcompare(str1,str2){
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str1[i]===str2[j]){
                return -1
            }
        }
    }
}
printlengthword(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])