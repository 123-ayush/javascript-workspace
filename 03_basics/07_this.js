// this keyword -> 'This'refers to an object that is executing the current piece of code

// ex.

const student = {
    name: 'Ayush',
    age: 20,
    eng: 80,
    hindi: 59,
    math: 69,
    getAvg(){
        let avg = (this.eng + this.hindi + this.math) / 3;
        console.log(avg);
    }
};

// student.getAvg();

// console.log(this); // window object


// -----------------------------------this with arrow function-------------------------------

const stud = {
    name: "Ayush",
    age: 20,
    marks: 45,
    prop: this, //global scope
    getName: function(){
        console.log(this); // stud 
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    }
}

console.log(stud.getName());
console.log(stud.getMarks());


