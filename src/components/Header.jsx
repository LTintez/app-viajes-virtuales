import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaPlane, FaComments, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[#071952] text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/" className="hover:text-gray-400">VIAJES</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-400 flex items-center">
                                <FaHome className="mr-1" /> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/destinations" className="hover:text-gray-400 flex items-center">
                                <FaPlane className="mr-1" /> Destinos
                            </Link>
                        </li>
                        <li>
                            <Link to="/comments" className="hover:text-gray-400 flex items-center">
                                <FaComments className="mr-1" /> Comentarios
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400 flex items-center">
                                <FaInfoCircle className="mr-1" /> Acerca de
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header