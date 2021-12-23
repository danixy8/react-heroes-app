
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';
import { useMemo } from 'react';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm( {
    searchText: q
  });

  const { searchText } = formValues;

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  };

  return (
    <>
      <h1>Busquedas</h1>
      <hr />

      <div className="row">

        <div className="col-sm-12 col-md-5">
          <h4>Buscar Personaje</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input 
              type="text" 
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={ handleInputChange }
              value={ searchText }
            />
          
          <button 
            className="btn btn-outline-primary mt-2 btn-block"
            type="submit"
          >
            Buscar...
          </button>
          
          </form>


        </div>
 
          <div className="col-sm-12 col-md-7">
          { 
            q !== '' &&
            <>
              <h4>Resultados</h4> 
              <hr />
            </>
          }
          
          { heroesFilter.length > 0 && (
              heroesFilter.map(hero => (
                <HeroCard
                  key={ hero.id }
                  {...hero}
                />
              ))
           )
          }

          { 
            q !== '' && heroesFilter.length === 0 
            ?
              <p className="alert alert-danger">
                { `Personaje ${q} no encontrado`}
              </p>
            :
            null
          }

          </div>

      </div>
    </>
  )
}