import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CountriesList() {

  const [listOfCountries, setListOfCountries] = useState([])

  const getCountries = async () => {
    const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
    //console.log(response)
    setListOfCountries(response.data)
  }
    
  useEffect(() => {
    getCountries()
  }, [])


  return (
    <div>
        {listOfCountries.map((eachCountry, index) => {
          return (
            <div key={index+eachCountry.alpha3Code} className="countriesListRow">
              <img className="flagImg" src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}/>
              <Link to={`${eachCountry.alpha3Code}`}>
                {eachCountry.name.common}
              </Link>
            </div>
          )
        })}
    </div>
    
  )
}

export default CountriesList


