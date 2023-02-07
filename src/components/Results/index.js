// == IMPORT NPM
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Icon } from "semantic-ui-react";

// IMPORT ASSETS
import "./styles.scss";
import Music from '../Cards/Music';
import Playlist from '../Cards/Playlist';
import User from '../Cards/User';
import Genre from '../Cards/Genre';

const Results = ( {
  baseApiUrl
}) => { 

  // Variable that controls the state of the page 
  let showResults = useSelector((state) => state.research.showResults);

  // Variable for search Query Term
  const research = useSelector((state) => state.research.research);  

  // Obejct from search Query Term
  const searchList = useSelector((state) => state.research.list);

  return(

    <div className="results"> 
      {/* Opening Conidition for view results with empty search qury */}
      { !showResults &&
      <>
        <h1 className="results__h1"> 
          Aucune recherche en cours. Faites une recherche via la barre de recherche au dessus. &nbsp;      
          <Icon name='thumbs up outline' className='results__h3--icon' />
        </h1>
      </>
      } 
      {/* Opening Conidition for view results from search query */}
      { showResults &&
      <>
      <h1 className="results__h1"> Resultats pour : <span className="results__h1--term">{research}</span></h1>
        <div className="columns-container__title columns-container__title-1" >Musiques</div>
        <div className='columns-container'>
          { 
          Object.entries(searchList.music).length === 0 &&
          <>
            <h3 className="results__h3">Aucune musique trouvée pour la recherche.</h3>
          </>
          } {
            searchList.music.slice(0,10).map((music) =>( 
              <Music
                key={music.description}
                name={music.title}
                date={music.releaseDate}
                image={music.picture}
                description={music.description}
                song={music.file}
                nbLike={music.nbLike} 
                nbListened={music.nbListened} 
                baseApiUrl={baseApiUrl}   
                />
            ) ) }
          </div>

          {/* //* Scrollbar hide placeholder */ }
          <div className="scrollbar__placeholder"></div>

        <div className="columns-container__title columns-container__title-2" >Artistes</div>
        <div className='columns-container'>
          { 
          Object.entries(searchList.user).length === 0 &&
          <>
            <h3 className="results__h3">Aucun artiste/utilisateur trouvé pour la recherche.</h3>
          </>
          } {
            searchList.user.slice(0,10).map((user) =>( 
              <NavLink to={`/user/${user.slug}`}>
              <User
                key={user.email}
                certification={user.certification}
                date={user.createdAt}
                description={user.description}
                email={user.email}
                label={user.label}
                name={user.name}
                image={user.picture}
                baseApiUrl={baseApiUrl}   
                />
                </NavLink>
            ) ) }
          </div>

          {/* //* Scrollbar hide placeholder */ }
          <div className="scrollbar__placeholder"></div>

        <div className="columns-container__title columns-container__title-3" >Playlist</div>
        <div className='columns-container'>
          { 
          Object.entries(searchList.playlist).length === 0 &&
          <>
            <h3 className="results__h3">Aucune playlist trouvée pour la recherche.</h3>
          </>
          } {
            searchList.playlist.slice(0,10).map((playlist) =>( 
              <Playlist
                key={playlist.id}
                id={playlist.id}
                name={playlist.title}
                date={playlist.createdAt}
                image={playlist.picture}
                description={playlist.description}
                nbLike={playlist.nbLike} 
                baseApiUrl={baseApiUrl}   
                />
            ) ) }
          </div>

          {/* //* Scrollbar hide placeholder */ }
          <div className="scrollbar__placeholder"></div>

        <div className="columns-container__title columns-container__title-4" >Genres</div>
        <div className='columns-container'>
          { 
          Object.entries(searchList.genre).length === 0 &&
          <>
            <h3 className="results__h3">Aucune genre trouvée pour la recherche.</h3>
          </>
          } {
            searchList.genre.slice(0,10).map((genre) =>( 
              <Genre
                key={genre.description}
                date={genre.createdAt}
                description={genre.description}
                name={genre.title}
                image={genre.picture}
                baseApiUrl={baseApiUrl}   
                />
            ) ) }
          </div> 

          {/* //* Scrollbar hide placeholder */ }
          <div className="scrollbar__placeholder"></div>
      </>
      }   
    </div>

  );
};

export default Results;