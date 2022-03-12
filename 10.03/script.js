let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22];
let arrEven = [];
let arrNotEven = [];
let newobj = {};
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        arrEven.push(arr[i]);
    } else {
        arrNotEven.push(arr[i]);
    }

}

console.log(arrEven);
console.log(arrNotEven);