import React, { useState, useEffect } from "react";
import axios from 'axios'
import WeatherIcon from "../WeatherIcon";
import { useSelector, useDispatch } from "react-redux";
import {MarkerModal, MapSearch} from '../MarkerModal'
import {Holiday} from '../../pages'

function Weather() {
  const [city, setCity] = useState("");
  const [markerLocation, setMarkerLocation] = useState(['',''])

  const markers = useSelector((state) => state.markers);
  const [position, setPosition] = useState([])
  const [weatherData, setWeatherData] = useState("")

  const apiKey = "0332bea479abd00765b838a8f968ed52";

  // useEffect(() => {
  //   if (markers.length > 0) {
  //     setPosition([ markers[0].position[0], markers[0].position[1] ])
  //   }
  // },[markers])

  // useEffect(() => {
  //   if (position.length > 0 && weatherData === null) {
  //   async function fetchWeather(){
  //     let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&units=metric&appid=${apiKey}`;
  //     const { data } = await axios.get(geoApiUrl).then(getWeather)
  //     console.log(data)
  //     }
  //     fetchWeather()
  //     // setWeatherData(fetchWeather())
  //     // console.log(weatherData)
  //   }
  // },[position])

 
 
//   const title = useSelector((state) => state.markers.title);
// console.log(lat)
// console.log(long);
// console.log(title)

  

  // const location = useSelector((state) => state.markers)
  // console.log(location)

  function search() {
    // let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
   
  }

  function updateCity(event) {
    event.preventDefault();
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function getWeather(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
    console.log(temperature);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
          
        />
        <input type="submit" value="Search" />
      </form>
      <p>
        Current weather in {weatherData.city} is {weatherData.description}
        {weatherData.temperature}°{" "}
        <WeatherIcon code={weatherData.icon} alt={weatherData.description} />
        hello!
      </p>
    </div>
  );
}

export default Weather;