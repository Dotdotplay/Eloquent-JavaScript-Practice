let arr = [1,2,3];

function arrToList (arr) {
    let list = null;

    for (let i = arr.length-1; i >= 0; i--) {
        list = {value:arr[i], rest:list};
    }

    return list;
}

function prepend(value, list) {
    return {value, rest: list};
  }
  

function ListToArr(list) {
    let arr = [];

    for (let node = list; node !== null; node = node.rest ) {
        arr.push(node.value);
    }


    return arr;
}

console.log(ListToArr(arrToList(arr)));
