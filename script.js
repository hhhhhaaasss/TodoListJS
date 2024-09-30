"use strict";

const addInput = document.querySelector(".addInput");
const addButton = document.querySelector(".addButton");
const list = document.querySelector(".list");

addButton.addEventListener("click", handleSubmit);
addInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") handleSubmit();
});

function handleSubmit() {
  const input = addInput.value;
  const li = document.createElement("li");
  const verify = document.createElement("img");

  verify.src = "verify_black.png";

  const close = document.createElement("button");

  close.textContent = "x";

  li.appendChild(document.createTextNode(input));
  list.appendChild(verify);
  list.appendChild(li);
  list.appendChild(close);

  li.setAttribute("class", "text");
  verify.setAttribute("class", "verify");
  close.setAttribute("class", "close");
  addInput.value = "";

  li.addEventListener("click", function () {
    verify.src = "verify_orange.png";
    li.style.textDecoration = "line-through";
  });

  close.addEventListener("click", function () {
    li.remove();
    verify.remove();
    close.remove();
  });
}
