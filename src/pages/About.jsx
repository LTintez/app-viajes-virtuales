import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importamos los iconos de FontAwesome
import './About.css'

const TeamMember = ({ name, role, descripcion, image, linkedinUrl, githubUrl }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{descripcion}</p>
      <div className="social-links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin-icon" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-icon" />
        </a>
      </div>
    </div>
  );
};

const About = () => {
  const [teamMembers] = useState([
    {
      name: 'Nancy Cima',
      role: 'Data scientist & Técnica en IA',
      descripcion: 'Soy un apasionada por los datos con una sólida formación académica en ciencias de la computación, estadística y matemáticas. Poseo habilidades analíticas y de resolución de problemas que me permiten abordar desafíos complejos con creatividad y precisión. Tengo buenas habilidades de comunicación y trabajo bien tanto en equipo como individualmente. Siempre estoy dispuesta a afrontar nuevos retos, pues, los veo como una oportunidad para profundizar conocimientos.',
      image: 'public\assets\avatarNancy.png',
      linkedinUrl: 'https://www.linkedin.com/in/nancy-lucia-cima/',
      githubUrl: 'https://github.com/NancyCima'
    },
    {
      name: 'Lautaro Tintez',
      role: 'Desarrollador Backend',
      descripcion: 'Desarrollador Backend, con experiencia inicial en el desarrollo de aplicaciones web. Recientemente me gradué como Técnico en Análisis de Sistemas, y estoy dando mis primeros pasos en la industria tecnológica. Me caracterizo por mi enfoque en la resolución de desafíos y la búsqueda de soluciones eficientes en el ámbito del desarrollo de software. Aunque estoy en las primeras etapas de mi carrera, mi capacidad para abordar problemas complejos y aprender rápidamente me ha permitido contribuir de manera significativa en proyectos en los que he participado.' ,
      image: 'jane_smith.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/lautarotintez/',
      githubUrl: 'https://github.com/LTintez'
    }
  ]);

  return (
    <div className="about-page">
      <h1>Acerca de TripTastic</h1>
      <p>
      ¡Bienvenido a TripTastic! Somos la nueva aplicación web que transforma la exploración 
      de destinos turísticos en una experiencia virtual única. Nuestro propósito es ofrecerte 
      una inmersión total y emocionante, permitiéndote descubrir y disfrutar de diferentes 
      lugares del mundo desde la comodidad de tu hogar. 
      ¡Prepárate para una fantastica aventura sin moverte de tu casa!
      </p>
      <img src="assets\computadora.png" alt="computadora con imagenes de viajes" />

      <h2>Nuestro Equipo de Desarrollo</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            descripcion={member.descripcion}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default About;