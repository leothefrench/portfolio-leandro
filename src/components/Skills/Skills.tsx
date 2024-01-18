import './skills.css'
import { Bars } from '../Bars/Bars'
import { ProSkills } from '../ProSkills/ProSkills';

export const Skills = () => {
  return (
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
          <div className="radial-bars">
            <ProSkills changeClassName='path-1' percentage="70" text="Professionnel" />
            <ProSkills changeClassName='path-2' percentage="70" text="Communication" />
            <ProSkills changeClassName='path-3' percentage="50" text="Résolution Problème" />
            <ProSkills changeClassName='path-4' percentage="85" text="Travail en équipe" />
          </div>
        </div>
      </section>
  );
}