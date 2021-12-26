import { Link } from 'react-router-dom';
import { heroeImages } from '../../helpers/heroImages';


export const HeroCard = ({ 
  id,
  superhero,
  publisher, 
  alter_ego,
  first_appearance,
  characters
}) => {
  // const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        
        <div className="row no-gutters">
          <div className="col-4">
            <Link to={`/hero/${id}`}>
              <img 
                src={ heroeImages(`./${id}.jpg`).default } 
                className="card-img" 
                alt={superhero} 
                style={{cursor: "pointer"}}
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>

              <p className="card-text">{alter_ego}</p>
              
              {
                ( alter_ego !== characters ) 
                && <p className="text-muted">{ characters }</p>
              }
              
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              
              <Link to={`/hero/${id}`}>
                Mas...
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
