// ----------------------Conditional Statements--------------------------------

// 1. If-Else

let a = 4;

if(a > 0){
    console.log(`variable is positive with value ${a}`);
}else if(a == 0){
    console.log(`variable is zero with value ${a}`);
}else{
    console.log(`varible is negative with value ${a}`);
}

// 2. Switch

let color = "red";

switch(color){
    case "red":
        console.log(`Color is red.`);
        break;
    case "blue":
        console.log(`Color is blue.`);
        break;
    default:
        console.log(`No match found.`);
}