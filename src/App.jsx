import React, { useState } from 'react'
import './App.css'
import countriesJson from "./countries.json"
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import {Route, Routes} from 'react-router-dom'
import CountryDetails from './components/CountryDetails'

function App() {

  const [countriesState, setCountriesState] = useState(countriesJson)

  return (
    <div className="App">
    <Navbar />  
      {countriesState.map((eachCountry) => {
        return(
          <div key={eachCountry.alpha3Code}><CountriesList eachCountry={eachCountry} /></div> 
        )
      })}
      <Routes>
        <Route path="/:countryCode" element={<CountryDetails />} />
      </Routes>
    </div>
  )    
}

export default App
