// singleton literal se nahi banta

// object literals
const myS1=Symbol("Key1")

const user={
    name:"Shivanshu",
    "school name":"DAV",
    age:19,
    location:"Doon",
    [myS1]:"MyKey1"

}

// console.log(user.name);//1st Way
// console.log(user["name"]);//2nd Way
// console.log(user["school name"]);
// console.log(typeof user[myS1]);
// console.log(user[myS1]);
// console.log(user);

user.age=100

// Object.freeze(user)

user.greeting=function(){
    console.log("Good Morning");
}

user.greeting2=function(){
    console.log(`Good Morning, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());