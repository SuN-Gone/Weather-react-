import React from "react";

function WeatherInfo({ weather }) {
  return (
    <div className="weather">
      <img src={weather.icon} className="weather-icon" alt="Weather" />
      <h1 className="temp">{weather.temp}°C</h1>
      <h2 className="city">{weather.city}</h2>

      <div className="details">
        <div className="col">
          <img src="/images/humidity.png" alt="" />
          <div>
            <p className="humidity">{weather.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>

        <div className="col">
          <img src="/images/wind.png" alt="" />
          <div>
            <p className="wind">{weather.wind} km/h</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;