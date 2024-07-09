(function chai(){
    //NAMED IIFE
    console.log(`DB CONNECTED`);
})();

//Gloabl scope ke pollution se bachne k lie iife used
// ; wo IIFE ko end karne k lie 


(  ()=>{
    console.log("LALA");
})();


(  (name)=>{
    console.log("LALA",name);
})('HUNNY');