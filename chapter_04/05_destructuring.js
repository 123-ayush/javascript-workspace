// ---------------------------------------------Destructuring--------------------------------

// it is like storing value of array into multiple values

let race = ['tony', 'stark', 'usain', 'bolt'];

let [winner, runnerup, ...others] = race;

console.log(`Winner of the race is ${winner} and the runnerup is ${runnerup} and others are ${others}`);


// --------------------------Destructuring in objects---------------------------

let student = {
    name: 'Ayush',
    age: 20,
    username: 'Ay@123',
    password: 'abcd',
    city: 'haryana'
};

let {username: user, password: pass, city = 'Jind'} = student;

console.log(`The username is ${user} and the password is ${pass} with city ${city}`);

// if we pass city in destructuring but not in student obj then value used is that value that is passed in destructuring but if there is property of city in student then the value used is which is present in property or student object 
