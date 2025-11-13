// --------------------------------------Reduce ---------------------------------------

// reduce the arr to a single value.

// arr.reduce(reducer function with 2 variables for (accumulator, ele));

let data = [1,2,3,4,5];

let res = data.reduce((res, ele) => (res+ele));

console.log(res);


let max = data.reduce((max, ele) => {
    if(max < ele){
        return ele;
    }else{
        return max;
    }
});

console.log(max);


// ------------------------------------Spread--------------------------------------

// spread(...) -> it is used to spread or expand an iterable into multiple values

// like if we want to fnd min value in array then passing each value using idx to Math.min function takes a lot time now we can use spread function to spread the arr into individual values

let val = [1,4,5,2,5,6,23,5,6,2,6,7,5,32,53,6,3];

let min = Math.min(...val);

console.log(min);

// it can be used to make a copy of some array such that if we want to do some chnage in new array it wont affect original array

// also used to convert string to charArray

// let newArr = [...odd, ...even] -> create new array from two differnt arrays

// can be used to make copy of object literals too and can add more to new object created

