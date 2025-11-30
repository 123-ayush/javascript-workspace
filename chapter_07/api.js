// ---------------------------------Application Programming Interface-----------------------------------

// api provide us data in json format

/*

Some Random APIs:

    https://catfact.ninja/fact (sends random cat facts)
    https://www.boredapi.com/api/activity (sends an activity to do when bored)
    https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

*/


/*

Accessing data from json:

1. JSON.parse(data) method
   to parse a string data into a json object

2. JSON.stringify(json) method
   to parse a js object data to json object

*/

let jsonData = 
'{"fact":"Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs.","length":102}'

let validRes = JSON.parse(jsonData)

console.log(validRes.fact);

let jsObj = {
    name: "ayush",
    age: 20
};

let jsonD = JSON.stringify(jsObj)

console.log(jsonD);

// ----------------------------------------------------Testing API---------------------------------------

// Tools:
    //Postman
    //Hoppscoth


// ------------------------------------------AJAX-----------------------------------------------------

// AJAX -> Asynchronous JavaScript and XML (Extensible Markup Language)

// few years ago, if we send a request using js to an api, we get our response in format of XML. The process of sending request to and getting response from api is asyncronous. these calls are called ajax calls

 
//--------------------------------------------HTTP verbs---------------------------------------------

// 1. GET request
// 2. POST request
// 3. DELETE request


// -----------------------------------------Status Codes---------------------------------------------

// 1. 200 -> OK
// 2. 400 -> Bad Request
// 3. 404 -> Not found
// 4. 500 -> Internal Server Error



// Add Information in URLs
// Query Strings
// https:\\www.google.com\search?q=harry+porter
// value
// ?name=shradha&marks=95


// somewhere we can see like:
// url\:id
// url\:num
// url\:q
// {{q}}
// <q>

// these are variable which are replaced by some values


//-----------------------------------------------Our First API request------------------------------------

// using fetch -> fetch(url)

let url = "https://catfact.ninja/fact";

// fetch(url) // return a promise
//     .then((res) => {
//         console.log(res);
//         res.json().then((data) => {
//             console.log(data);
//         })
//     })
//     .catch((err) => {
//         console.log("failed");
//     })

async function getData(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.facts);
}

getData();
