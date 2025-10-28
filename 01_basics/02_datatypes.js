"use strict"; //prefer to write so that compiler get a msg to treat all js code as newer version

// alert("hello") // alert is not defined in node js which we are using but in browser we can do 

// code readability should be high

let name = "Ayush"
let age = 20
let isLoggedIn = false 

// datatypes:
// number => 2^53
// bigint
// string => ""
// boolean => true/false
// null => standalone value => its an object (typeof)
// undefined => it is undefined(typeof)

let ex = null // not undefined, its null

// symbol => uniqueness

console.log(typeof null);
console.log(typeof undefined);


// Primitive Datatypes: String, Number, BigInt, Sysmbol, Null, Undefined, Boolean

// Non-Primitive(Reference): Objects, Arrays, Functions

//Arrays
const arr = ["ayush", "arun", "sunny"]

//Objects
const obj = {
    name: "ayush",
    age: 22,
}

//functions
const myFunction = function() {
    console.log("Hello World");
}


// Primitive use Stack Memory -> we get a copy of our value(if we change no change in original)
// Non-Primitive use Heap Memory -> we get refernce of our value(if we change chnage in original)

let id = "ay@gmail.com"
let another = id
another = "ah@gmail.com"

console.log(id);
console.log(another);
//Stack memory used

let obj1 = {
    name: "ayush",
    age: 22,
}

let obj2 = obj1

obj2.age = 33

console.log(obj1.age);
console.log(obj2.age);
//Heap Memory used