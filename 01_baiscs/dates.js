// Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// console.log(myDate.toString());

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate2=new Date(2023,0,23,23,90)
// console.log(myCreatedDate);
// console.log(myCreatedDate2.toLocaleString());

let mydate=new Date("2023-02-12");//YYYY-MM-DD
let mydate2=new Date("12-01-2023");//DD-MM-YYYY
console.log(mydate2.toLocaleString());
// console.log(mydate);

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(mydate2.getTime());
console.log(Math.floor(mydate2/1000));

let newDate=new Date();
console.log(newDate.getMonth()+1);

console.log(myDate.toLocaleString("default",{
    weekday:"long",
})) // FOR CUSTOMISING THIS toLocaleString Output

console.log(myDate.toLocaleString());
