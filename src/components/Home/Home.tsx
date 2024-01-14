import './home.css'
import myface from '../../assets/my-face.jpg';
import { Link } from 'react-router-dom'
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

export const Home = () => {
  return (
    <section className="hero-section">
      <div className="left-hero-section">
        <span className="hello">Hello</span>
        <br />
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
            <PiSuitcaseSimpleBold className="suitecase" />
            Hire Me
          </button>
        </Link>
      </div>
      <div className='div-myface'>
        <img
          src={myface}
          alt="photo Léandro Da Silva"
          className="right-hero-section"
        />
      </div>
    </section>
  );
}
