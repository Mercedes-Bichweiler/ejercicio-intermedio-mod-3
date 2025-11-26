function CountryList({ filteredCountries = [] }) {
  return (
    <ul className="country-list">
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country, index) => (
          <li key={index} className="country-item">
            <h2 className="country-name">{country.name.common}</h2>
            <p className="country-capital">
              Capital: {country.capital && country.capital[0]}
            </p>
            <p className="country-flag">Flag: {country.flag}</p>
            <p className="country-continent">Continent: {country.continent}</p>
          </li>
        ))
      ) : (
        <li className="country-item">No se han encontrado países</li>
      )}
    </ul>
  );
}

export default CountryList;
