import React from 'react';
import { Message, Header, Modal, Button, Icon, Form, Input, Progress, TextArea } from "semantic-ui-react";
import './styles.scss';

const ModaleUpdateProfile = ({
    email,
    password,
    description,
    picture,
    label,
    changeField,
    userData,
    handleUpdateProfile,
    progress,
    errorCode,
    open,
    setOpen
}) => {

    const handleChange = (e) => {
      changeField(e.target.value, e.target.name);
    };

    const handleFiles =(evt) => {
      changeField(evt.target.files[0], evt.target.name);
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleUpdateProfile();
    };

    if(email === ''){
      email = userData.email;
    }

    if(description === ''){
      description = userData.description;
    }

    return (
        
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button  className='user__modifyUser--btn' >
            <Icon name="sync" />
            Modifier votre compte
          </Button>
          }
      >
        <Header color='teal' size='large'>Modifier votre compte:</Header>
        <Modal.Content>
    
          <Form className="upload-form" onSubmit={handleSubmit} >

          <Form.Field>
              <Input
                icon={<Icon name='user' color='teal' />}
                iconPosition='left'
                placeholder='Votre e-mail.'
                size='huge'
                type='text'
                fluid 
                onChange={handleChange}
                id='email'
                name='email'
                value={email}
              />
            </Form.Field>
            <Form.Field>
              <Input
                icon={<Icon name='tag' color='teal' />}
                iconPosition='left'
                placeholder='Votre label.'
                size='huge'
                type='text'
                fluid 
                onChange={handleChange}
                id='label'
                name='label'
                value={label}
              />
            </Form.Field>
            <Form.Field>
              <Input
                className="navbar__login-btns"
                icon={<Icon name='lock' color='teal' />}
                iconPosition='left'
                placeholder='mot de passe'
                size='huge'
                type='password'
                fluid 
                onChange={handleChange}
                name='password'
                value={password}
              />
            </Form.Field>
            <TextArea 
              placeholder='Modifier votre description' 
              className='file-textArea'
              name='description'
              onChange={handleChange}  
              defaultValue={description}        
            />
            <br /><br />
            <div className="file-input-container">
              <Button className="file-input__btn" as="label" htmlFor="picture" type="button" color='teal'>
                <Icon name="file image outline" size='large'/>
                Modifier votre image de profil.
              </Button>
              <input 
                type="file" 
                id="picture" 
                className="file-input__hidden" 
                name='picture'
                onChange={handleFiles}
              />
              <span className='file-input__hidden--span'>{picture}</span>
            </div>
            <br />

            <br /><br />
            <div className="form__submit-container"> 
              <Button color='teal' size='huge' type='submit'>Modifier</Button>
            </div>
            {picture &&
              <>
              {progress && 
                <Progress className="progressbar" percent={progress}  color='teal' progress />  
              }
              {(progress === 100) &&
                <Message positive className="succes__upload">
                  <Message.Header className="succes__upload__content" > Ta photo a bien été uploadée !</Message.Header>
                </Message>
              }
              </>
            } 
            <>
            { (errorCode === 422) &&
              <Message positive className="succes__upload">
                <Message.Header className="succes__upload__content" > Erreur. Fichier trop lourd ou mauvais format d'envoie....</Message.Header>
              </Message>
            }
            { (errorCode === 201) &&
            <>
              <Message positive className="succes__upload">
                <Message.Header className="succes__upload__content" > Mise à jour du profil ok.</Message.Header>
              </Message>
              <Button icon='close' color='teal' size='big' onClick={() => window.location.reload()}> Fermer la fenêtre </Button>
            </>
            }
            </>
          </Form>
    
        </Modal.Content>
      </Modal>
        
    );
};

export default ModaleUpdateProfile;