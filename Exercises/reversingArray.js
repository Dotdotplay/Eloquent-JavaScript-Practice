
let arr=[1,2,3,4,5];

function reverseArray (array) {
    
   
   
    for (let i = 0; i <  Math.floor(array.length / 2); i++) {
          let old = array[i];
          array[i] = array[array.length-i-1];
          array[array.length - i-1] = old;
          console.log(old);  
        }
        
      

    console.log(array);  
}


reverseArray(arr);
