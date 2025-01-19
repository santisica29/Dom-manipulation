const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", whenClicked);
function whenClicked(){
    let value = input.value;
    input.value = "";

    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = value;
    button.textContent = "Delete";
    list.appendChild(li);

    button.addEventListener('click', () => {
        li.remove();
        input.focus();
    })

};
