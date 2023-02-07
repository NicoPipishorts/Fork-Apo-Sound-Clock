// == IMPORT NPM
import React, { useState } from "react";
import {Header, Modal, Button, Icon, Form, Input, Message } from "semantic-ui-react";
import './styles.scss'

const ModalCreate = ({
  username,
  email,
  password,
  changeField,
  handleCreate,
  errorCode
}) => { 

  const [submitstate, setSubmitstate] = useState(true);
  const [passwordErrorStrength, setPasswordErrorStrength] = useState(true);
  const [passwordErrorNotSame, setPasswordErrorNotSame] = useState(true);
  
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreate();
  }; 

  //* Password verification steps
  const verifPassword = (evt) => {
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const password2 = document.getElementById('password_verif').value;

    changeField(evt.target.value, evt.target.name);

    if(password2 === '') {

      if(!regularExpression.test(evt.target.value)){
        setPasswordErrorStrength(false);
      } else {
        setPasswordErrorStrength(true);
      }

    } else {

      if(password2 !== password){
        setPasswordErrorNotSame(false);
      } else {
        setPasswordErrorNotSame(true);
        setSubmitstate(false);
      }

    }

  }

  console.log(passwordErrorNotSame);

  const [open, setOpen] = React.useState(false)
  return (
  <>    
    <Modal
    centered={false}
    onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
      <Button  name="createButton" color='teal' className="navbar__buttons--logout" >
      <Icon name="add user" className='navbar__buttons--icon navbar__buttons--icon-user' />
      <span className="navbar__buttons--user-text">Créer votre compte</span>
      </Button>
      }
      >
      <Header size='large' color="teal">Creation de votre compte</Header>
      <Modal.Content>

        <Form className="modal__creat__form" onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            className="navbar__login-btns"
            label={{ icon: 'asterisk', color: 'teal'  }}
            labelPosition='left corner'
            icon={<Icon name='user circle' color='teal' />}
            iconPosition='left'
            placeholder='pseudo'
            size='huge'
            type='text'
            required
            fluid 
            onChange={handleChange}
            name='name'
            value={username}
          />
        </Form.Field>
        <Form.Field>
          <Input
            className="navbar__login-btns"
            label={{ icon: 'asterisk', color: 'teal'  }}
            labelPosition='left corner'
            icon={<Icon name='mail' color='teal' />}
            iconPosition='left'
            placeholder='e-mail'
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
          onChange={verifPassword}
          name='password'
          value={password}
        />
        </Form.Field>
        <Form.Field>
          <Input
            className="navbar__login-btns"
            label={{ icon: 'asterisk', color: 'teal'  }}
            labelPosition='left corner'
            icon={<Icon name='lock' color='teal' />}
            iconPosition='left'
            placeholder='confirmer le mot de passe'
            size='huge'
            type='password'
            required
            fluid 
            onChange={verifPassword}
            name='password_verif'
            id='password_verif'
          />
        </Form.Field>
          { 
          <>
          <Form.Field>
            <Message negative hidden={passwordErrorStrength}>
              <Message.Header> Le mot de passe remplis pas les critères.</Message.Header>
              <Message.Content> 
                <ul>
                  <li> Minimum 8 Caractères</li>
                  <li> Au moins 1 chiffre</li>
                  <li> Au moins 1 majusciles</li>
                  <li> Et au moins 1 charactères spécial ( &#33; &#64; &#35; &#36; &#37; &#38; &#42;) </li>
                </ul>
              </Message.Content>
            </Message>
            <Message negative hidden={passwordErrorNotSame}>
              <Message.Header> Les mots de passes ne correspondent pas.</Message.Header>
            </Message>
          </Form.Field>
          </>
          }

          <Button size='huge' fluid color='teal' type='submit' disabled={submitstate}>Créer</Button>
          
          {errorCode === 422 && 
            <Message className="error__mail">
              <Message.Header className="error__mail__content">L'adresse E-mail existe déjà !</Message.Header>
            </Message>
          }
          { (errorCode === 201) &&
          <>
          <Form.Field>
            <Message positive className="succes__upload">
              <Message.Header className="succes__upload__content" > Compte créé.</Message.Header>
            </Message>
            <Button icon='close' color='teal' size='big' onClick={() => window.location.reload()}> Fermer la fenêtre </Button>
          </Form.Field>
          </>
          }
        </Form>

      </Modal.Content>
    </Modal>
  </>

  );

};

export default ModalCreate;