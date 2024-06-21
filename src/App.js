import React, {useState} from 'react'
import Weather from './components/Weather'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>Weather App</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Weather />
      </div>
    </div>
  )
}

export default App
