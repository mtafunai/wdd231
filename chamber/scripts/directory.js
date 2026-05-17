document.addEventListener("DOMContentLoaded", () => {

    const membersContainer = document.querySelector("#members");
    const gridBtn = document.querySelector("#gridBtn");
    const listBtn = document.querySelector("#listBtn");

    /* =========================
       FOOTER (REQUIRED)
    ========================= */
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */
    const menuBtn = document.querySelector("#menuBtn");
    const navMenu = document.querySelector("#navMenu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    /* =========================
       LOAD JSON MEMBERS
    ========================= */
    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error("Error loading JSON:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membership}</p>
            `;

            membersContainer.appendChild(card);
        });
    }

    /* =========================
       GRID / LIST TOGGLE
    ========================= */
    gridBtn.addEventListener("click", () => {
        membersContainer.classList.add("grid-view");
        membersContainer.classList.remove("list-view");
    });

    listBtn.addEventListener("click", () => {
        membersContainer.classList.add("list-view");
        membersContainer.classList.remove("grid-view");
    });

    /* RUN ON LOAD */
    loadMembers();
});