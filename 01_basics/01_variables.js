const accountId = 144213
let email = "ayush@google.com"
var pass = "012345"
city = "julana" // it is possible but not preferable
let accState; // undefined yet declared

// accountId = 2 // not allowed

/*

Prefer not to use var
bcz of issue in block scope and functional scope

*/

console.log(accountId);

email = "ay@go.com"
pass = "ayush"
city = "jind"

console.table([accountId, email, pass, city, accState])

//--------------------Rules for Variable--------------------------------------------

/*

1. can contains letters, digits, '_', '&' but no spaces
2. must begin with letter
3. can also begin with _ and &
4. names are case sensitive
5. reserved keywords can't be used


way of writing names:
1. camelCase
2. snake_case
3. PascalCase

*/