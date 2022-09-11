// Creating Constants


window.addEventListener("load", getRandomDogImg);

const predict = document.getElementById("predict");
predict.addEventListener("click", getGen);
predict.addEventListener("click", getAge);
predict.addEventListener("click", getNat);

const gender = document.getElementById("gender");
const age = document.getElementById("age");
const nat = document.getElementById("nat");


//creating functions


function getGen() {
    let userInput = document.getElementById("user-name").value.trim();
    url = "https://api.genderize.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => gender.innerText = (JSON.stringify(data)))
}


function getAge() {
    let userInput = document.getElementById("user-name").value.trim();
    url = "https://api.agify.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => age.innerText = (JSON.stringify(data)))
}


function getNat() {
    let userInput = document.getElementById("user-name").value.trim();
    url = "https://api.nationalize.io/?name=" + userInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => nat.innerText = (JSON.stringify(data)))
}


function getRandomDogImg() {
    url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            display_image(data.message)
        })
        .catch(function(error) {
            console.log("Error:" + error)
        })
}

function display_image(image_url) {
    document.getElementById("image").src = image_url;
}