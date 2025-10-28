const score = 100 //automatic detections that it is number(implicitly)

const val = new Number(200) //explicit define that it is number

console.log(val.toString().length)

console.log(val.toFixed(2)); //fix the number after decimal accordingly

console.log(val.toPrecision(3)) //set the number by counting each char or number (before decimal + after decimal = precision)

const hundreds = 1000000

console.log(hundreds.toLocaleString()); // put commas according to US currency standards
// pass a parameter 'en-IN' in locale string to use Indian currency standards


// ----------------------------------------------------------------MATH------------------------------------------------------------


console.log(Math);

console.log(Math.abs(-5));

console.log(Math.round(4.65));

console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))

console.log(Math.min(2,5,1,3))
console.log(Math.max(2,5,1,3))

console.log(Math.random()) // always give value b/w 0-1


/* To get a random value between any min and max value use formula ->
    number = Math.floor((Math.random() * (max-min+1)) + min)
*/

//for ex. between 10-20
const mini = 10;
const maxi = 20;

console.log(Math.floor((Math.random() * (maxi-mini+1)) + mini));

//Read MDN of Math and Number