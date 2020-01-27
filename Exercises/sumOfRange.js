let x = 1;
let y = 10;
let sum = [];

function sumOfRange (start,end,sum) {
    for (let i = start; i <= end; i++ ) {
        sum.push(i);
    }
    return printArray(sum);
}

function printArray (sum) {
    let total = 0;
    for (let i = 0; i <= sum.length-1; i++) {

        total += sum[i];
    }

    return total;
}


console.log(sumOfRange (x,y,sum));
