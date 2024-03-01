import './App.css';
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        . catch ((err) => {
      console.error("Error fetching countries:", err);
    })
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
  );
}