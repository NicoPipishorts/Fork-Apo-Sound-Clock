// IMPORT NPM
import React from "react";
import { Icon, Button  } from "semantic-ui-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// IMPORT ASSETS
import SearchBar from "../SearchBar";
import ModalCreate from "./ModalCreate";
import ModalConnexion from "./ModalConnexion";
import { setUserField, login, creatUser, logout, getUserWithSlug } from '../../actions/user';
import { search, setResearchField } from "../../actions/research";
import Logo from './logo-v.png';
import "./styles.scss";

const NavBar = ({research}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // on récupère depuis le store les valeurs courantes
  // d'email et password
  const email = useSelector((state) => state.users.email);
  const name = useSelector((state) => state.users.name);
  const password = useSelector((state) => state.users.password);
  const userData = useSelector((state) => state.users.user);

  const logged = useSelector((state) => state.users.logged);
  const errorCode = useSelector((state) => state.users.errorCodeMail);

  const role = useSelector((state) => state.users.user.roles);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleLogin = () => {
    dispatch(login());
    // console.log('etape : 2, je passe par le handleLogin vers le middleware login');
 
  };
  const handleCreate = () => {
    dispatch(creatUser())
  }
  const handleLogout = () => {
    dispatch(logout());    
    navigate('/');
    window.location.reload(); 
  }
  const changeFieldSearch = (value, name) => {
    dispatch(setResearchField(value, name));
  };
  const handleSearch = () => {
    dispatch(search());
  }

  const handleOnClickUser = () => {
    dispatch(getUserWithSlug(userData.slug));
    navigate(`/user/${userData.slug}`);
  }
  
  return( 
    <nav className="navbar__container">

      <NavLink to="/">
      <div className="navbar__logo" style={{ "backgroundImage": `url(${Logo})` }} />
      </NavLink>  

      <div className="searchbar-container">
        <SearchBar
          research={research}
          changeField={changeFieldSearch}
          handleSearch={handleSearch}
        />
        
      </div>
      
      <div className="navbar__buttons-container">
        {/* Account Creation and Login button, only visible if not connected to account */}
        {(!logged) && 
        <>
          <div>
          <ModalCreate 
            errorCode={errorCode}
            username={name}
            password={password}
            email={userData.email}
            changeField={changeField}
            handleCreate={handleCreate}
          />
        </div>
        <div>
          <ModalConnexion 
            email={email}
            password={password}
            changeField={changeField}
            handleLogin={handleLogin}
          />
  
        </div>
        </>
        }
        {(logged) && 

          <>
          <Button onClick={handleOnClickUser} className='navbar__buttons--user'>
            <Icon name="user circle" className='navbar__buttons--icon navbar__buttons--icon-user' />
            <span className="navbar__buttons--user-text">{userData.name}</span>
          </Button>
        
          {(role['0'] === 'ROLE_ADMIN') &&
          <Button 
            href="http://denisjulien-server.eddi.cloud/projet-9-sound-clock-back/public/back/user/" color="blue" className="navbar__buttons--admin">
            <Icon name="user secret" className='navbar__buttons--icon' />
            <span className="navbar__buttons--user-text">Admin</span>
          </Button>
          }
          
          <Button color="teal" onClick={handleLogout} className='navbar__buttons--logout'>
            <Icon name="log out" className='navbar__buttons--icon' />
            <span className="navbar__buttons--user-text">Déconnexion</span>
          </Button>
        </>    
        }
        
      </div>

    </nav>
  );

}

export default NavBar;