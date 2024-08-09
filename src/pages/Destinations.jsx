import CityList from '../components/CityList';
import SearchBar from '../components/SearchBar';
import cities from '../data/cities.json';
import React, { useState, useEffect } from 'react';

const Destinations = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities);
  }, []);

  const handleSearch = (searchTerm) => {
    let filtered;
    if (searchTerm.length > 0) {
      filtered = cities.filter((city) => 
        city.titulo && city.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filtered = cities;
    }
    setFilteredCities(filtered);
  };

  return (
    <div>
      <h1 className="main-title">Destinos</h1>
      <SearchBar onSearch={handleSearch} />
      <CityList filteredCities={filteredCities} />
    </div>
  );
};

export default Destinations;