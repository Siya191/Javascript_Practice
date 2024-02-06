if(true){
    //code is executed
}
if(false){
    //code is not executed
}
if(2 == "2"){
    console.log("executed");
}
// === also 

const balance = 1000;

if(balance <500){
    console.log("test");
}else if(balance<750){
    console.log("less than 750");
}else{
    console.log("less than 1200")
}

const login = true
const signup = false
if(login || signup){
    console.log("user logged in");
}