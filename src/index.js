import "./style.css";
import { pageLoadfunction } from "./pageLoad";
import { menuPopulate } from "./menu";
import { aboutPopulate } from "./about";
console.log("Hello bro.");

const tabSwitch = (() => {

    const homeButton = document.querySelector(".Home");
    const menuButton = document.querySelector(".Menu");
    const aboutButton = document.querySelector(".About");
    const contentDiv = document.querySelector("#content");

    homeButton.addEventListener('click', ()=> {

        contentDiv.innerHTML = "";

        pageLoadfunction(contentDiv);
        console.log("home button clicked");
    });

    menuButton.addEventListener('click', ()=> {
        contentDiv.innerHTML = "";

        menuPopulate(contentDiv);
        console.log("menu button clicked");
    });

    aboutButton.addEventListener('click', ()=> {
        contentDiv.innerHTML = "";

        aboutPopulate(contentDiv);
        console.log("about button clicked");
    });

})();