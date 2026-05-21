document.addEventListener("DOMContentLoaded", () => {

    
    const menuBtn = document.querySelector("#menuBtn");
    const navMenu = document.querySelector("#navMenu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });


    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;


    async function getWeather() {

        const apiKey = "YOUR_API_KEY";
        const city = "Suva";

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();


        document.querySelector("#temp").textContent = data.list[0].main.temp + "°C";
        document.querySelector("#desc").textContent = data.list[0].weather[0].description;


        const forecastContainer = document.querySelector("#forecast");
        forecastContainer.innerHTML = "";

        const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

        daily.slice(0, 3).forEach(day => {
            const div = document.createElement("div");
            div.classList.add("forecast-day");

            const date = new Date(day.dt_txt).toLocaleDateString();

            div.innerHTML = `
                <p><strong>${date}</strong></p>
                <p>${day.main.temp}°C</p>
                <p>${day.weather[0].description}</p>
            `;

            forecastContainer.appendChild(div);
        });
    }


    async function getSpotlights() {

        const response = await fetch("data/members.json");
        const members = await response.json();

        const filtered = members.filter(m => m.membership >= 2);

        const random = filtered
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

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

    getWeather();
    getSpotlights();
});