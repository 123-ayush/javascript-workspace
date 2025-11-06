const arr1 = ["shaktimaan", "power-rangers", "krrish"]
const arr2 = ["chotta bheem", "krishna", "ganesh"]

// arr1.push(arr2)
// const heroes = arr2.concat(arr1)
// const allNew = [...arr1, ...arr2]


const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const anotherArray = arr.flat(Infinity)

console.log(anotherArray);
