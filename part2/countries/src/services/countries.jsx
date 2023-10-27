import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const getWeather = (city) => {
    const VITE_WEATHER_API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY
    const request = axios.get(`${weatherUrl}?q=${city}&appid=${VITE_WEATHER_API_KEY}`)
    return request.then(res => res.data)
}

export default { getAll, getWeather }


