let num = [-5,10,5,55,-1,22,-4,36,-45];
let result = num.reduce(function (sum, elem) {
    if(elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log(result);

const fillArr = (elem, count) => {
    let arr = [];
    for(i = 0; i < count; i++){
        arr.push(elem);
    }
    return arr;
}
console.log(fillArr('bla', 3));