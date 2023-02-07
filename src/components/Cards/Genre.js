// ==  IMOORT NPM
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Icon } from 'semantic-ui-react';

// == IMPORTAT ASSETS
import './styles.scss';

const GenreCard = ({
  date, 
  description,
  name, 
  image, 
  baseApiUrl,
} ) => {

  let pictureFile = '';   

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
        </div>
        <div className='card__content--social-container'>
          <div>
            <button className='card__content--social-btn'>
              <Icon name='heart' size='small' /> 
            </button>
          </div>
        </div>
      </div>

    </div>
  );

};

export default GenreCard;