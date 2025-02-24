import React from "react";

function Weather() {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto p-6 gap-6 mt-8 rounded-lg shadow-md">
      {/* Weather Icon */}
      <div className="icon text-9xl mb-4">🌦</div>

      {/* Temperature and Location */}
      <div className="text-center">
        <h1 className="temp text-5xl font-semibold text-gray-800">21%</h1>
        <p className="city-name text-2xl text-gray-500">New York</p>
      </div>

      {/* Weather Details (Humidity, Wind Speed) */}
      <div className="weather-detail flex items-center justify-between w-full mt-6">
        {/* Humidity */}
        <div className="flex flex-col items-center text-gray-800">
          <div className="text-4xl mb-2 text-blue-500">🌫</div>
          <h2 className="text-2xl font-semibold">67%</h2>
          <p className="text-sm text-gray-500">Humidity</p>
        </div>

        {/* Wind Speed */}
        <div className="flex flex-col items-center text-gray-800">
          <div className="text-4xl mb-2 text-yellow-500">💨</div>
          <h2 className="text-2xl font-semibold">2.06 km/hr</h2>
          <p className="text-sm text-gray-500">Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
