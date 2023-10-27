import { useEffect, useState } from "react"
import countriesService from '../services/countries'

const Weather = ({ countriesToDisplay }) => {
    const city = countriesToDisplay.map((c) => c.capital[0])
    const [forecast, setForecast] = useState([])
    console.log(city)
    useEffect(() => {
        countriesService
            .getWeather(city)
            .then(initialForecast => {
                setForecast(initialForecast)
            })
    }, [])
    console.log(forecast)
    return (
        <div>{forecast.main ? (
            <div>
                <h3>Weather in {city}: </h3>
                <p>Temperature: {Math.round(forecast.main.temp - 273.15)}°C</p>
                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} />
                <p>{forecast.weather[0].description}</p>
                <p>Wind speed: {forecast.wind.speed}m/s</p>
            </div>
        ) : null}
        </div>
    )
}
export default Weather