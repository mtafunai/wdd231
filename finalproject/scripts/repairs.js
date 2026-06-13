import { displayRepairs } from "./display.js";

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });

}

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const cards = document.querySelector("#repairCards");

async function getRepairs() {

    try {

        const response =
            await fetch("data/repairs.json");

        if (!response.ok) {
            throw new Error("Unable to load repair data.");
        }

        const repairs = await response.json();

        displayRepairs(repairs, cards);

    }
    catch (error) {

        cards.innerHTML = `
            <p>
                Error loading repair information.
            </p>
        `;

        console.error(error);

    }

}

getRepairs();