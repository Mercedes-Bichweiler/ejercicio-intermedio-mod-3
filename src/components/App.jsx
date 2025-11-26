import "../styles/App.scss";
import { useState } from "react";
import CountryList from "./layout/CountryList";
import Header from "./layout/Header";

const inicialCountries = [
  {
    "name": { "common": "Bhutan" },
    "capital": [ "Thimphu" ],
    "flag": "🇧🇹",
    "continent": "Asia"
  },
  {
    "name": { "common": "Italy" },
    "capital": [ "Rome" ],
    "flag": "🇮🇹",
    "continent": "Europe"
  },
  {
    "name": { "common": "Tuvalu" },
    "capital": [ "Funafuti" ],
    "flag": "🇹🇻",
    "continent": "Oceania"
  },
  {
    "name": { "common": "Anguilla" },
    "capital": [ "The Valley" ],
    "flag": "🇦🇮",
    "continent": "Americas"
  },
  {
    "name": { "common": "Australia" },
    "capital": [ "Canberra" ],
    "flag": "🇦🇺",
    "continent": "Oceania"
  },
  {
    "name": { "common": "Belize" },
    "capital": [ "Belmopan" ],
    "flag": "🇧🇿",
    "continent": "Americas"
  },
  {
    "name": { "common": "Belarus" },
    "capital": [ "Minsk" ],
    "flag": "🇧🇾",
    "continent": "Europe"
  },
  {
    "name": { "common": "Mauritius" },
    "capital": [ "Port Louis" ],
    "flag": "🇲🇺",
    "continent": "Africa"
  }
];

function App() {
  const [countries, setCountries] = useState(inicialCountries);
  const [filterByName, setFilterByName] = useState("");
  const [filterByContinent, setFilterByContinent] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleFilterByName = (ev) => {
    setFilterByName(ev.target.value);
  };

  const handleFilterByContinent = (ev) => {
    setFilterByContinent(ev.target.value);
  };

  const filteredCountries = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(filterByName.toLowerCase())
    )
    .filter((c) =>
      filterByContinent ? c.continent === filterByContinent : true
    );

  return (
    <div>
      <Header />
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
              <select
                name="filter-continent"
                id="filter-continent"
                className="input"
                value={filterByContinent}
                onChange={handleFilterByContinent}
              >
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
              <button type="button" className="button-add">Add Country</button>
            </form>
          </section>
        </div>

        <section>
          <CountryList filteredCountries={filteredCountries} />
        </section>
      </main>
    </div>
  );
}

export default App;
