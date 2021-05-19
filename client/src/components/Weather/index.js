import React, { useState, useEffect } from "react";
import axios from 'axios'
import WeatherIcon from "../WeatherIcon";
import { useSelector, useDispatch } from "react-redux";
import {MarkerModal, MapSearch} from '../MarkerModal'
import {Holiday} from '../../pages'
import { loadHoliday, addMarker } from "../../actions";
import { useSocket } from "../../customHooks";

import { useParams } from "react-router-dom";
// const apiKey = "d4ef3671c18ff18482439536bbb0fa40";

function Weather() {
  const [city, setCity] = useState("");
   const { id, holiday, markers } = useParams();
   useSocket(id);
  // const [markerLocation, setMarkerLocation] = useState(['',''])

  // const markers = useSelector((state) => state.markers);
  // const [position, setPosition] = useState([])
  const [weatherData, setWeatherData] = useState("")

  // useEffect(() => {
  //   if (markers.length > 0) {
  //     setPosition([ markers[0].position[0], markers[0].position[1] ])
  //   }
  // },[markers])

  // useEffect(() => {
  //   if (position.length > 0 && weatherData === null) {
  //   async function fetchWeather(){
  //     let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&units=metric&appid=${apiKey}`;
  //     const { data } = await axios.get(geoApiUrl)
  //     return data
  //     }
  //     setWeatherData(fetchWeather())
  //     console.log(weatherData)
  //   }
  // },[position])

 
 
  const title = useSelector((state) => state.markers.title);
  
  const dispatch = useDispatch();
     dispatch(loadHoliday(id, holiday, markers));
     dispatch(addMarker());
     console.log(holiday);


console.log(title)


  const apiKey = "0332bea479abd00765b838a8f968ed52";



  function search() {
  //   let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
  search()
  //   setCity(title)
  }

  function updateCity(event) {
    event.preventDefault();
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
  // search();
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
        Current weather in {weatherData.city} is {weatherData.description}{" "}
        {weatherData.temperature}°{" "}
        <WeatherIcon code={weatherData.icon} alt={weatherData.description} />
        hello!
      </p>
    </div>
  );
}

export default Weather;