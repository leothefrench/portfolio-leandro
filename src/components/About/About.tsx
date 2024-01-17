import './about.css'
import myface from '../../assets/my-face.jpg'

export const About = () => {
  return (
    <section className="about-container">
    <div className='container-img'>
      <img
        src={myface}
        alt="photo Léandro Da Silva"
        className="left-about-section"
      />
    </div>
      <div className="a-propos-text">
        <h2 className="titre_h2">A Propos <span className='de-moi'>de moi</span></h2>
        <h3 className="titre_h3">Développeur Front-End</h3>
        <p className="paragraphe">
          Après une carrière de technico-commercial dans la vente principalement
          technique, j'ai pu développer diverses compétences, tel que le travail
          en équipe, l'étude des cahiers des charges clients, le définition du
          besoin, la prospection téléphonique et terrain d'une clientèle
          diverses ainsi que la négociation en face à face avec différents
          niveau de décideurs.
        </p>
        <p className="paragraphe">
          Ces nombreuses années, m'ont appris la curiosité, la rigueur, la
          combativité, la résilence, la détermination dans l'optention des
          commandes.
        </p>
        <p className="paragraphe">
          Suite à une formation en distancielle avec la société OpenClassrooms sur
          une durée de 14 mois, j'ai pu réaliser de nombresux projets professionalisant qui m'ont permis de faire croîte mes connaissances
          et mes compétences, principalement sur les technologies front-end
          tel que la bibliothèque React.
        </p>
        <p className="paragraphe">
          Dorénavant je souhaite travailler sur des projets Web côté front-end
          avec si possible une intégration de la partie back-end avec Node.JS sous 3 à 4 ans.
        </p>
      </div>
    </section>
  );
}