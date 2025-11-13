// ------------------- forEach-------------------------

// arr.forEach(some function defination)

// the function will work on each arr element and return the result for each

let arr = [1,2,3,4,5];

function print(el){
    console.log(el);
}

arr.forEach(print);


let stud = [{
    name: 'Ayush',
    marks: 95
}, {
    name: 'Arun',
    marks: 95.5
}, {
    name: 'Sunny',
    marks: 96
}];

stud.forEach((student) => {
    console.log(`Marks of ${student.name} is ${student.marks}.`);
})