let a ="BBBBBB";
let b ="B";
function countBeans (a,b) {
    let count = 0;
    for (let x = 0; x < a.length-1; x++) {
       if(a[x] == b) {
           count+=1;
       }
    }
    return a.length;
}

console.log(countBeans(a,b));