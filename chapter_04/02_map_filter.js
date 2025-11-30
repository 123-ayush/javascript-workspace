// ----------------------Map-----------------------------------

// it is similar to forEach but it will form a new arr of same size by working on each element of arr. if nothing is happening inside the function still arr will form but of undefined values of same size.

let data = [1,2,3,4,5];

let double = data.map(function(el) {
    return el*2;
});

console.log(data, double);


// -----------------------------------Filter--------------------------------------

// let newArr = arr.filter(some function)

// it will also create a new array but it filters out from the orginal array like if the function returns true element will be added otherwise not.

let even = data.filter((num) => (num%2 == 0));

console.log(even);