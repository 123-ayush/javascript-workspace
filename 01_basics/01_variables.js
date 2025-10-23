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

