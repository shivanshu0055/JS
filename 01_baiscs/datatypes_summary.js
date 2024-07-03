// Primitive And NonPrimitive

// Primitive : String, Number, Boolean, NULL, undefined, Symbol, BigInt
// JS is Dynamically Typed
// Reference Type(Non. Pri.) : Arrays, Objects, Functions
//NULL means Khaali

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);
console.log(anotherId);

const heros=["shaktiman","naagraj","doga"]
const obj={
    name:"Hunny",
    age:22
}

// const func=function(){
//     console.log("Hello World")
// }

console.log(typeof obj);

//Non Primitive TypeOf -> Object
//Real Function -> Object Function
//Symbol -> Symbol
//BigInt -> Undefined

