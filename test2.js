/* Q2) Print the following pattern for the given number of rows.

Pattern for N = 4
      1

    212

  32123

4321234 */

let str="";
const pattern = (num) => {
 for(i=1; i<=num; i++){   
        for(j=1; j<=num-i; j++){
            str+=" "
        }
        for(k=i; k>=1; k--){
            str+=k;
        }
        for(l=2; l<=i; l++){
            str+=l;
        }
        str+="\n";
    }
        console.log(str);

};

pattern(4);