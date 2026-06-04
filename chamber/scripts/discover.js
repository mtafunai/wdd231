import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#discover-cards");

places.forEach((place) => {

    const card = document.createElement("article");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img
                src="${place.image}"
                alt="${place.name}"
                loading="lazy"
                width="300"
                height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button type="button">Learn More</button>
    `;

    cardsContainer.appendChild(card);
});

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const currentDate = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysDifference =
        Math.floor((currentDate - Number(lastVisit)) / 86400000);

    if (daysDifference < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (daysDifference === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${daysDifference} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentDate);

document.querySelector("#lastModified").textContent =
    document.lastModified;