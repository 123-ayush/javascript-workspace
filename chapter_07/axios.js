//----------------------------------------Axios-------------------------------------------------------

// Library to make HTTP requests

// axios will return us promise and the result in human readable form already not like fetch 


// let btn = document.querySelector("button");
// let img = document.querySelector("img");

// btn.addEventListener("click", async () => {
//     let fact = await getData();
//     img.setAttribute("src", fact);
// });

let url = "https://dog.ceo/api/breeds/image/random";

// async function getData(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     }
//     catch(e){
//         console.log("error: ",e);
//         return "No image found!";
//     }
// }


// passing header with axios calls

async function getData(){
    try{
        let config = { headers: {Accept: "application/json"} };
        let res = await axios.get(url, config);
        console.log(res.data);
    }
    catch(e){
        console.log("error: ",e);
        return "No image found!";
    }
}