// Creating Constants

let userName = document.getElementById("user-name").value;
const predict = document.getElementById("predict");
predict.addEventListener("click", getAge);


function getAge() {
    let userInput = document.getElementById('user-name').value.trim();
    url = "https://api.nationalize.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
}