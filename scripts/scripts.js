// Creating Constants

let userName = document.getElementById("user-name");
const predict = document.getElementById("predict");
predict.addEventListener("click", getGen);


function getNat() {
    let userInput = document.getElementById("user-name").value.trim();
    url = "https://api.nationalize.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
}


function getAge() {
    let userInput = document.getElementById("user-name").value.trim();
    url = "https://api.agify.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
}


function getGen() {
    let userInput = document.getElementById("user-name").value.trim();
    url = "https://api.genderize.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
}