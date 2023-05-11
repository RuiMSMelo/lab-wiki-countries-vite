import { useState } from 'react'
import './App.css'
import countriesJson from "./countries.json"
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'

function App() {

  const [countriesState, setCountriesState] = useState(countriesJson)

  return (
    <div className="App">
    <Navbar />  
      {countriesState.map((eachCountry) => {
        return(
          <div><CountriesList eachCountry={eachCountry} /></div> 
        )
      })}
    </div>
  )    
}

export default App
