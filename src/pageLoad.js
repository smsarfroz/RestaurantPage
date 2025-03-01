import restaurantImage from "./images/resto.jpg";

const pageLoadfunction = function (contentDiv) {
    const image = document.createElement("img");
    image.src = restaurantImage;
    image.style.cssText = "height: 400px; width: 500px";

    const header = document.createElement("h1");
    header.textContent = "Welcome to Spice Merchant!";

    const description = document.createElement("p");
    description.textContent = "Nestled in a quaint corner of the city, 'The Spice Merchant' invites you to embark on a culinary adventure through the vibrant flavors of the Indian subcontinent. Our menu, crafted with fresh, locally sourced ingredients, takes you on a journey of aromatic spices and authentic cooking techniques, from the delicate taste of butter chicken to the rich, comforting warmth of saag paneer. With a cozy ambiance and attentive service, we promise an unforgettable dining experience.";

    contentDiv.appendChild(header);
    contentDiv.appendChild(description);
    contentDiv.appendChild(image);

}

export {pageLoadfunction};