// --------------------------------------Arrow Function------------------------------------

// const func = (arg1, arg2, ...) => { function defination }

// nameless function

const sum = (a, b) => {
    console.log(a+b);
}

sum(1,2);

const pow = (a, b) => {
    console.log(a**b);
}

pow(2,4);

// if we have only one argument in arrow function then paranthesis is optional.

// if we have 0 or more than 1 argument then we need to use paranthesis

// Implicit Arrow Function -> if our arrow function is return only a single value not any log statement not any other statement, then return keyword also become optional but curly braces are changed to paranthesis

//ex. 

const add = (a,b) => (a+b);

console.log(add(4,5));