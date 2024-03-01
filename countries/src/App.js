import './App.css';
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => setCountries(data))
        . catch ((error) => {
      console.error(error);
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