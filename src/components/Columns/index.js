// IMPORT NPM
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == IMPORT ASSETS
import Music from '../Cards/Music';
import User from '../Cards/User';
import Playlist from '../Cards/Playlist';
import './styles.scss';

const Columns = ( { 
  baseApiUrl,
  handleOnClickUser
 }) => {
  
  const musics = useSelector((state) => state.musics.list);
  
  const users = useSelector((state) => state.users.list)

  const playlists = useSelector((state) => state.playlists.list);

return(
 
  <section className="columns">
    
    
    <div className="columns-container__title columns-container__title-1" >Top 10 Musiques</div>
    <div className='columns-container'>
      {musics.map((music) => (
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
          />
      ))}
    </div>

    {/* //* Scrollbar hide placeholder */ }
    <div className="scrollbar__placeholder"></div>
          
    <div className="columns-container__title columns-container__title-2" >Top 10 Artistes</div>
    <div className='columns-container'>
      {users.map((user) => (
      //<NavLink to={`/user/${user.slug}`} >
        <User
          key={user.id}
          certification={user.certification}
          date={user.createdAt}
          description={user.description}
          email={user.email}
          label={user.label}
          name={user.name}
          slug={user.slug}
          image={user.picture}
          baseApiUrl={baseApiUrl}   
          handleOnClickUser = {handleOnClickUser}
          />
         // </NavLink>
      ))}
    </div>

    {/* //* Scrollbar hide placeholder */ }
    <div className="scrollbar__placeholder"></div>

    <div className="columns-container__title columns-container__title-3" >Top 10 Playlist</div>
    <div className='columns-container'>
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          date={playlist.createdAt}
          image={playlist.picture}
          description={playlist.description}
          nbLike={playlist.nbLike} 
          baseApiUrl={baseApiUrl}   
          />
      ))}
    </div>

    {/* //* Scrollbar hide placeholder  */ }
    <div className="scrollbar__placeholder"></div>

  </section> 

  );
};

Columns.propTypes = {
  baseApiUrl: PropTypes.string.isRequired,
}

export default Columns;