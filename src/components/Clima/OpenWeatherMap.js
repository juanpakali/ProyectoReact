import React, { useState, useEffect } from 'react';
import Spinner from '../Utils/Spinner';
import { getWeatherData } from '../WheaterApi/ClimaApi';

let urlImg = "https://static.vecteezy.com/system/resources/thumbnails/024/984/124/small/3d-weather-forecast-icons-summer-sun-with-thunderstorm-and-strong-wind-3d-illustration-png.png"

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(19.42847, -99.12766);
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(weatherData);

  if (!weatherData) {
    return <Spinner />;
  }

  return (
    <div className="navBar">
      <div className="clima-dia">
        <a className="clima-text">Hoy</a>
      </div>
      <div className="navBar2">
        <img className="img-clima" src={urlImg} />
        <div className="container-clima-city">
          <a className="text-Grados">{weatherData.name}</a>
          <a className="text-Grados">{(weatherData.main.temp - 273.15).toFixed(1)}°C</a>
          <div>
            <a className="text-Grados-temp">{(weatherData.main.temp_min - 273.15).toFixed(1)}°C -</a>
            <a className="text-Grados-temp"> {(weatherData.main.temp_max - 273.15).toFixed(1)}°C</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
