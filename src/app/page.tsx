"use client";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
interface Weather {
  city_name: string;
  country_code: string;
  temp: number;
  weather: {
    description: string;
  };
  wind_spd: number;
  rh: number;
  precip: number;
  elev_angle: number;
}
export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const handleSearch = (city: string) => {
    setCity(city);
  };
  useEffect(() => {
    const fetchWeather = async () => {
      if (city.trim() === "") {
        return;
      }
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?City=${city}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      const weatherData = data.data[0];
      setWeather(weatherData);
    };
    fetchWeather();
  }, [city]);
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen px-4">
      <SearchBar onSearch={handleSearch} />
      {weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <div>Search for any location</div>
      )}
    </div>
  );
}
