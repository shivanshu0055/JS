const mar_hero=["thor","IronMan"]
const dc_hero=["Superman","Flash"]
// mar_hero.push(dc_hero)
// console.log(mar_hero)

// const conc_arr=mar_hero.concat(dc_hero) //Directly adds 2 arrays and return s new array
// console.log(conc_arr);

const allNewHeros=[...mar_hero,...dc_hero]
console.log(allNewHeros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const spreadOutArray=another_array.flat(Infinity)
console.log(spreadOutArray);


console.log(Array.isArray("Shivanshu"))
console.log(Array.from("Shivanshu"))
console.log(Array.from({name:"Shivanshu"})) //Interesting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
