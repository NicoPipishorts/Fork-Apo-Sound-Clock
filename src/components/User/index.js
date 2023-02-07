// == IMPORT NPM
import React, { useEffect} from 'react';
import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";


// == IMPORT ASSETS
import ModalAddMusic from "./ModalAddMusic";
import ModalUpdateProfile from "./ModalUpdateProfile";
import { sendMusic, setMusicField } from '../../actions/musics';
import { updateProfile, setUserField, getUserWithSlug } from '../../actions/user';
import Music from "../Cards/Music";
import Playlist from "../Cards/Playlist";

const User = ( { avatar, baseApiUrl }) => { 
  
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const userLoaded = useSelector((state) => state.users.userLoaded); 
  let showModals;

  //* useParams used to pickup the slug is the user is not logged
  const { slug } = useParams();
  useEffect(
    () => {
      dispatch(getUserWithSlug(slug));
      window.scrollTo(0, 0);
    }, [dispatch, location, slug]
  );

  //* Logged status retrieval
  const logged = useSelector((state) => state.users.logged);

  //* Modal State values for controled fields
  const modalTitle = useSelector((state) => state.musics.title);
  const modalFile = useSelector((state) => state.musics.file);
  const modalPicture = useSelector((state) => state.musics.picture);
  const modalReleaseDate = useSelector((state) => state.musics.releaseDate);
  const modalDescription = useSelector((state) => state.musics.description);
  const progressUpload = useSelector((state) => state.musics.progress );
  const errorCode = useSelector((state) => state.musics.errorCode);

  const updateUserEmail = useSelector((state) => state.users.email);
  const updateUserDescription = useSelector((state) => state.users.description);
  const updateUserPassword = useSelector((state) => state.users.password);
  const updateUserPicutre = useSelector((state) => state.users.picture.name);
  const updateUserLabel = useSelector((state) => state.users.label);
  const updateUserStatus = useSelector((state) => state.users.errorCodeMail);
  
  //* declaring userData variable
  let userData;

  //* clicked User data
  const clickedUser  =  useSelector((state) => state.users.clickedUser);
  // console.log('je suis sur la page user, je suis la valuer du clockedUser : ', clickedUser);
  //* logged in User data
  const loggedUser = useSelector((state) => state.users.user);
  //console.log('je suis sur la page user, je suis la valuer du loggedUser : ', loggedUser);

  // const usersList = useSelector((state) => state.users.list);
  // console.log('je suis sur la page user, voici la liste de user:' , usersList);

  //* User Data retreival from the state
  if((clickedUser)){
    userData = clickedUser;
    // console.log(' je suis le user data du clicked user : ', userData);
  } else {
    userData = loggedUser;
    //console.log(' je suis le user data du logged user : ', userData);
  }

  if(loggedUser.slug === clickedUser.slug){
    showModals = true;
  }

  const changeField = (value, name) => {
    //console.log(`Je veux modifier le champ ${name} avec la valeur ${value}`);
    dispatch(setUserField(value, name));
  };

  const changeMusicField = (value, name) => {
    //console.log(`Je veux modifier le champ ${name} avec la valeur ${value}`);
    dispatch(setMusicField(value, name));
  };

  const handleAddMusic = (dateValue) => {
    // console.log('Je veux me logger (au moins essayer)');
    dispatch(sendMusic(dateValue));
  };

  const handleUpdateProfile = (dateValue) => {
    // console.log('Je veux me logger (au moins essayer)');
    dispatch(updateProfile(dateValue));
  };
  
  //TODO Picking up the musics results for the user from the user musics API
  const musics = userData.musics;
  const playlists = userData.playlists;

  const certificationIcon = <Icon name='certificate' size='tiny' className='card__content--h1-cert' />;
  return (
    
    <div className="user-wrapper">

    <section className="user-container">

      <div className="user__avatar--container">
      
      {/* //* Conditional view for avater if not logged or no slug selected */}
        {((!logged) && (!slug)) && (
          <>
          <div className="user__avatar" style={{"backgroundImage": `url(${avatar})` }}></div>
          </>
        )}
      {/* //* Conditional view for avater if logged or slug available */}
        {((logged) || (slug)) && (
          <>
          <div className="user__avatar" style={{"backgroundImage": `url(${baseApiUrl}/${userData.picture})` }}></div>
          </>
        )}    

        {/* Modal to modifythe user data */}
        { showModals &&
        <>
          <div className="user__modifyUser--container">
            <ModalUpdateProfile 
              description={updateUserDescription}
              email={updateUserEmail}
              passwrod={updateUserPassword}
              picture={updateUserPicutre}
              label={updateUserLabel}
              changeField={changeField}
              userData={userData}
              handleUpdateProfile={handleUpdateProfile}
              progress = {progressUpload}
              errorCode= {updateUserStatus}
              open={open}
              setOpen={setOpen}
            />     
          </div>
        </>
        }
      </div>

      <section className="user__header-container">
        
        <div>
          {(!logged) && (!slug) && (
            <>
            <h1 className="user__header--name-noUser">Aucun utilisateur trouvé.</h1>
            </>
          )}
          {((logged) && (!slug)) && (
            <>
            <h1 className="user__header--name"><span className='user__header--welcome'>Bienvenue</span> {userData.name}
            {(userData.certification) && certificationIcon }
            </h1>
            </>
          )} 
          {((logged) && (slug)) && (
            <>
            <h1 className="user__header--name"><span className='user__header--welcome'>Bienvenue</span> {userData.name}
            {(userData.certification) && certificationIcon }
            </h1>
            </>
          )} 
          {((!logged) && (slug)) && (
            <>
            <h1 className="user__header--name">Bienvenue {slug}
            {(userData.certification) && certificationIcon }
            </h1>
            </>
          )}

        {/* //! FROM HERE TO */}
        {((logged) || (slug)) && (
        <>    
          <div className="user__header--link">
            http://wwww.soundclock.com/
            {logged && userData.name } 
            {!logged && slug}
          </div>
          <div className="user__header--email">
            {logged && userData.email }             
          </div>
            <div className='user__header--data-container'>
              <div className="user__header-h2">Abonnés: 
                <span className="user__header-h2--stats">
                  {(userLoaded) && userData.subscribers.length }
                </span>
              </div> 
              <div className="user__header-h2">Musiques: 
                <span className="user__header-h2--stats">
                  {(userLoaded) && userData.musics.length}
                </span>
              </div>  
              <div className="user__header-h2">Label: 
                <span className="user__header-h2--stats">
                  {userData.label}
                </span>
              </div>       
            </div>     
        </>
        )}
        
        {/* //! TO HERE useEffect loading error */}
        </div>

        {((logged) || (slug)) && (
        
          <div className="user__description">
          {userData.description}
          </div>
            
        )}

      </section>
      
    </section>

    <section className="content-container">

    {/* Modal to Upload new content, only visible if logged in */}
    {showModals &&
    <>
      <div className="content__addMusic--container">
        <ModalAddMusic 
          title={modalTitle}
          file={modalFile}
          picture={modalPicture}
          releaseDate={modalReleaseDate}
          description={modalDescription}
          changeMusicField={changeMusicField}
          handleAddMusic={handleAddMusic}
          progress = {progressUpload}
          errorCode= {errorCode}
        />     
      </div>
    </>
    }

    {/* //! FROM HERE TO */}
    {/* //* User Music section */}
      <h1 className="content__section--title">Music</h1>
      <div className='content__section--container'>
      {(userLoaded) && (
        <>
        {
        musics.map((music) =>( 
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
        ) ) 
        }
        </>
      )}
      </div>

    {/* //* Scrollbar hide placeholder */ }
    <div className="content__section-container__placeholder"></div>

    {/* //* User Playlist section */}
      <h1 className="content__section--title">Playlists</h1>
      <div className='content__section--container'>
      {(userLoaded) && (
        <>
        {
          playlists.map((playlist) =>( 
          <Playlist
            key={playlist.id}
            name={playlist.title}
            date={playlist.createdAt}
            image={playlist.picture}
            description={playlist.description}
            nbLike={playlist.nbLike} 
            baseApiUrl={baseApiUrl}   
            />
        ) ) 
        }
        </>
      )}
      </div>  

    {/* //* Scrollbar hide placeholder */ }
    <div className="content__section-container__placeholder"></div>
    
  {/* //! TO HERE useEffect loading issue */}
      
    </section>

  </div>

  );

};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
}


export default User;