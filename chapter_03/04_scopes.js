/* 

Scope -> determines the accessability of different variables, objects and functions from differnt parts of code.

Types:
    1. function
    2. block
    3. lexical


Function scope -> varibles defined in function cant access outside it.

Block scope -> varible defined in {} block cant be accessed from outside.

Lexical scope -> varible defined outside a function can be accessed by another function defined after the varible declaration. but opposite is not true.

*/

let greet = "Hello";

function change(){
    let greet = "namaste";
    console.log(`Outer function greet: ${greet}`);
    function inner(){
        console.log(`Inner function greet: ${greet}`);
    }
    inner();
}

console.log(`Global greet: ${greet}`);

change();

console.log(`Global greet again: ${greet}`);
