let name = 'Василий';
let getName = () => (name === undefined || name !== 'Василий') ? 'Привет, гость ' : `Привет, ${name}`;
console.log(getName());

const arr = [2,4,5,6,7,8,9];
const double = arr.map(value => value * 2);
console.log(double);