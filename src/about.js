const aboutPopulate = function(contentDiv) {

    const aboutUs = document.createElement("h2");
    aboutUs.textContent = "About Us: The Spice Merchant";
    
    contentDiv.appendChild(aboutUs);
    
    const par1 = document.createElement("p");
    par1.textContent = "Welcome to The Spice Merchant, a culinary haven nestled in the heart of our vibrant city. We invite you to step away from the ordinary and embark on a flavorful journey through the diverse and enchanting landscapes of Indian cuisine.";

    contentDiv.appendChild(par1);

    const passion = document.createElement("h3");
    passion.textContent = "Our Passion: Authentic Indian Flavors";
    contentDiv.appendChild(passion);

    const par2 = document.createElement("p");
    par2.textContent = "At The Spice Merchant, we are passionate about bringing you the true essence of Indian cooking. Our menu is a carefully curated collection of classic dishes, each prepared with meticulous attention to detail and a deep respect for traditional techniques. We believe in using fresh, locally sourced ingredients to create dishes that are not only delicious but also bursting with natural flavor.";
    contentDiv.appendChild(par2);
    
}

export {aboutPopulate};