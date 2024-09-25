import "./Home.css"
import restaurantImage from "./restaurant.jpg"
import menu from "./Menu"
import about from "./About"


const homeBtn = document.querySelector("#Home");
const menuBtn = document.querySelector("#Menu");
const aboutBtn = document.querySelector("#About");
const contentDiv = document.querySelector("#content");

const image = document.createElement("img");

image.src = restaurantImage;

const header = document.createElement("h1");

header.innerText = "Vansladd's Restaurant";

contentDiv.appendChild(header)
contentDiv.appendChild(image)

menuBtn.addEventListener("click",() =>{
    contentDiv.innerHTML="";
    menu(contentDiv);
})

homeBtn.addEventListener("click",() => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(header)
    contentDiv.appendChild(image)
})

aboutBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    about(contentDiv);
})


