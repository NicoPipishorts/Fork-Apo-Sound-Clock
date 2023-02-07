// IMPORT NPM
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


// IMPORT ASSETS
import './styles.scss';
import Music from '../Cards/Music';
import { getPlaylistByID } from '../../actions/playlist';

const Playlist = ( {
  baseApiUrl,
} ) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const selectSate = useSelector((state) => state.playlists.selectState);
  
  //* useParams used to pickup the slug is the user is not logged
  const { playlist } = useParams();
  useEffect(
    () => {
      // console.log('test useEffect playlist wiew');
      dispatch(getPlaylistByID(playlist));
      window.scrollTo(0, 0);
    }, [dispatch, location]
  );

  const details = useSelector((state) => state.playlists.details);
  console.log(baseApiUrl);

  let pictureFile;

  function isValidHttpUrl(string) {
    let url;    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  if(isValidHttpUrl(details.picture)){
    pictureFile = details.picture;
  } else {
    pictureFile = `${baseApiUrl}/${details.picture}`;    
  } 

  return(
    <>
    {selectSate && (
      <section className='playlist__container'>
        
        <div className='playlist__avatar--container'>
          <div className="playlist__avatar" style={{"backgroundImage": `url(${pictureFile})` }}></div>
          <div className='playlist__h1'>Playlist: <span className='playlist__h1--span'>{ details.name }</span></div>
        </div>    
      
        <div className='playlist__cards--container'>
          <div className='columns-container'>
            {details.musics.map((music) => (
              <Music
                key={music.id}
                name={music.title}
                date={music.releaseDate}
                image={music.picture}
                description={music.description}
                song={music.file}
                nbLike={music.nbLike} 
                nbListened={music.nbListened} 
                baseApiUrl={baseApiUrl}   
                isValidHttpUrl={isValidHttpUrl}
                />
            ))}
          </div>
        </div>

      {/* //* Scrollbar hide placeholder */ }
      <div className="scrollbar__placeholder"></div>

      </section>
    )}
    </>
  );
};

export default Playlist;