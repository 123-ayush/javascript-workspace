//------------------------------------------------ Async Keyword-------------------------------------------

// writing async keyword before any function makes that function async

//ex.1

async function sayHello(){
    throw "some random error";
    console.log("Hello!");
}; //returns a promise

let h = async () => {} // returns a promise

// if func executes successfully then it returns a fulfilled promise with the value as returned value
// if func executes with error then it returns a rejected promise 


// --------------------------------------------Await Keyword----------------------------------------------

// await -> pauses the execution of surrounding async function until the promise is settled(resoleved or rejected)

// can be used only in async function

function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num < 5){
                reject( "error ocurred!");
            }
            console.log(num);
            resolve();
        }, 1000);
    })
};

async function demo(){
    try{
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
    }catch(err){
        console.log("promise rejected with error: ", err);
    } 

    let n = 5;
    console.log(n);
}