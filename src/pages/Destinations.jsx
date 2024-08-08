import cities from '../data/cities.json'
import CityList from '../components/CityList'


const Destinations = () => {
  return (
    <CityList city={cities} />
  )
}

export default Destinations