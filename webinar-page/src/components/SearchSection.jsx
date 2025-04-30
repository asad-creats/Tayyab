import React, { useState } from 'react';

function SearchSection({ onSearch }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const countries = {
    USA: ['New York', 'Los Angeles'],
    UAE: ['Dubai', 'Abu Dhabi'],
    Pakistan: ['Karachi', 'Lahore'],
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(selectedCountry, selectedCity);
    }
  };

  return (
    <div className="search-section">
      <div className="search-container">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {Object.keys(countries).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
          <option value="">Select City</option>
          {selectedCountry &&
            countries[selectedCountry].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
        </select>

        <button onClick={handleSearch}>Search Webinars</button>
      </div>
    </div>
  );
}

export default SearchSection;
