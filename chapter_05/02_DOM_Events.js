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
// we can add event listener to any kind of element

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

// --------------------------------------Events on forms--------------------------------------------

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // helps to prevent the default tab swtich to the url written in action attribute
    alert("Form Submitted!");
});

// there is a property named 'elements' through which we can access any element of form


// -------------------------------------change event----------------------------------------------

//The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).

let ip = document.querySelector("input");

ip.addEventListener("change", function(){
    console.log("change event.");
    console.log("New value is ", ip.value);
});

// ----------------------------------------input event-------------------------------------------

//The input event fires when the value of an <input> , <select> , or <textarea> element has been changed.

let ip1 = document.querySelector("input");

ip.addEventListener("input", function(){
    console.log("Input event.");
    console.log("New value is ", ip.value);
});