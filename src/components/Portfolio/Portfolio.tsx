import './portfolio.css'
import kasa from '../../assets/kasa.jpg';
import sportsee from '../../assets/sportsee.jpg';

export const Portfolio = () => {
  return (
    <section>
      <div className="portfolio projet">
        <div className="main-text projet">
          <h1 className="titre1">Projets</h1>
          <div className="portfolio-content">
            <div className="row">
              <div className="layer">
                <h2 className="titre2">Kasa</h2>
                <a href="https://kasabyleo.netlify.app/" target="_blank">
                  <img src={kasa} alt="image projet Kasa" />
                </a>
                <p className="para-layer">
                  Kasa est un site de location d’appartements entre particuliers
                  depuis près de 10 ans maintenant que j'ai codé à l'aide de la
                  bibliothèque React. Les cartes présentent les chambres
                  disponibles et un clique de l'utilisateur sélectionne une carte
                  et l'ouverture d'un carroussel présentant des photos de la
                  chambre.
                </p>
              </div>
            </div>
            <div className="row"> 
              <div className="layer">
                <h2 className="titre2">Sport See</h2>
                <a href="https://sportseebyleo.netlify.app/" target="_blank">
                  <img src={sportsee} alt="image projet sportSee" />
                </a>
                <p className="para-layer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem quia aspernatur itaque iusto debitis veniam, maiores
                  commodi aliquam quis ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}