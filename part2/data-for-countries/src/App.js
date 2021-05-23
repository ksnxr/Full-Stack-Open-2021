import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'


const App = () => {

  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState(false)
  const [filter, setFilter] = useState('')
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response => {
        setCountries(response.data)
      })
  }, [])
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setCountryName(false)
  }

  let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  if (filteredCountries.length === 1) {
    return (
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <h3>Numbers</h3>
        <Country country={filteredCountries[0]} api_key={api_key} />
      </div>
    )
  }
  if (filteredCountries.length > 10) {
    filteredCountries = []
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Numbers</h3>
      <Countries countries={filteredCountries} countryName={countryName} setCountryName={setCountryName} api_key={api_key} />
    </div>
  )
}

export default App