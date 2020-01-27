// reduce function is only on arrays usuallt takes two arguements first arguement is the accumulator or fival value or product and second arguement is the current value 
// being added to the accumulator


let arr =[[1, 2, 3], [4, 5], [6]];
let newArr = [];
newArr = arr.reduce((a,b) => a.concat(b)
,[]);

console.log(newArr);

/*

for (let i = 0; i < arr.length; i ++) {
    newArr = newArr.concat(arr[i]);
}

console.log(newArr);

*/
