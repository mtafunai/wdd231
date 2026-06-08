const menuButton =
document.querySelector("#menuButton");

const navigation =
document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const cards =
document.querySelector("#repairCards");

async function getRepairData() {

    try {

        const response =
        await fetch("data/repairs.json");

        if (!response.ok) {
            throw new Error(
                "Unable to load repair data."
            );
        }

        const repairs =
        await response.json();

        displayRepairs(repairs);

    } catch (error) {

        cards.innerHTML =
        `<p>Repair data could not be loaded.</p>`;

        console.error(error);
    }
}

function displayRepairs(repairs) {

    repairs.forEach((repair) => {

        const card =
        document.createElement("article");

        card.classList.add("repair-card");

        card.innerHTML = `
            <h3>${repair.appliance}</h3>

            <p><strong>Problem:</strong>
            ${repair.problem}</p>

            <p><strong>Cause:</strong>
            ${repair.cause}</p>

            <p><strong>Solution:</strong>
            ${repair.solution}</p>
        `;

        cards.appendChild(card);
    });
}

getRepairData();