/*

JS Object Literals => used to store keyed collections and complex entities

property -> (key, value) pair
objects are collection of properties.

ex.-
person (obj literal)
name - Ayush (property 1)
age - 20 (property 2)
gender - male (property 3)

*/


// ----------------------------------Creation-----------------------------------

let student = {
    name: "Khushi",
    Age: 20,
    rollNo: 58,
    section: "K23GF",
    city: "Lucknow"
};

// ---------------------------------Getting Values------------------------------

/*

Syntax:
1. student["age"];
2. student.age;
3. let variable = "age";
    student[variable];


JS automatically converts objects keys to strings, even if we made the number as a key, it will converted to string
*/

const obj = {
    1: 'a',
    2: 'b',
    true: 'c',
    null: 'd',
    undefined: 'e'
};

// all keys are automatically converted to the string


// --------------------------------------Updation of Values---------------------------------

console.log(student.city);

student.city = "Mumbai";

console.log(student.city);

// ----------------------------------Addition of new (key,value)---------------------------

student.gender = "female"; //if already exist, then change value. else create new property and assign value

console.log(student.gender);

console.log(student);

// we can change datatype of some property or key in obj literal

// -----------------------------Deletion--------------------------------------

delete student.rollNo;

console.log(student);
