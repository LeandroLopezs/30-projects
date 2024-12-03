
const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[0]);





