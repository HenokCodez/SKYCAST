import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather({ city, tempUnit }) {
  const [weatherData, setWeatherData] = useState(null);
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const units = tempUnit === "Fahrenheit" ? "imperial" : "metric";

  useEffect(() => {
    if (!city) return;

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${WEATHER_API_KEY}`)
      .then((response) => {
        setWeatherData(response.data);
        // console.log("Weather Data:", response.data);
      })
      .catch((err) => console.error("Error fetching data 😓", err));
  }, [city, units]);

  return (
    <div className="flex flex-col items-center max-w-sm mx-auto p-6 gap-6 mt-8 rounded-lg shadow-md">
      {weatherData ? (
        <>
          <div className="icon text-9xl mb-4">
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt={weatherData.weather[0].description} className="w-32 h-32" />
          </div>

          <div className="text-center">
            <h1 className="temp text-5xl font-semibold text-gray-800">
              {weatherData.main.temp}°{tempUnit === "Fahrenheit" ? "F" : "C"}
            </h1>
            <p className="city-name text-2xl text-gray-500">{weatherData.name}</p>
          </div>

          <div className="weather-detail flex items-center justify-between w-full mt-6">
            <div className="flex flex-col items-center text-gray-800">
              <div className="text-4xl mb-2 text-blue-500">🌫</div>
              <h2 className="text-2xl font-semibold">{weatherData.main.humidity}%</h2>
              <p className="text-sm text-gray-500">Humidity</p>
            </div>

            <div className="flex flex-col items-center text-gray-800">
              <div className="text-4xl mb-2 text-yellow-500">💨</div>
              <h2 className="text-2xl font-semibold">
                {weatherData.wind.speed} {tempUnit === "Fahrenheit" ? "mph" : "km/hr"}
              </h2>
              <p className="text-sm text-gray-500">Wind Speed</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
