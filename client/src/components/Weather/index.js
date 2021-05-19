import React, { useState, useEffect } from "react";
import axios from 'axios'
import WeatherIcon from "../WeatherIcon";
import { useSelector, useDispatch } from "react-redux";
import {MarkerModal, MapSearch} from '../MarkerModal'
import {Holiday} from '../../pages'
const apiKey = "d4ef3671c18ff18482439536bbb0fa40";

function Weather() {
  const [city, setCity] = useState("");
  const [markerLocation, setMarkerLocation] = useState(['',''])

  const markers = useSelector((state) => state.markers);
  const [position, setPosition] = useState([])
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (markers.length > 0) {
      setPosition([ markers[0].position[0], markers[0].position[1] ])
    }
  },[markers])

  useEffect(() => {
    if (position.length > 0 && weatherData === null) {
    async function fetchWeather(){
      let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&units=metric&appid=${apiKey}`;
      const { data } = await axios.get(geoApiUrl)
      setWeatherData(fetchWeather())
      console.log(data)
      }
      
    }
  },[position])

 
 
//   const title = useSelector((state) => state.markers.title);
// console.log(lat)
// console.log(long);
// console.log(title)

  const apiKey = "d4ef3671c18ff18482439536bbb0fa40";



  // function search() {
  //   let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  //   // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  //   axios.get(geoApiUrl).then(getWeather);
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  
  //   setCity(title)
  // }

  // function updateCity(event) {
  //   event.preventDefault();
  //   setCity(event.target.value);
  // }

  // function getWeather(response) {
  //   setWeatherData({
  //     temperature: Math.round(response.data.main.temp),
  //     icon: response.data.weather[0].icon,
  //     city: response.data.name,
  //     description: response.data.weather[0].description,
  //   });
  //   console.log(temperature);
  // }
  // search();
  return (
    null
  );
}

export default Weather;