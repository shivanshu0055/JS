const name="shiva"
const repocount=10

// console.log(name + repocount + "lala");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('HunnyDon')
console.log(gameName.__proto__);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

//SUBSTR pe negative nahi de sakte
const newstr=gameName.substring(1,4)
console.log(newstr);
//Slice pe -ve chalega -ve+s.length
const anotherstr=gameName.slice(-20,4)
console.log(anotherstr);

const newStringOne = "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="www.hunny%20sajwan@gmail"
console.log(url.replace('%20',"lun"));

const stream="Hunny-Singh-Bla-Bla"
console.log(stream.split('-'));
