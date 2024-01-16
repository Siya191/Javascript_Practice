const myArr = new Array(0,1,2,3,4,5)

// console.log(myArr[0]);
// console.log(myArr);

// myArr.push(7);
// console.log(myArr);

// myArr.unshift(8);
// console.log(myArr);

// console.log(myArr.shift());
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// console.log(myArr.includes(9 ));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

//slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);

