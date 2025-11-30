//Practice Here

//if we try to print a char using idx where idx > length, then the o/p is undefined


//--------------------Template Literals---------------------------------

// let age = 10;

// console.log(`The age is ${age}`); 


// ----------------------String Methods---------------------------------

// 1. Trim -> trim space from start and end but not update the real value

let msg = '   hello   '
console.log(`real msg: ${msg}`);

let newMsg = msg.trim()
console.log(`after trim but new var msg: ${newMsg}`);

console.log(`after trim msg: ${msg}`);


//No change can be made to real/original string . whenevr we try to do change new string created old remain same 

// 2. toLowerCase() & toUpperCase()

// 3. indexOf() -> return first occurence of some arg. or return -1.

// Method chaining is something when you use multiple methods on one thing ex. str.trim().toUpperCase(), evaluated from l->r.

// 4. Slice(st, end) -> give part of some string(idx can be negative)

// 5. length -> return length of string

// 6. replace(old, new) -> find first occurence of old and replace with new 

// 7. repeat(num) -> return a string with num number of copies of a string


