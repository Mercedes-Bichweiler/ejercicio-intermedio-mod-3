import "../styles/App.scss";

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
];


function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Country Info App</h1>
        <p className="title">Explore information about countries, capitals, and flags. Add new countries and filter through the list.</p>
      </header>
      <main className="main"></main>
    </div>
  );
}

export default App;
