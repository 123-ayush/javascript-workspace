//Methods -> actions that can be performed on an object.

const calc = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiplication: function(a,b){
        return a*b;
    },
    division: function(a,b){
        return a/b;
    }
}

let val = calc.add(1,3);

console.log(val);
