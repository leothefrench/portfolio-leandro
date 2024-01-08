import './hero.css'
import myface from '../../assets/my-face.jpg';
import { Link } from 'react-router-dom'
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="left-hero-section">
        <span className="hello">Hello, </span>
        <span className="title">
          Je suis<span className="title-name"> Léandro</span>
          <br />
          Développeur Web Front-End
        </span>
        <p className="skill">
          Je suis passsioné par le développement de site web avec
          <br /> l'utilisation de la sainte trinité du web, HTML, CSS, JS et
          React
        </p>
        <Link to="/">
          <button className="btn-hireMe">
            <PiSuitcaseSimpleBold className="suitacase" />
            Hire Me
          </button>
        </Link>
      </div>
      <img
        src={myface}
        alt="photo Léandro Da Silva"
        className="right-hero-section"
      />
    </section>
  );
}