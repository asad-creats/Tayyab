function SearchSection() {
    return (
      <div className="search-section">
        <div className="search-container">
          <select>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UAE">UAE</option>
            <option value="Pakistan">Pakistan</option>
          </select>
  
          <select>
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Dubai">Dubai</option>
            <option value="Karachi">Karachi</option>
          </select>
  
          <button>Search Webinars</button>
        </div>
      </div>
    );
  }
  
  export default SearchSection;
  