const spotlightContainer = document.querySelector("#spotlight-container");

async function getMembers() {

    const response =
        await fetch("data/members.json");

    const data = await response.json();

    displaySpotlights(data.members);
}

function displaySpotlights(members) {

    const filtered =
        members.filter(member =>
            member.membership === 2 ||
            member.membership === 3
        );

    const shuffled =
        filtered.sort(() => 0.5 - Math.random());

    const selected =
        shuffled.slice(0, 3);

    selected.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                alt="${member.name} logo"
                loading="lazy">

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>
                ${member.membership === 3
                    ? "Gold Member"
                    : "Silver Member"}
            </p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getMembers();