import React from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails({country}) {
    console.log(country)
    const {countryCode} = useParams()
    const oneCountry = country.filter(el => {
        if (el.alpha3Code === countryCode){
            console.log(el)
            return el
        }
    })
    
  return (
    <div>{oneCountry}</div>
  )
}

export default CountryDetails