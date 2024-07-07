const myArr=[0,1,2,3,4,5,true];
const heros=["Shaktiman"]

const myArr2=new Array(1,2,3,4,5,6)
// console.log(myArr[0]);

//Array Methods

myArr.push(6)
myArr.unshift(9) //push_front
myArr.shift() //pop_front

myArr.pop()

// console.log(myArr);
//Join
// console.log(myArr2.join());//converts array to string
//Slice,Splice

const arr=[0,1,2,3,4,5,6,7]
console.log(arr);
const arr1=arr.slice(1,3)
console.log("Sliced arr : ", arr1);
const arr2=arr.splice(1,3)
console.log("Spliced arr : ",arr2);
console.log("Original arr after splicing : ", arr);
