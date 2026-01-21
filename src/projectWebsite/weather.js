var weather = {
    refreshWeather: function () {
        const weatherButton = document.getElementById("get-weather-btn");
        weatherButton.addEventListener("click", async function () {
            const city = document.getElementById("city-input").value || "Brussels";
            try {
                const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=L7EG2HJDWRZVXQCQRAGYYWT7G&contentType=json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                const currentConditions = data.currentConditions;
                const weatherInfo = {
                    temperature: currentConditions.temp,
                    humidity: currentConditions.humidity,
                    windSpeed: currentConditions.windspeed,
                    description: currentConditions.conditions
                };
                weather.displayWeather(weatherInfo, city);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
                weather.displayWeather(null, city);
            }
        });
    },

    displayWeather: function (weatherInfo, city) {
        const weatherDisplay = document.getElementById("weather-info");
        if (weatherInfo) {
            weatherDisplay.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${weatherInfo.temperature}°F</p>
                <p>Humidity: ${weatherInfo.humidity}%</p>
                <p>Wind Speed: ${weatherInfo.windSpeed} mph</p>
                <p>Description: ${weatherInfo.description}</p>
            `;
        } else {
            weatherDisplay.innerHTML = `<p style="color:red;">No weather information available for "${city}".</p>`;
        }
    }
};

// Initialize the weather module after DOM is loaded
window.addEventListener("DOMContentLoaded", function () {
    weather.refreshWeather();
});
