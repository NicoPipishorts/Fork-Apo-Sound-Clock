import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import './styles.scss'
const Footer = () => (

    <footer className='footer'>
        
        <div className="footer__container">
        <NavLink to="contact">
        <Button color="teal" size="medium" className='footer__button'>
            Contact
        </Button>
        </NavLink>
        <NavLink to="about">
        <Button color="teal" size="medium" className='footer__button'>
            About
        </Button>
        </NavLink>

        <NavLink to="legal">
        <Button color="teal" size="medium" className='footer__button'>
            Mentions Légales
        </Button>
        </NavLink>
        </div>

        <div className='footer__copyright'>
        <Icon
            name='copyright outline'
            size='small'
            //color='teal'
            />
            Sound'Clock Cie
        </div>

    </footer>
);

export default Footer;