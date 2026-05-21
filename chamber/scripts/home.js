document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector("#menuBtn");
    const navMenu = document.querySelector("#navMenu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // FOOTER
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

    async function loadWeather() {
        const apiKey = "YOUR_API_KEY";
        const city = "Suva";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        document.querySelector("#temp").textContent = data.main.temp + "°C";
        document.querySelector("#desc").textContent = data.weather[0].description;
    }


    async function loadSpotlights() {
        const response = await fetch("data/members.json");
        const members = await response.json();

        const filtered = members.filter(m => m.membership >= 2);
        const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

        const container = document.querySelector("#spotlightContainer");
        container.innerHTML = "";

        random.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>Level: ${member.membership}</p>
                <a href="${member.website}" target="_blank">Visit</a>
            `;

            container.appendChild(card);
        });
    }

    loadWeather();
    loadSpotlights();
});