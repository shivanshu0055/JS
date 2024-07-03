const score=400
const balance=new Number(100)

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber=213.8939

console.log(otherNumber.toPrecision(3));

const num2=100000
console.log(num2.toLocaleString('en-IN'));

//******** MATHS **********//

// console.log(Math);

// console.log(Math.abs(-1));
// console.log(Math.round(4.5));
// console.log(Math.ceil(8.9));
// console.log(Math.floor(8.2));
// console.log(Math.max(4,3,2,1));

console.log((Math.random()*10) + 1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);