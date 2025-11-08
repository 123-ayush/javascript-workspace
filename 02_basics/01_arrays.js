//Declaration

// arrays are mutable

const arr = [0,1,2,3,4]
const arr1 = [true, 0 , "ayush", 0.23] //can contain multiple datatypes

const arr2 = new Array(1,2,3,4)

//Access -> 0-based indexing

arr2.push(5) // add at last
arr2.pop() // remove from last
arr2.unshift(11) // add at first
arr2.shift() // remove from first

console.log(arr2);

//----------------Adding & Removing----------------------------------

const arr3 = ["shaktimaan", "power-rangers", "krrish"]
const arr4 = ["chotta bheem", "krishna", "ganesh"]

// arr1.push(arr2)
// const heroes = arr2.concat(arr1)
// const allNew = [...arr1, ...arr2]


const ar5 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const anotherArray = arr.flat(Infinity)

console.log(anotherArray);


// -----------------------Methods-----------------------------

//1. indexOf() -> return idx from array if exist else return -1;

//2. includes() -> return true/false

//3. concat() -> merge two arrays and create a new arrays not change in previous

//4. reverse() -> reverse the original array

//5. slice(st, end) -> same as strings, return new arrays

//6. splice() -> read carefully............ ****, this performs all actions on original arrays

//7. sort() -> it sort arrays by converting all value to string and then sorting


//-------------------------------------Constant Arrays---------------------------------

const ar = [1,2,4,5,5];

// can change value of arrays, length of array but can assign a new array to this varible

ar = [2,4,76,3,3] // this cant be done
