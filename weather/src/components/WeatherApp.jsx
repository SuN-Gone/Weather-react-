import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import { fetchWeather, getWeatherIcon } from '../services/WeatherAPI';
import './WeatherApp.css';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const search = async () => {
        if (!city.trim()) return;
        
        setLoading(true);
        setError('');
        
        try {
            const data = await fetchWeather(city);
            const weatherData = {
                temp: Math.round(data.main.temp),
                city: data.name,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                icon: getWeatherIcon(data.weather[0].main)
            };
            setWeather(weatherData);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <SearchBar 
                city={city} 
                setCity={setCity} 
                search={search} 
                loading={loading} 
            />
            {error && <p className="error">{error}</p>}
            {loading && <p className="loading">Loading...</p>}
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
}

export default WeatherApp;