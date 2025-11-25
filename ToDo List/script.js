let ul = document.querySelector(".list");
let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let inp = document.querySelector("input");

add.addEventListener("click", function () {
    if (inp.value === "") {
        alert("Write some task...");
    } else {
        let arr = inp.value.split(" ");
        let li = document.createElement("li");

        li.innerText = inp.value;
        li.classList.add(arr[0]); 
        ul.appendChild(li);

        inp.value = "";
    }
});

remove.addEventListener("click", function () {
    if (inp.value === "") {
        alert("Write some task...");
    } else {
        let arr = inp.value.split(" ");
        let li = document.querySelector(`.${arr[0]}`);

        if (li) {
            ul.removeChild(li);
        } else {
            alert("Task not found!");
        }

        inp.value = "";
    }
});
