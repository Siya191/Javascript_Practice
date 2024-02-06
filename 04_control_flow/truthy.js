const userEmail = "h@hitesh@gmail.com"

// falsy values

//false , 0 , -0 , BigInt 0n,"" , null, undefined NaN 

// truthy values

//"0" ,'false', " ", [], {}, function(){}
 const login = 0
if(login === 0){
    console.log("Array is empty");
}

const obj = {}
if (Object.keys(obj).length === 0 ){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??) : null undefined
//The nullish coalescing (??) operator 
//is a logical operator that returns its 
//right-hand side operand when its left-hand side 
//operand is null or undefined, and otherwise
// returns its left-hand side operand.

let val1 = null ?? "yes"
console.log(val1)

let val2 = undefined ?? "no"
console.log(val2)


// Terniary Operator

const iceTeaPrice = 100
iceTeaPrice <= 50 ? console.log("less than 50") : console.log("more than 50");

