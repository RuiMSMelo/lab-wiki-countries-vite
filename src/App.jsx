import React, { useEffect, useState } from 'react'
import './App.css'
import countriesJson from "./countries.json"
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import {Route, Routes} from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import axios from 'axios'

function App() {

  const [countriesState, setCountriesState] = useState(null)

  useEffect(() => {

    const getData = async () => {
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      setCountriesState(response.data)
    }
    getData()
  }, [])


  return (
    <div className="App">
      <Navbar />  

      <div style={{display: "flex"}}>
        <CountriesList />

        <Routes>
          <Route path='/:alpha3Code' element={<CountryDetails />}/>
        </Routes>
      </div>
    </div>  
  )    
}

export default App
