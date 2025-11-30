let bdy = document.querySelector("body");
let h1 = document.createElement("h1");
let inp = document.createElement("input");

inp.placeholder = "enter your name...";

bdy.appendChild(h1);
bdy.appendChild(inp);

inp.addEventListener("input", function(){
    let filtered = inp.value.replace(/[^a-zA-Z ]/g, ""); // important
        
    inp.value = filtered;

    h1.innerText = filtered;
});

console.dir(inp);

