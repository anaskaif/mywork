function getWeather() {
    const apiKey = ; // Replace with your API key
    const city = document.getElementById('cityInput').value.trim();
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid="+ apikey+"&units=metric";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = Temperature: ${temperature} °C;
            document.getElementById('weatherDescription').textContent = Weather: ${weatherDescription};
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            alert('City not found. Please try again.');
        });
}