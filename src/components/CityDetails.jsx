import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import citiesData from '../data/cities.json';
import { FaArrowLeft } from 'react-icons/fa';

const CityDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const city = citiesData.find(city => city.id === parseInt(id));

    if (!city) {
        return <div className="p-4 text-red-500">No city found</div>;
    }

    return (
        <div className="p-4 bg-[#FFFFFF] flex flex-col gap-4">
            <div className="flex gap-4">
                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#071952] mb-2">{city.titulo}</h3>
                    <p className="text-lg">{city.descripcion}</p>
                </div>
                <div className="flex-none w-1/3">
                    {/* Aca se va a insertar la imagen */}
                </div>
            </div>
            <button
                onClick={() => navigate('/destinations')}
                className="self-start mt-4 p-2 flex items-center gap-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                <FaArrowLeft />
                Volver
            </button>
        </div>
    );
};

export default CityDetails;
