const button = document.getElementById("button")
var numberInTheShape = 1
var oldValue = 0

const circle = document.getElementById("circle")
const square = document.getElementById("square")
const rectangle = document.getElementById("rectangle")
const box = document.getElementById("box")

button.onclick=()=>{
    let n = document.getElementById("number").value
    n = Number(n) + Number(oldValue)
    let j
    for(let j = numberInTheShape; j<=n; j++) {
        var shape = document.createElement("div")
        shape.innerHTML += numberInTheShape
        if(square.checked) {
            shape.classList.add("square")

        }else if (circle.checked) {
            shape.classList.add("circle")

        }else if (rectangle.checked) {
            shape.classList.add("rectangle")
        }
        box.appendChild(shape)
        numberInTheShape++;
        oldValue = document.getElementById("box").lastElementChild.innerHTML;
    }
    console

}