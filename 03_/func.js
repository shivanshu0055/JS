
function sayMyName(){
    console.log("Poori life me to underdog tha : ");
}

sayMyName()

function add(num1,num2) {
    console.log(num1+num2);
}

const res=add(10,30)

console.log("RES : ",res);

function greet(name = "Sammy"){
    return `Helllo ${name}`
}

// function calcPrice(...num1){
//     return num1
// }

 function calcPrice(val1,val2,...num1){
        return num1
    }
    
console.log(calcPrice(100,200,300));

//Objects bhi generic way me

function seeusername(obj){
    return `hello ! ${obj.username}`
}