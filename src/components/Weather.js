import React, {useState} from 'react'
import axios from 'axios'
import './Weather.css'

const API_KEY = 'YOUR_OPEN_WEATHER_API_KEY'

function Weather() {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  const fetchWeather = async location => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`,
      )
      setWeatherData(response.data)
      setError(null)
    } catch (error) {
      setError('Invalid location or network error')
      setWeatherData(null)
    }
  }

  const handleSearch = () => {
    if (location) {
      fetchWeather(location)
    }
  }

  return (
    <div className="weather-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city or zip code"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>{new Date().toLocaleString()}</p>
          <h3>{weatherData.main.temp}°C</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default Weather
