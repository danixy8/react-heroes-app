import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from '../../selectors/getHeroById';
import './HeroScreen.css';
import { heroeImages } from '../../helpers/heroImages';
// import batman from '../../assets/heroes/dc-batman.jpg'; estatico

export const HeroScreen = () => {

  const {heroeId} = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]) ;

  const handleReturn = () => {
    navigate(-1);
  };

  if(!hero) return <Navigate to='/' />

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  // const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className="row mt-5">
     <div className="col-4">
       <img 
        src={ heroeImages(`./${id}.jpg`).default } 
        alt={ superhero } 
        className="img-thumbnail animate__animated animate__bounceInLeft"
        />
     </div>

     <div className="col-8 animate__animated animate__bounceInRight">
       <h3>{ superhero }</h3>
       <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
          <li className="list-group-item"> <b>First Appearance:</b> { first_appearance } </li>
       </ul>

      <h5 className="mt-3">Characters</h5>
      <p>{ characters }</p>

      <button 
        className="btn btn-outline-info"
        onClick={ handleReturn }>
        Regresar
      </button>

     </div>
    </div>
  )
}
