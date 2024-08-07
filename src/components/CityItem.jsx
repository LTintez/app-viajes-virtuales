import './CityItem.css'
import PropTypes from 'prop-types'

const CityItem = ({ titulo, descripcion, imagen }) => {
    return (
        <section className="card-section">
            <h2 className="card-title">{titulo}</h2>
            <p className="card-description">{descripcion}</p>
            <picture>
                <img className="card-img" src={imagen} alt={titulo} />
            </picture>
        </section>
    )
}

CityItem.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
    imagen: PropTypes.string
}

export default CityItem