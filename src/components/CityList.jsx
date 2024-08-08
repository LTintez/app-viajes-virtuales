import './CityList.css'
import React from 'react'
import PropTypes from 'prop-types'
import CityItem from './CityItem'


const CityList = ({city}) => {
  console.log(city)
  return (
    <article>
      <h2 className="main-title" >Destinos</h2>
      <div className="card-container">
          {city.map(cityItem => (
              <CityItem key={cityItem.id} {...cityItem} />
          ))}
      </div>
    </article>
  )
}

CityList.propTypes = {
  city: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CityList