const test = document.querySelector("div");
const newTest = document.createElement("div");
newTest.textContent = "JS-Test";
//test.insertAdjacentElement("afterend", newTest);
test.parentElement.appendChild(newTest);