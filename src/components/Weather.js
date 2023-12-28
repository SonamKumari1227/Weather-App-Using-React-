// WeatherApp.js
import React, { useState, useEffect } from 'react';

import './index.css'; // Import your CSS file for styling


const WeatherApp = () => {
  // State variables
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data
    const fetchWeatherData = async () => {
      
    try {
    
     const API_KEY = 'YOUR_API_KEY';
        const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${location}&${API_KEY}`;
        
      //  https://api.openweathermap.org/data/2.5/weather?q={ocation}&appid=$d05bbd9d69c062d1be6ddc8fd87351d9

        const response = await fetch(API_ENDPOINT);
        console.log("response=", response);
      const data = await response.json();

      // Update weatherData state with the fetched data
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(location);
    fetchWeatherData();
  };

  return (
    <div className="weather-app-container">
      <h1 className="app-title">Weather App</h1>

      <form className="location-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
              <button type="submit">Get Weather</button>
              
      </form>
      
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location}</h2>
          <p>{weatherData.description}</p>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          {/* Add more weather information as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
