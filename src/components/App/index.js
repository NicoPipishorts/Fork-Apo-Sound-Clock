// == IMPORT NPM 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// == IMPORT ASSETS
import Header from '../Header';
import Legal from '../Legal';
import Footer from '../Footer';
import ParallaxMain from '../Parallax';
import Columns from '../Columns';
import About from '../About';
import Playlist from '../Playlist';
import Results from '../Results';
import Contact from '../Contact';
import User from '../User';
import Error from '../Error';

//import SearchBar from '../SearchBar';
import './styles.scss';

import { getMusicsList } from '../../actions/musics';
import { getUsersList, getLoggedUser } from '../../actions/user';
import { getPlaylistsList } from '../../actions/playlist';

const App = () => {  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseApiUrl = 'http://denisjulien-server.eddi.cloud/projet-9-sound-clock-back/public/uploads'

  /*
  //* useParams used to pickup the slug is the user is not logged
  const { slug } = useParams();
  */

  useEffect(
    () => {
      dispatch(getMusicsList());
      dispatch(getUsersList());
      dispatch(getPlaylistsList());
    }, []
  );

  useEffect(() => {
    
const loggedInUser = localStorage.getItem("userToken");
    if (loggedInUser) {
      //* DECOMPRESSION OF PAYLOAD
      let base64Url = loggedInUser.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      let payload =  JSON.parse(jsonPayload);      
      //console.log('Je suis le payload du get logged user: ' , payload);
      dispatch(getLoggedUser(payload.slug));
      }
    }, []
  );

  const handleOnClickUser = (slug) => {
    // dispatch(getUserWithSlug(slug));
    navigate(`/user/${slug}`);
  }

  //* Updated status retrieval
  const updated = useSelector((state) => state.users.updated);

  return(
  
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element= { 
        <>
          <ParallaxMain />
        {updated &&
        <div>Profil mis a jour.</div>
        }
          <Columns 
            handleOnClickUser = {handleOnClickUser}
            baseApiUrl={baseApiUrl}
          />
        </>
        }/>
        <Route 
          path='/legal' 
          element={<Legal baseApiUrl={baseApiUrl}/>} 
        />
        <Route 
          path='/contact' 
          element={<Contact baseApiUrl={baseApiUrl} />} 
        />
        <Route
          path='/results' 
          element={<Results baseApiUrl={baseApiUrl} />} 
        />
        <Route 
          path='/playlist/:playlist' 
          element={<Playlist 
            baseApiUrl={baseApiUrl} 
          />} 
        />
        <Route 
          path='/About' 
          element={<About baseApiUrl={baseApiUrl} />} 
        />
        <Route 
          path='/user/:slug' 
          element={<User 
            avatar='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            baseApiUrl={baseApiUrl}
            />} 
          
        />
        <Route 
          path='/*' 
          element={<Error baseApiUrl={baseApiUrl} />} 
        />
      </Routes>
      <Footer />


    </div>

);
};

export default App;