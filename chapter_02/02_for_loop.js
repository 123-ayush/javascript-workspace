// Loops -> used to iterate a piece of code

/*

for(initialization; condition; update){
    ----    
}

*/

//SIMPLE FOR LOOP

// for(let i = 0; i<5; i++){
//     console.log(i);
// }


//NESTED FOR LOOP

for(let i = 0; i<10; i++){
    console.log("Outer");
    for(let j = 0; j<=i; j++){
        console.log(j);
    }
    // console.log();
}