import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa';
import './Footer.css';  // Importa el archivo CSS aquí

const sections = [
  {
    title: 'Viajes',
    items: ['Aventura', 'Playa', 'Montaña', 'Ciudades', 'Cruceros']
  },
  {
    title: 'Destinos',
    items: ['Europa', 'América', 'Asia', 'África', 'Oceanía']
  }
];

const items = [
  {
    name: 'FaGithub',
    icon: FaGithub,
    link: 'https://github.com/LTintez/app-viajes-virtuales'
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: '#'
  },
  {
    name: 'FaInstagram',
    icon: FaInstagram,
    link: '#'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: '#'
  }
];

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-[#071952] text-[#EBF4F6] py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 border-b-2 border-[#088395] py-8">
        <div className="col-span-1 md:col-span-3">
          <h6 className="font-bold uppercase pt-2">VIAJES</h6>
          <ul>
            {['Aventura', 'Playa', 'Montaña', 'Ciudades', 'Cruceros'].map((item, i) => (
              <li key={i} className="py-1 hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-3">
          <h6 className="font-bold uppercase pt-2">DESTINOS</h6>
          <ul>
            {['Europa', 'América', 'Asia', 'África', 'Oceanía'].map((item, i) => (
              <li key={i} className="py-1 hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-6">
          <h6 className="font-bold uppercase pt-2">¡SUSCRIBITE A NUESTRO NEWSLETTER!</h6>
          <p className="py-4">
            Las últimas actualizaciones, destinos, recursos y mucho más se enviará a tu casilla de mail.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input type="email" className="w-full p-2 mr-0 sm:mr-4 rounded-md mb-4" placeholder="Ingresa tu dirección de email" />
            <button className="p-2 mb-4 bg-[#37B7C3] text-[#EBF4F6] rounded-md hover:bg-[#088395] hover:text-[#EBF4F6] transition duration-300">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center items-center">
        <p className="py-4 text-gray-500">
          Trabajo Final de React - Desarrollado por: Nancy Cima - Lautaro Tintez
        </p>

        <div className="flex justify-between w-[200px] pt-4 text-2xl">
          {[FaGithub, FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
            <Icon key={index} className="hover:text-[#37B7C3] cursor-pointer" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
