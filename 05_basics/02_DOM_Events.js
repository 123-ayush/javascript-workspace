//-------------------------------------DOM Events-----------------------------------------------------------------

// Dom Events -> Events are signals that something has occured.

// Examples of events:

// A user clicks a button

// A user types in an input box

// A webpage has loaded

// The mouse moves

// The user scrolls

// An element changes

// Whenever these actions happen, the browser fires an event, and you can write JavaScript that listens and responds to it.

// ----------------------------------------------OnClick--------------------------------------------------

let btn = document.querySelector("button");

console.dir(btn);

btn.onclick = function() {
    console.log("Button was clicked!");
}


// --------------------------------------------OnMouseEnter-------------------------------------------------

let btn = document.querySelectorAll("button");

btn.onmouseenter = function() {
    console.log("Mouse entered on the button");
}


// ------------------------------------------AddEventListener------------------------------------------------

// event.addeventlistener(event, callback);

btn.addEventListener("click", function() {
    console.log("Button was clicked!");
})

// ---------------------------------------------------This---------------------------------------------------

function sayhello(){
    console.log("Hello!");
    this.style.backgroundColor = aqua;
}

btn.addEventListener("click", sayhello);


// ----------------------------------------------KeyBoard Events---------------------------------------------

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    if(event.code == "KeyU"){
        console.log("Character will move forward!");
    }else if(event.code == "KeyD"){
        console.log("Character will move backward!");
    }else if(event.code == "KeyL"){
        console.log("Character will move left!");
    }else if(event.code == "KeyR"){
        console.log("Character will move right!");
    }
});