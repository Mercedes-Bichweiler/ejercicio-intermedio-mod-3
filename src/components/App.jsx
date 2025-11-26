// ...existing code...
import "../styles/App.scss";
import { useState } from "react";

const inicialCountries = [
  {
    "name": { "common": "Bhutan", "official": "Kingdom of Bhutan", "nativeName": { "dzo": { "official": "འབྲུག་རྒྱལ་ཁབ་", "common": "འབྲུག་ཡུལ་" } } },
    "capital": [ "Thimphu" ],
    "flag": "🇧🇹"
  },
  {
    "name": { "common": "Italy", "official": "Italian Republic", "nativeName": { "ita": { "official": "Repubblica italiana", "common": "Italia" } } },
    "capital": [ "Rome" ],
    "flag": "🇮🇹"
  },
  {
    "name": { "common": "Tuvalu", "official": "Tuvalu", "nativeName": { "eng": { "official": "Tuvalu", "common": "Tuvalu" }, "tvl": { "official": "Tuvalu", "common": "Tuvalu" } } },
    "capital": [ "Funafuti" ],
    "flag": "🇹🇻"
  },
  {
    "name": { "common": "Anguilla", "official": "Anguilla", "nativeName": { "eng": { "official": "Anguilla", "common": "Anguilla" } } },
    "capital": [ "The Valley" ],
    "flag": "🇦🇮"
  },
  {
    "name": { "common": "Australia", "official": "Commonwealth of Australia", "nativeName": { "eng": { "official": "Commonwealth of Australia", "common": "Australia" } } },
    "capital": [ "Canberra" ],
    "flag": "🇦🇺"
  },
  {
    "name": { "common": "Belize", "official": "Belize", "nativeName": { "bjz": { "official": "Belize", "common": "Belize" }, "eng": { "official": "Belize", "common": "Belize" }, "spa": { "official": "Belice", "common": "Belice" } } },
    "capital": [ "Belmopan" ],
    "flag": "🇧🇿"
  },
  {
    "name": { "common": "Belarus", "official": "Republic of Belarus", "nativeName": { "bel": { "official": "Рэспубліка Беларусь", "common": "Белару́сь" }, "rus": { "official": "Республика Беларусь", "common": "Беларусь" } } },
    "capital": [ "Minsk" ],
    "flag": "🇧🇾"
  },
  {
    "name": { "common": "Mauritius", "official": "Republic of Mauritius", "nativeName": { "eng": { "official": "Republic of Mauritius", "common": "Mauritius" }, "fra": { "official": "République de Maurice", "common": "Maurice" }, "mfe": { "official": "Republik Moris", "common": "Moris" } } },
    "capital": [ "Port Louis" ],
    "flag": "🇲🇺"
  }
];

function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const [countries, setCountries] = useState(inicialCountries);
  const [filterByName, setFilterByName] = useState("");

  const handleFilterByName = (ev) => {
    setFilterByName(ev.target.value);
  }

  const filteredCountrys = countries.filter((eachCountry) =>
    eachCountry.name.common.toLowerCase().includes(filterByName.toLowerCase())
  );

  console.log(filterByName);
  console.log(filteredCountrys);

  return (
    <div>
      <header className="header">
        <h1 className="title">Country Info App</h1>
        <p className="title">Explore information about countries, capitals, and flags. Add new countries and filter through the list.</p>
      </header>
      <main className="main">
        <div className="forms">
          <section className="section-form">
            <p>Filters</p>
            <form onSubmit={handleSubmit} className="form-filters">
              <label htmlFor="filter-country">By Country</label>
              <input
                type="text"
                name="filter-country"
                id="filter-country"
                className="input"
                placeholder="Belize"
                value={filterByName}
                onChange={handleFilterByName}
              />
              <label htmlFor="filter-continent">By Continent</label>
              <select name="filter-continent" id="filter-continent" className="input">
                <option value="">All</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
              </select>
            </form>
          </section>

          <section className="section-form">
            <p>Add Country</p>
            <form className="form-add">
              <input type="text" name="country" id="country" placeholder="Country Name" />
              <input type="text" name="capital" id="capital" placeholder="Capital" />
              <input type="text" name="flag" id="flag" placeholder="Flag" />
              <input type="text" name="continent" id="continent" placeholder="Continent" />
              {/* Evito recarga cambiando el tipo de botón */}
              <button type="button" className="button-add">Add Country</button>
            </form>
          </section>
        </div>

        <section>
          <ul className="country-list">
            {filteredCountrys.length > 0 ? (
              filteredCountrys.map((country, index) => (
                <li key={index} className="country-item">
                  <h2 className="country-name">{country.name.common}</h2>
                  <p className="country-capital">Capital: {country.capital && country.capital[0]}</p>
                  <p className="country-flag">Flag: {country.flag}</p>
                </li>
              ))
            ) : (
              <li className="country-item">No se han encontrado países</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
// ...existing code...