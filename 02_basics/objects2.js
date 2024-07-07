const tinder=new Object() //Singleton
tinder.id="123abc"
tinder.name="Hunny"
tinder.isLoggedIn=false

// console.log(tinder);

const regularUse={
    email:"Hunny@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Shiva",
            lastName:"Sajwan"
        }
    }
}
// console.log(regularUse.fullname.userfullname.firstName);

const obj1={
    1:"hunny",
    2:"kalps",
}

const obj2={
    3:"panny",
    4:"jalps",
}

const obj4={
    5:"panny",
    6:"jalps",
}

// const obj3=Object.assign({},obj1,obj2,obj4) //Way1 {} used so
// that ki obj1 ko target consider karke usko change na karde
const obj3={...obj1,...obj2}// Way2 
console.log(obj3);
console.log(obj1);


const users=[
    {
        id:1,
        email:"hello@gmail.com",
    },
    {

    },
    {

    },
]
//Array of Objects

console.log(Object.keys(tinder));//Array Datatype
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));