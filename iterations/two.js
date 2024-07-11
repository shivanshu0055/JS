const arr=[1,2,3,8,5,33]

for (const it of arr) {
    console.log(it);
}

const greet="GOODMORNING"

for (const g of greet) {
    console.log(g);
}

const map=new Map()
map.set('IN',"India")
map.set('L',"LUNKING")

for (const [z,value] of map) {
    console.log(z,"->",value);
}


const myObj={
    'game1':"Lun",
    'game2':'Maame'
}
//for of doesn't work on objects
// for (const x of myObj) {
//     console.log(x);
// }

for (const key in myObj) {
    console.log(myObj[key]);
}
//map is not iteratable using forin
for (const key in map) {
    console.log(key);
}

const myArr=["js","java","py","cpp"]

myArr.forEach(function (item){
    console.log(item);
})

myArr.forEach((item) => {
    console.log(item);
})

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )