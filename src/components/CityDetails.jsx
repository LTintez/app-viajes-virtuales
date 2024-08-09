import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import citiesData from '../data/cities.json';
import { FaArrowLeft } from 'react-icons/fa';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CityDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const city = citiesData.find(city => city.id === parseInt(id));
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || []);

    if (!city) {
        return <div className="p-4 text-red-500">No city found</div>;
    }

    const handleNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <div className="p-4 flex flex-col gap-4 bg-gradient-to-r from-[#EBF4F6] to-[#37B7C3] dark:from-[#1a202c] dark:to-[#2d3748]">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 lg:w-2/3">
                    <h3 className="text-3xl font-bold text-[#071952] mb-4">{city.titulo}</h3>
                    <p className="text-lg text-[#088395] mb-4">{city.descripcion}</p>
                    <p className="text-md mb-6">{city.details}</p>
                </div>
                <div className="flex-none lg:w-1/3">
                    <img src={city.imagen} alt={city.titulo} className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-full lg:mx-0" />
                </div>
            </div>
            {/* Seccion de comentarios */}
            <CommentList comments={comments} />
            <CommentForm onNewComment={handleNewComment} />
            <button
                onClick={() => navigate('/destinations')}
                className="self-start mt-4 p-2 flex items-center gap-2 bg-[#37B7C3] text-white rounded hover:bg-[#088395]"
            >
                <FaArrowLeft />
                Volver
            </button>
        </div>
    );
};

export default CityDetails;
