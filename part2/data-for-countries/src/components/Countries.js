import React from 'react'
import Country from './Country'


const Countries = ({ countries, countryName, setCountryName, api_key }) => {

  const handleShow = (name) => {
    setCountryName(name)
  }

  if (countryName) {
    const country = countries.filter((country) => country.name === countryName)[0]
    return (
      <div>
        <Country country={country} api_key={api_key}/>
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country =>
          <div key={country.alpha3Code}>
            {country.name}
            <button onClick={() => handleShow(country.name)}>show</button>
          </div>
        )
        }
      </div>
    )
  }
}

export default Countries