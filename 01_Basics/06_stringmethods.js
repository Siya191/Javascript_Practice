const gamename = new String('sahil')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));

const newString = gamename.substring(0,3);
console.log(newString);

//const anotherString=  gamename.slice(0,3)
const anotehrString =gamename.slice(-8,4)

const newStringOne= "   pranita"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abc.com/abc%20bdv";
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))
