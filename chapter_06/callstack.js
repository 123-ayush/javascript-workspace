// Call -> mean calling any function using paranthesis after name of func.
// Stack -> way of putting items one on another. it is last in first out data structure

// JS is a single threaded language means at one time only one line or command is executed.  but we have seen sometime that when we use settimeout other code is also executed along with js other code so this is not handled by js settimeout is handled by browser as it is multithreaded . after waiting for the given time browser put the function in the js call stack

// Synchronous nature: doing everything one by one
// Asynchronous nature: opposite to sync.

// when we use settimeout, we are making js async in nature


// --------------------------------------CallBack Hell---------------------------------------

let h1 = document.querySelector("h1");

function changeColor(color, time, nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        nextColorChange();
    }, time)
}

changeColor("red", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("orange", 1000)
    })
});

// calling function inside another and another this is called callback hell 
    