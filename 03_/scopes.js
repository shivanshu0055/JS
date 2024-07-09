let a=10
let c=20

function one(){
    const username="Shiv"

    function two(){
        const website="HElllo.com"
        console.log(username);
    }
    console.log(username); 
    // console.log(website);//Will give error
    two()
}

one()

// if(true){
//     const username="Hitesh"
//     if(username==="Hitesh"){

//     }
// }

addone(2)
// aise me kahin bhin call karlo
function addone(num1){
    return num1+1
}
// aise declare karoge to defination k neeche hi call karna pdega
const addTwo=function addTwo(num1){
    return num1 + 2
}
addTwo(3)