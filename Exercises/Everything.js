
/*
function every (array, test) {
    let a = [];
    a = array;
    for (let i = 0; i < array.length; i++) {
        if (test(a[i]) != true) {
            return = false;
        } 
    }
    
    return true;
  }
  console.log(every([2, 4, 16], n => n < 10));

  */

  function every (array,test) {
     return !array.some(x => !test(x)); 
  }

  console.log(every([3, 5, 7], n => n < 10)); // to negate a funciton without changing the function wrap it around another function and then just negate it 