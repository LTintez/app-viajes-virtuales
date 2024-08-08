import './CityList.css';
import './SearchBar.css';
import React from 'react';
import PropTypes from 'prop-types';
import CityItem from './CityItem';

const CityList = ({ filteredCities }) => {
  return (
    <article>
      <h2 className="main-title">Destinos</h2>
      <div className="card-container">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <CityItem key={city.id} {...city} />
          ))
        ) : (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </div>
    </article>
  );
};

CityList.propTypes = {
  filteredCities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CityList;