import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({ country, api_key }) => {
    const [weather, setWeather] = useState(false)

    useEffect(() => {
        const urlAddress = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + country.capital
        axios
            .get(urlAddress).then(response => {
                setWeather(response.data.current)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (weather) {
        return (
            <div>
                <h2>{country.name}</h2>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
                <h3>Spoken languages</h3>
                <ul>
                    {
                        country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)
                    }
                </ul>
                <img className='country' src={country.flag} alt='country flag'></img>
                <h3>Weather in {country.capital}</h3>
                <div><b>temperature:</b> {weather.temperature} Celcius</div>
                <img className='weather' src={weather.weather_icons[0]} alt='weather icon'></img>
                <div><b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>{country.name}</h2>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
                <h3>Spoken languages</h3>
                <ul>
                    {
                        country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)
                    }
                </ul>
                <img className='country' src={country.flag} alt='country flag'></img>
            </div>)
    }
}

export default Country