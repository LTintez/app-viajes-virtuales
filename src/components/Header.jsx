import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/" className="hover:text-gray-400">Viajes</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/destinations" className="hover:text-gray-400">Destinos</Link>
                        </li>
                        <li>
                            <Link to="/comments" className="hover:text-gray-400">Comentarios</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400">Acerca de</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header