import Gujarati from "./images/paneerWalnut.jpg";

const menuPopulate = function(contentDiv) {
    const menu = document.createElement("h1");
    menu.textContent = "Our Menu";
    contentDiv.appendChild(menu);

    const detail = document.createElement("p");
    detail.textContent = "Discover the artistry of Indian cuisine. Our menu is a carefully curated selection of traditional recipes, each crafted with meticulous attention to detail and aromatic spices. Experience the rich tapestry of flavors that define the subcontinent";
    contentDiv.appendChild(detail);

    const cuisine = document.createElement("div");
    contentDiv.appendChild(cuisine);

    const img1 = document.createElement("img");
    img1.src = Gujarati;
    img1.style.cssText = "height: 200px; width: 300px; float:left";
    cuisine.appendChild(img1);

    const cuisineDetail = document.createElement("p");
    cuisineDetail.textContent = "Creamy paneer meets crunchy walnuts in a delightful blend of Indian spices. A unique and satisfying experience";
    cuisine.appendChild(cuisineDetail);
}

export {menuPopulate};