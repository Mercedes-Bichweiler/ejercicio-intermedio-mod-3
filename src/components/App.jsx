import "../styles/App.scss";
import { useState } from "react";

const inicialCountries = [
  {
    "name": {
      "common": "Bhutan",
      "official": "Kingdom of Bhutan",
      "nativeName": {
        "dzo": {
          "official": "འབྲུག་རྒྱལ་ཁབ་",
          "common": "འབྲུག་ཡུལ་"
        }
      }
    },
    "capital": [
      "Thimphu"
    ],
    "flag": "🇧🇹"
  },
  {
    "name": {
      "common": "Italy",
      "official": "Italian Republic",
      "nativeName": {
        "ita": {
          "official": "Repubblica italiana",
          "common": "Italia"
        }
      }
    },
    "capital": [
      "Rome"
    ],
    "flag": "🇮🇹"
  },
  {
    "name": {
      "common": "Tuvalu",
      "official": "Tuvalu",
      "nativeName": {
        "eng": {
          "official": "Tuvalu",
          "common": "Tuvalu"
        },
        "tvl": {
          "official": "Tuvalu",
          "common": "Tuvalu"
        }
      }
    },
    "capital": [
      "Funafuti"
    ],
    "flag": "🇹🇻"
  },
  {
    "name": {
      "common": "Anguilla",
      "official": "Anguilla",
      "nativeName": {
        "eng": {
          "official": "Anguilla",
          "common": "Anguilla"
        }
      }
    },
    "capital": [
      "The Valley"
    ],
    "flag": "🇦🇮"
  },
  {
    "name": {
      "common": "Australia",
      "official": "Commonwealth of Australia",
      "nativeName": {
        "eng": {
          "official": "Commonwealth of Australia",
          "common": "Australia"
        }
      }
    },
    "capital": [
      "Canberra"
    ],
    "flag": "🇦🇺"
  },
  {
    "name": {
      "common": "Belize",
      "official": "Belize",
      "nativeName": {
        "bjz": {
          "official": "Belize",
          "common": "Belize"
        },
        "eng": {
          "official": "Belize",
          "common": "Belize"
        },
        "spa": {
          "official": "Belice",
          "common": "Belice"
        }
      }
    },
    "capital": [
      "Belmopan"
    ],
    "flag": "🇧🇿"
  },
   {
    "name": {
      "common": "Belarus",
      "official": "Republic of Belarus",
      "nativeName": {
        "bel": {
          "official": "Рэспубліка Беларусь",
          "common": "Белару́сь"
        },
        "rus": {
          "official": "Республика Беларусь",
          "common": "Беларусь"
        }
      }
    },
    "capital": [
      "Minsk"
    ],
    "flag": "🇧🇾"
  },
  {
    "name": {
      "common": "Mauritius",
      "official": "Republic of Mauritius",
      "nativeName": {
        "eng": {
          "official": "Republic of Mauritius",
          "common": "Mauritius"
        },
        "fra": {
          "official": "République de Maurice",
          "common": "Maurice"
        },
        "mfe": {
          "official": "Republik Moris",
          "common": "Moris"
        }
      }
    },
    "capital": [
      "Port Louis"
    ],
    "flag": "🇲🇺"
  },
];


function App() {

  const [countries, setCountries] = useState(inicialCountries);

  const [filterByName, setFilterByName] = useState("");


  return (
    <div>
      <header className="header">
        <h1 className="title">Country Info App</h1>
        <p className="title">Explore information about countries, capitals, and flags. Add new countries and filter through the list.</p>
      </header>
      <main className="main">
        <section>
          <p>Filters</p>
          <form className="form-filters">
            <label htmlFor="filter-country">By Country</label>
            <input type="text" name="filter-country" id="filter-country" className="input" placeholder="Belize"/>
            <label htmlFor="filter-continent">By Continent</label>
          </form>
        </section>
        <section>
          <ul className="country-list">
            {countries.map((country, index) => (
              <li key={index} className="country-item">
                <h2 className="country-name">{country.name.common}</h2>
                <p className="country-capital">Capital: {country.capital[0]}</p>
                <p className="country-flag">Flag: {country.flag}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
