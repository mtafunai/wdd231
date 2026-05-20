const apiKey = "YOUR_API_KEY";

const url =
`https://api.openweathermap.org/data/2.5/forecast?q=Suva,FJ&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    document.querySelector("#current-temp").textContent =
        `${data.list[0].main.temp}°C`;

    document.querySelector("#weather-desc").textContent =
        data.list[0].weather[0].description;

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    const forecastDays = [8, 16, 24];

    forecastDays.forEach(index => {

        const day = data.list[index];

        const card = document.createElement("p");

        const date = new Date(day.dt_txt);

        card.innerHTML =
            `${date.toLocaleDateString("en-FJ", { weekday: "short" })}: ${day.main.temp}°C`;

        forecast.appendChild(card);
    });
}

apiFetch();