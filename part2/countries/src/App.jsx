import { useEffect, useState } from 'react'
import Search from './components/search'
import countriesService from './services/countries'
import CountryInfo from './components/countryinfo'
import CountryList from './components/countrylist'
import Weather from './components/weather'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesToDisplay, setCountriesToDisplay] = useState([])
  const [query, setQuery] = useState('')


  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])





  return (
    <>
      <div>
        <Search
          countries={countries}
          query={query}
          setQuery={setQuery}
          setCountriesToDisplay={setCountriesToDisplay}
        />
      </div>
      {countriesToDisplay.length === 1 ? (
        <div>
          <CountryInfo
            countriesToDisplay={countriesToDisplay}
          />
          <Weather
            countriesToDisplay={countriesToDisplay}
          />
        </div>
      ) : null}
      {countriesToDisplay.length <= 10 && countriesToDisplay.length > 1 ? (
        <CountryList
          countriesToDisplay={countriesToDisplay}
          setCountriesToDisplay={setCountriesToDisplay}
          setQuery={setQuery}
        />
      ) : countriesToDisplay.length > 10 ? (
        <p>Please refine your search further</p>
      ) : null}
    </>
  )
}

export default App
