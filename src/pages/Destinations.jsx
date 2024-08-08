import React, { useState, useEffect } from 'react';
import cities from '../data/cities.json';
import CityList from '../components/CityList';
import SearchBar from '../components/SearchBar';

const Destinations = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities);
  }, []);

  const handleSearch = (searchTerm) => {
    let filtered;
    if (searchTerm.length > 0) {
      filtered = cities.filter((city) =>
        city.name && city.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filtered = cities;
    }
    setFilteredCities(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CityList filteredCities={filteredCities} />
    </div>
  );
};

export default Destinations;