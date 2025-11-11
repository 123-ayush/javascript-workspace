/* 

Higher Order Function -> a function that does one or both:
                        1. takes one or more functions as arguments
                        2. return a function

*/

// example for condn 1.

// function multipleGreet(func, n){
//     for(let i = 0; i<n; i++){
//         func(i);
//     }
// }

// let greet = function(num){
//     console.log(`${num}`);
// }

// multipleGreet(greet, 5);


//example for condn 2.

function oddEvenTest(request){
    if(request.toLowerCase() == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request.toLowerCase() == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("Wrong Request!");
    }
}

let func = oddEvenTest("even"); // new in func varible there is even function loaded

func(3);