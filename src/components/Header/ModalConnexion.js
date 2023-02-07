// == IMPORT NPM
import React from "react";
import { Modal, Button, Icon, Input, Form, Message,Header } from "semantic-ui-react";
import PropTypes from 'prop-types';

const ModalConnexion = ({  
  email,
  password,
  changeField,
  handleLogin,
}) => { 

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  
  const [open, setOpen] = React.useState(false)

  return(
    <>   
      <Modal
      centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ 
      <Button name="loginButton" color='teal' className="navbar__buttons--logout">
        <Icon name="sign-in" className='navbar__buttons--icon navbar__buttons--icon-user' />
        <span className="navbar__buttons--user-text">Connéxion</span>
      </Button>
      }
      >
      <Header size='large' color="teal">Connectez vous à votre compte</Header>
      <Modal.Content>
        <Modal.Description>
          <Form  onSubmit={handleSubmit}>
            <Form.Field>
            <Input
              className="navbar__login-btns"
              label={{ icon: 'asterisk', color: 'teal'  }}
              labelPosition='left corner'
              icon={<Icon name='user circle' color='teal' />}
              iconPosition='left'
              placeholder='adresse email'
              size='huge'
              type='email'
              required
              fluid 
              onChange={handleChange}
              name='email'
              value={email}
            />
            </Form.Field>
            <Form.Field>
            <Input
              className="navbar__login-btns"
              label={{ icon: 'asterisk', color: 'teal'  }}
              labelPosition='left corner'
              icon={<Icon name='lock' color='teal' />}
              iconPosition='left'
              placeholder='mot de passe'
              size='huge'
              type='password'
              required
              fluid 
              onChange={handleChange}
              name='password'
              value={password}
            />
            </Form.Field>
            <Button   color='teal' fluid size='large'>
              Login
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Message>
        Nouveau ici ? <a href='/#'>Creer un compte</a>
      </Message>
  
    </Modal>
  </>    
  );

};

ModalConnexion.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
ModalConnexion.defaultProps = {
  username: '',
  password: '',
};

export default ModalConnexion;