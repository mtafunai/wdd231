document.addEventListener("DOMContentLoaded", () => {

    const membersContainer = document.querySelector("#members");
    const gridBtn = document.querySelector("#gridBtn");
    const listBtn = document.querySelector("#listBtn");

    const menuBtn = document.querySelector("#menuBtn");
    const navMenu = document.querySelector("#navMenu");

    
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

    
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    
    async function loadMembers() {
        const response = await fetch("data/members.json");
        const data = await response.json();
        displayMembers(data);
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

    
    gridBtn.addEventListener("click", () => {
        membersContainer.classList.add("grid-view");
        membersContainer.classList.remove("list-view");
    });

    listBtn.addEventListener("click", () => {
        membersContainer.classList.add("list-view");
        membersContainer.classList.remove("grid-view");
    });

    loadMembers();
});