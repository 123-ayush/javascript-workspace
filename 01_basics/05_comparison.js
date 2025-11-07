// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2<=1);
// console.log(2<1);
// console.log(2!=1);


// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0); false
// console.log(null == 0); false
// console.log(null >= 0); true
//avoid these comaprison

/*
the reason is that an equality check == and comparison > >= < <= work differently
Comparisons convert null to a number, treating it as 0.
Thats why null>=0 is true and null>0 is false.
*/


console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
//avoid these comparison

// === -> strict check(datatype + value)
// == -> check value only'


// falsy:
//       false, 0, -0, 0n(Big Int), ""(empty String), null, undefined, NaN
// truthy:
//       everything else