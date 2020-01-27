let a = -1;
let istrue = true;
function isEven (a) {
    if (a === 1) {
        istrue = false;
        return istrue;
    } else if (a === 0) {
        return istrue;
    } else if (a > 0) {
        return isEven(a - 2);
    } else {
        return isEven(a + 2);
    }
}

console.log(isEven(a));