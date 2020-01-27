
function test (value) {
    if (value > 0) {
        return true;
    } else return false;
}

function body (value) {
    value = value - 1;
    return value;
}

function OwnLoop (value) {
    let num = 0;
        if (test(value) == true) {
            num = body(value);
        }
        return num;
    }

for (let i = 3; i > 0; i --) {
   console.log( OwnLoop(i) );
}

