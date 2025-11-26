function CountryFilter({ filterByName, handleFilterByName, filterByContinent, handleFilterByContinent, handleSubmit }) {    
  return (
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
  );
}

export default CountryFilter;