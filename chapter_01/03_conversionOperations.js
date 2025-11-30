let age = undefined;

console.log(typeof age);

let valueInNumber = String(age); // just like parseInt in java 
// we can also use String(valueInNumber) to convert back to string

console.log(typeof(valueInNumber));
console.log(valueInNumber);


/*
differet datatype to number

"33abs" => NaN
null => 0
undefined => NaN
true/false => 1/0

*/

//----------------------------------------

/*
differet datatype to boolean

1/0 => true/false
"" => false
"any_value" => true
null/undefined => false

*/

//---------------------------------------

/*
differet datatype to string

anyNumber => "anyNumber"
true/false => "true"/"false"
null/undefined => "null"/"undefined"

*/