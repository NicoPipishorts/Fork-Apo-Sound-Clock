// ==  IMOORT NPM
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player';
import Moment from 'moment';

// == IMPORTAT ASSETS
import './styles.scss';

const MusicCard = ({
  image, 
  song, 
  name, 
  date, 
  description,
  nbLike, 
  nbListened,
  baseApiUrl,
} ) => {

  let pictureFile = ''; 
  let audioFile = '';
  

  function isValidHttpUrl(string) {
    let url;    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  if(isValidHttpUrl(image)){
    pictureFile = image;    
  } else {
    pictureFile = `${baseApiUrl}/${image}`;    
  }

  if(isValidHttpUrl(song)){
    audioFile = song;    
  } else {
    audioFile = `${baseApiUrl}/${song}`;    
  }  

  console.log("this is the audio file for the music card", baseApiUrl.baseApiUrl);

  return(
    <div className='card__container'>

      <div style={{backgroundImage: `url(${pictureFile})`}} className='card__image' />

      <div className='card__content'>

        <h1 className='card__content--h1'>{name}</h1>
        <h2 className='card__content--h2'>
        {
          Moment(date).format('D MMM Y')
        }
        </h2>
        <aside className='card__content--aside'>
          {description}
        </aside>
        <div>
          <ReactAudioPlayer
            className='card__content--player'
            src={audioFile}
            controls
          />
        </div>
        <div className='card__content--social-container'>
          <div>
            <button className='card__content--social-btn'>
              <Icon name='heart' size='small' /> {nbLike}
            </button>
          </div>
          <div>
            <button className='card__content--social-btn'>
              <Icon name='headphones' size='small' /> {nbListened}
            </button>
          </div>
        </div>

      </div>

    </div>
  );

};

MusicCard.propType = {
  song: PropTypes.string.isRequired,
  nbListened: PropTypes.number.isRequired,
  nbLike: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  baseApiUrl: PropTypes.string.isRequired,
}

export default MusicCard;