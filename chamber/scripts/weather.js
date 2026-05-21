const apiKey = "YOUR_API_KEY";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=Suva,FJ&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather API error");
        }

        const data = await response.json();
        displayResults(data);

    } catch (error) {
        console.log("Weather fetch error:", error);
    }
}

function displayResults(data) {

  
    document.querySelector("#temp").textContent =
        Math.round(data.list[0].main.temp) + "°C";

    document.querySelector("#desc").textContent =
        data.list[0].weather[0].description;

    const forecast = document.querySelector("#forecast");
    forecast.innerHTML = "";

    const filtered = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    filtered.slice(0, 3).forEach(day => {

        const card = document.createElement("div");

        const date = new Date(day.dt_txt);

        card.innerHTML = `
            <p><strong>${date.toLocaleDateString("en-FJ", { weekday: "short" })}</strong></p>
            <p>${Math.round(day.main.temp)}°C</p>
            <p>${day.weather[0].description}</p>
        `;

        forecast.appendChild(card);
    });
}

apiFetch();