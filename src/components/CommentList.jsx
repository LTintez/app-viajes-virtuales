import React from 'react';

const CommentList = () => {
    // Lista de comentarios estáticos
    const comments = [
        {
            username: "Juan Pérez",
            location: "Buenos Aires, Argentina",
            review: "Increíble experiencia en esta ciudad, me encantó cada momento."
        },
        {
            username: "Emily Smith",
            location: "London, UK",
            review: "Una ciudad fascinante, llena de historia y cultura."
        },
        {
            username: "Liu Wei",
            location: "Beijing, China",
            review: "La comida fue lo mejor del viaje, definitivamente un lugar para regresar."
        },
        {
            username: "Marta González",
            location: "Madrid, España",
            review: "Las vistas son espectaculares, especialmente al atardecer."
        },
        {
            username: "David Johnson",
            location: "New York, USA",
            review: "Un lugar vibrante con mucho que ofrecer, me encantaría volver."
        }
    ];

    return (
        <div className="mt-8 p-4 bg-[#F5F5F5] rounded-lg">
            <h3 className="text-2xl font-bold text-[#071952] mb-4">Reseñas</h3>
            <ul className="space-y-4">
                {comments.map((comment, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <div className="mb-2">
                            <span className="font-semibold">{comment.username}</span> 
                            <span className="text-sm text-gray-500"> - {comment.location}</span>
                        </div>
                        <p className="text-gray-700">{comment.review}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
