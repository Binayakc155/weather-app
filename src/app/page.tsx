// src/app/page.tsx
"use client";

import { useState } from "react";
import { fetchWeather, WeatherData } from "@/utils/fetchWeather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("❌ An unknown error occurred.");
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App 🌦️</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border rounded p-2 text-black"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="p-4 border rounded bg-gray-100 text-black">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ Temp: {weather.main.temp}°C</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </main>
  );
}
