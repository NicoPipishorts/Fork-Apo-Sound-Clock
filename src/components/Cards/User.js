// ==  IMOORT NPM
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
//import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';

// == IMPORTAT ASSETS
import './styles.scss';
//import { getUserWithSlug } from '../../actions/user';

const UserCard = ({
  certification,
  description,
  email,
  label,
  name,
  slug,
  image,
  baseApiUrl,
  handleOnClickUser
} ) => {

  let pictureFile = '';  
  //const dispatch = useDispatch();
  //const navigate = useNavigate(); 

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

  const handleClick = () => {
    handleOnClickUser(slug);
  }

  return(
    <div className='card__container card__container--playlist' onClick={handleClick}>

      <div style={{backgroundImage: `url(${pictureFile})`}} className='card__image' />

      <div className='card__content'>

        <h1 className='card__content--h1'>
          {name} 
          { certification === '1' &&
          <Icon name='certificate' size='tiny' color='teal' className='card__content--h1-cert' />
          }
        </h1>
        <h2 className='card__content--h2'>{email}</h2>
        <aside className='card__content--aside'>
          {description}
        </aside>
        <div>
        </div>
        <div className='card__content--social-container'>
          <div>
            <button className='card__content--social-btn'>
              <Icon name='headphones' size='small' /> {label}
            </button>
          </div>
        </div>

      </div>

    </div>
  );

};

UserCard.propType = {
  certification: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  baseApiUrl: PropTypes.string.isRequired,
}

export default UserCard;