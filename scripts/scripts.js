// Creating Constants

/*const dogImg = document.querySelectorAll(".dog-img");

fetch("https://dog.ceo/api/breeds/image/random", {

})


fetch("https://api.nationalize.io/?name=mohamad")
    

img.src = data.message

async function getUsers() {
    let url = "https://api.genderize.io/?name=rio";
    try {
        let res = await fetch("https://api.genderize.io/?name=rio");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
*/

let name = document.getElementById("name").value;
const predict = document.getElementById("predict");
predict.addEventListener("click", getAge);

function getAge() {
    fetch('https://api.agify.io/?name=${name}')
        .then((response) => response.json())
        .then((data) => console.log(data))
}