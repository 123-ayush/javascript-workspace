let bdy = document.querySelector("body");

let inp = document.createElement("input");
let btn = document.createElement("button");

btn.append("click me!")

bdy.appendChild(inp);
bdy.appendChild(btn);

inp.placeholder = "username...";
btn.id = "btn";

btn.style.backgroundColor = "blue";
btn.style.color = "white";

let head = document.createElement("h1");
head.innerText = "DOM Practice";
head.style.textDecoration = "underline";
head.style.color = "purple";

bdy.appendChild(head);

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice"
bdy.appendChild(para);

console.dir(head);