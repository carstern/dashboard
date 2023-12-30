// <!-- 4. Här ska vädret i närtid visas. Denna behöver inte se ut exakt som i skissen men det ska 
// vara data som hämtas från något öppet API. För att avgöra vilken stad vädret ska visas för 
// ska browserns geolocation-api användas. Extra utmaning: Gör så att användaren kan anpassa orten som visas-->


/* 
Commenting out the import and getAPI key function below as I could not get it working even when just testing it. 
As we are to do this asignment vanilla, I will have the API key visible.

import '/dotenv/config'
require('dotenv').config();
console.log(`Hello! ${process.env.API_KEY}`);

async function getAPIKey(){
    const response = await fetch('./secrets/.env');
    if(response.ok){
        const keys = await response.json();
        const weatherKey = keys[0].weatherKey;
        return weatherKey;
    } else {
        console.log(`HTTP error message: ${response.status}`);
    }
};*/
// import API_KEY from "./apikey";

async function getWeatherData(city) {
    // const APIKey = await getAPIKey(); Removed because of above comment. 
    const APIKey = 'b476713d2c62a2855f8754e4cc62706c'; // Chose to leave this in the open as I could't solve it without adding on frameworks.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    
    fetch(url) // Added error handling 
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid input');
        }
        return response.json();
    })
    .then(data => {
        if (data.cod === '404' || data.cod === '400') {
            throw new Error('Invalid Input');
        }
        
        displayWeatherData(data);
    })
    .catch(error => {
        console.error('Problem fetching weather data:', error);
        const weatherContainer = document.getElementById('weatherContainer');
        weatherContainer.innerHTML = `<p>${error.message}</p>`;
    });
}

function displayWeatherData(data) {
const weatherContainer = document.getElementById('weatherContainer');
weatherContainer.innerHTML = ''; // Clear previous data

const cityName = document.createElement('h2');
cityName.textContent = data.name;

const temperature = document.createElement('p');
temperature.textContent = `Temperature: ${data.main.temp}°C`;

const weatherDescription = document.createElement('p');
weatherDescription.textContent = `Weather: ${data.weather[0].description}`;

weatherContainer.appendChild(cityName);
weatherContainer.appendChild(temperature);
weatherContainer.appendChild(weatherDescription);
}

const getWeatherBtn = document.getElementById('getWeatherBtn');
getWeatherBtn.addEventListener('click', function() {
const cityInput = document.getElementById('city').value.trim();
getWeatherData(cityInput);
});