import './skills.css'
import { Bars } from '../Bars/Bars'
import { ProSkills } from '../ProSkills/ProSkills';

export const Skills = () => {
  return (
    <>
      <section className="section-skills">
        <div className="container-skills" id="skills">
          <h1 className="title-skills">Technical Skills</h1>
          <Bars
            nameSkills="HTML"
            changeClassName="html"
            iconElement={<i className="bx bxl-html5"></i>}
            iconColor="#c95d2e"
          />
          <Bars
            nameSkills="CSS"
            changeClassName="css"
            iconElement={<i className="bx bxl-css3"></i>}
            iconColor="#147bbc"
          />
          <Bars
            nameSkills="JavaScript"
            changeClassName="javascript"
            iconElement={<i className="bx bxl-javascript"></i>}
            iconColor="#b0bc1e"
          />
          <Bars
            nameSkills="React"
            changeClassName="react"
            iconElement={<i className="bx bxl-react"></i>}
            iconColor="#69bcbc"
          />
        </div>

        <div className="container-skills">
          <h1 className="title-skills">Professionnal Skills</h1>
          {/* <div className="radial-bars">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progressive-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Créativité</div>
          </div> */}
          <ProSkills percentage="70" text="Professionnel" />
          <ProSkills percentage="70" text="Communication" />
          <ProSkills percentage="50" text="Résolution Problème" />
          <ProSkills percentage="85" text="Travail en équipe" />
        </div>
      </section>
    </>
  );
}