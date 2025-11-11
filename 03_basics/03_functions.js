/*

Function -> a piece of code which do i particular kind of work and can be called whenever we want it.

ex. 1. console.log(),
    2. array.push(), etc.

 ---------------------------------Function without Arguments------------------------------

Syntax:

function func_name(){
    -----
}

call:

func_name();

*/

// function hello(){
//     console.log("Hello caller!");
// }

// hello();


// function rollDice(){
//     let min = 1, max = 6;

//     let val = Math.floor((Math.random() * (max-min+1)) + min);

//     console.log(`The value is ${val}`);
// }

// rollDice();


// ----------------------------------Function with Arguments---------------------------------

/*

Syntax:

function func_name(arg1, arg2){
    ------------------
}

*/

// function hello(name, city){
//     console.log(`Hello ${name} from ${city}!`);
// }

// hello("Ayush"); // if we dont pass any parameter, then there will no error only the value printed on console is undefined

// there is no need to tell the datatype in agruments

// function avg(num1, num2, num3){
//     let val = (num1+num2+num3)/3;
//     console.log(`Average of three numbers ${num1}, ${num2} & ${num3} is ${val}`);   
// }

// avg(1,4,6);

// function table(num){
//     for(let i = 1; i<=10; i++){
//         console.log(`${num} X ${i} = ${num*i}`);
//     }
// }

// table(9);


// ----------------------------------Return Keyword------------------------------------

// it is used to return some value from a function

/*

syntax:

function func_name(agr1, arg2){
    --------------
    return anyVal;
}

let ans = func_name(par1, par2);

*/

// function joining(arr){
//     let str = "";
//     for(let i = 0; i<arr.length; i++){
//         str = str.concat(arr[i]);
//     }

//     return str;
// }

// let arr = ['a', 'y', 'u', 's', 'h'];

// console.log(joining(arr));



// -------------------------------Function Expressions---------------------------------

// it is like declaring a function in a varible so when something the function returns stored inside the variable

// the function is called by writing of variabl with parenthesis

let sum = function(num1, num2){
    return (num1+num2);
}

console.log(`function: ${sum(1,2)}`);