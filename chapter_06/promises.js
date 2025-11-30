// Promises -> promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

// Three states in promises: pending, fulfilled(.then method), rejected(.catch())

// function saveData(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;

//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveData("Ayush", () => {
//     console.log("Data1 saved successfully.");
//     saveData("Singh", () => {
//         console.log("Data2 saved successfully.");
//         saveData("Ahlawat", () => {
//             console.log("Data3 saved successfully.");
//         }, () => {
//             console.log("weak connection. data3 not saved.");
//         })
//     }, () => {
//         console.log("weak connection. data2 not saved.");
//     })
// }, () => {
//     console.log("weak connection. data1 not saved.");
// });

// Callback hell created

// -----------------------------------Resolve Callback-------------------------------------------

function saveData(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if(internetSpeed > 4){
            resolve("done");
        }else{
            reject("weak connection");
        }
    });
}

// let req = saveData("Ayush");

// req
//     .then(() => {
//         console.log("success: data saved");
//     })
//     .catch(() => {
//         console.log("failure: weak connection.");
//     })

saveData("Ayush")
    .then((result) => {
        console.log("success: data1 saved with result ", result);
        console.log("success: data1 saved");
        return saveData("Singh");
    })
    .then((result) => {
        console.log("success: data2 saved with result ", result);
        console.log("success: data2 saved");
        return saveData("Ahlawat");
    })
    .then((result) => {
        console.log("success: data3 saved with result ", result);
        console.log("success: data3 saved");
    })
    .catch((error) => {
        console.log("failure: weak connection. some promise failed with error ", error);
        console.log("failure: weak connection. some promise failed.");
    })


// only 1 catch block and multiple then blocks

