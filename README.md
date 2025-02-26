# SkyCast - Weather Dashboard

SkyCast is a sleek and interactive weather dashboard built using **React, Vite, Tailwind CSS, and OpenWeatherMap API**. It features custom themes, unit selection, and a dynamic UI that enhances the weather experience.

## 🌟 Features

- **🌍 Real-time Weather Data**: Fetches weather details using OpenWeatherMap API.
- **🎨 Custom Themes**: Choose from "Default", "Sunny", "Rainy", "Snowy", and "Night" themes (saved in localStorage).
- **🌡️ Temperature Unit Selector**: Toggle between Celsius (°C) and Fahrenheit (°F).
- **🔎 Search Functionality**: Look up the weather of any city worldwide.
- **⚡ Fast and Responsive UI**: Built with Tailwind CSS for a clean, mobile-friendly design.
- **🛠️ Persistent Settings**: Theme and unit preferences are saved for a personalized experience.

---

## 🚀 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **API**: OpenWeatherMap
- **State Management**: React Context API


---

## 📂 Project Structure

```
SkyCast/
│── public/
│   ├── logo.png
│── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   ├── Weather/
│   │   │   ├── Weather.jsx
│   ├── ThemeContext.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Settings.jsx
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── package.json
|── package-lock.json
│── README.md
```

---

## 🛠 Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/HenokCodez/skycast.git
   cd skycast
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up OpenWeatherMap API key**

   - Create a `.env` file in the root directory and add:
     ```env
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the app**
   ```sh
   npm run dev
   ```

---

## 📌 Components Breakdown

### 🏠 Home Page (`Home.jsx`)

- **SearchBar Component**: Allows users to enter a city name.
- **Weather Component**: Displays real-time weather details.
- **Navigation**: Includes a settings icon to modify preferences.

### ⚙️ Settings Page (`Settings.jsx`)

- **Theme Selector**: Users can choose different UI themes.
- **Unit Selector**: Switch between Celsius and Fahrenheit.
- **Navigation**: Includes a home icon for returning to the main page.

### 🔍 SearchBar Component (`SearchBar.jsx`)

- Provides an input field for searching a city's weather.
- Includes a search button with interactive hover effects.

### ☁️ Weather Component (`Weather.jsx`)

- Fetches and displays real-time weather data (temperature, humidity, wind speed).
- Uses OpenWeatherMap's API and dynamically updates based on user input.
- Displays weather icons according to the conditions.

### 🎨 Theme Context (`ThemeContext.js`)

- Manages global state for theme selection and temperature units.
- Stores settings in localStorage to persist user preferences.

### 📜 Global Styles (`App.css`)

- Defines background and text styles for different themes.
- Applies smooth transitions for UI enhancements.

---

## 🚀 Future Improvements

- **🌎 Interactive Weather Map** using Leaflet.js or Google Maps API.
- **📅 7-Day Weather Forecast** for an extended weather outlook.
- **🛰️ Geolocation Feature** for automatic weather updates based on user location.

---

## 🎯 Contributing

Want to contribute? Feel free to fork the project and submit a PR!

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m 'Add new feature'`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Submit a pull request** 🚀

---

## 📄 License

This project is licensed under the **MIT License**.

---

### 📬 Contact

If you have any questions, feel free to reach out!

- **GitHub**: [HenokCodez](https://github.com/HenokCodez)
- **Email**: henokbinayew21@gmail.com

Enjoy using **SkyCast**! ☁️🌞🌧️❄️🌙
