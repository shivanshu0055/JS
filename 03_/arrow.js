const user = {
    username:"Hunny",
    price:999,
    welcome: function(){
        console.log(`${this.username}`);
        console.log((this));

    }
}

// THIS -> CURRENT CONTEXT 

// user.welcome()
// user.username="Lunny"
// user.welcome()

// console.log((this)); // empty object in node
// console.log((this)); // Window object ata hai Browser k console me

// this bas objects me kam karta hai
// function tea(){
// let username="hitesh"
//     console.log(this); //AAEGA KUCH TOH 
//     console.log(this.username); // UNDEFINED Dikahega
// } 
// tea()

// const chai = () => {
//     let username = "hunny"
//     console.log(this);
// }

// chai()

const addTwo=(num1,num2) => {
    return num1+num2
}
//Curly braces mein return likhna padega aur () mein return nahi likhna padta aur isko
//implicitely return bolte hain 

const addThree=(num1) => (num1+3)

console.log(addThree(2))

const myarr=[1,2,3,4,5]

