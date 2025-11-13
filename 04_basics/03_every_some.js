// -------------------------------------every---------------------------------------

// returns true if every element of array satisfies the condn in function else return false.

let arr = [2,4,6,8];

let even = arr.every((num) => (num%2 == 0));

console.log(even);


// -------------------------------------some------------------------------------

// returns true if some element of array satisfies the condn in function else return false.

let odd = arr.some((num) => (num%2 != 0));

console.log(odd);