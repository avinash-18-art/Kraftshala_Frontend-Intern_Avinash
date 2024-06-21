# Weather App

This is a simple weather application that fetches and displays current weather information for a given location using the Open Weather API. It also includes a dark mode toggle feature for a better user experience.

## Features

- Fetches and displays weather information for a given city or zip code.
- Displays location, temperature, date and time, weather description, humidity, and wind speed.
- Toggle between light and dark modes.
- Responsive design for various devices (desktop, tablet, mobile).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: For styling the application.

## Installation and Running the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/avinash-18-art/Kraftshala_Frontend-Intern_Avinash.git
   cd weather-app
   ```

# Approach

# Component-Based Architecture:

- The application is divided into reusable components to maintain a clean codebase. Main components include App for the layout and theme toggle, and Weather for fetching and displaying weather data.

# State Management:

- React's useState hook is used to manage the state of the location input, weather data, error messages, and dark mode. API Integration:

- Axios is used to make HTTP requests to the Open Weather API to fetch current weather data based on the user's input.

# Styling:

- CSS is used for styling the application, with separate styles for light and dark modes to enhance user experience. Known Issues or Limitations

# API Key Restriction:

- Ensure you have a valid API key from Open Weather. Free API keys have rate limits which might restrict the number of requests.

# Error Handling:

- The application provides basic error handling for invalid locations and network errors. Further enhancements can be made for more robust error feedback.

# Feature Limitations:

- The application currently fetches and displays weather information for one location at a time. Future versions could support displaying weather for multiple locations simultaneously. Future Enhancements

# Additional Weather Information:

- Display more detailed weather data such as hourly forecasts, weekly forecasts, and weather maps.

# User Preferences:

- Save user preferences for the dark/light mode and default location using local storage.

# Improved UI/UX:

- Enhance the user interface and experience with more interactive and visually appealing components.

## Project Structure:

weather-app/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ │ ├── Weather.js │ │ ├── Weather.css │ ├── App.js │ ├── App.css │ ├── index.js │ ├── index.css ├── .gitignore ├── package.json ├── README.md └── yarn.lock
