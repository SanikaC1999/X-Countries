import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    try {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => setCountries(data));
    } catch (error) {
      console.error("API failure" ,error);
    }
  }, []);

  return (
    <div className="App">
      {countries.map((country) => (
        <div className="countrys" key={country.name}>
          <img src={country.flags.png} alt={country.name} />
          <h6>{country.name}</h6>
        </div>
      ))}
    </div>
  )
}

export default App;