import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({eachCountry}) {
    const flagCode = (eachCountry.alpha2Code).toString().toLowerCase()
    const flagUrlOne = "https://flagpedia.net/data/flags/icon/72x54/"
    const flagUrlTwo = flagCode
    const flagUrlThree = ".png/"
    const flagUrl = flagUrlOne+flagUrlTwo+flagUrlThree

  return (
    <div className='countriesListRow'>
        <Link to={`${eachCountry.alpha3Code}`} country={eachCountry}> {eachCountry.name.common} </Link>
        <img className='flagImg' src={flagUrl} /> 
    </div>
    
  )
}

export default CountriesList