const colorInput = document.getElementById("colorInput");
const button = document.querySelector("button");
const body = document.querySelector("body");
const errorMessage = document.querySelector(".error");


function run() {
    const color = colorInput.value.trim().toLowerCase();
    if(!color) {
        errorMessage.style.display = "block";
        return;
    }
    errorMessage.style.display = "none";
    const element = document.createElement("div");
    element.style.backgroundColor = colorInput.value;
    if(element.style.backgroundColor === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid color name or code. Please enter a valid color.";
        return;
    }
    const whiteColors = ["white", "#fffff", "#fff","rgb(255, 255, 255)", "lightgray", "lightgrey"];
    body.style.backgroundColor = color;
    if(whiteColors.includes(color)) {
        body.style.color = "black";
    }else{
        body.style.color = "white";
    }
    colorInput.value = "";
}
button.addEventListener("click", run);

