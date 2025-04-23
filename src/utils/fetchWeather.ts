// src/utils/fetchWeather.ts
export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function fetchWeather(city: string): Promise<WeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}}&units=metric`
  );

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData.message || 'Unknown API error';
    throw new Error(`❌ API says: ${message}`);
  }

  return res.json();
}
