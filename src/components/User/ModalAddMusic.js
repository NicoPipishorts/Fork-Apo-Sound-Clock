// == IMPORT NPM
import React, {useState} from "react";
import { Header, Modal, Button, Icon, Form, Input, TextArea, Progress, Message } from "semantic-ui-react";
import DatePicker from 'react-date-picker';

// == IMPORT ASSETS
import './styles.scss'

const ModalAddMusic = ({
  title,
  file,
  picture,
  releaseDate,
  description,
  changeMusicField,
  handleAddMusic,
  progress,
  errorCode
}) => { 

  const [open, setOpen] = useState(false);
  const [dateValue, onDateChange] = useState(new Date());

  const handleChange = (evt) => {
    //console.log('la realsedate d\'éclanche bien ça', evt.target.name);
    changeMusicField(evt.target.value, evt.target.name);
  };

  const handleFiles =(evt) => {
    changeMusicField(evt.target.files[0], evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddMusic(dateValue);
  };
  
  return(

    <Modal
    centered={false}
    open={open}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    trigger={
      <Button className="content__addSong--btn">
        <Icon name="add" />
        Ajouter une musique.
      </Button>
      }
  >
    <Header color='teal' size='large'>Ajoutez une musique a votre compte:</Header>
    <Modal.Content>

      <Form className="upload-form" onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            label={{ icon: 'asterisk', color: 'teal'  }}
            labelPosition='left corner'
            placeholder='Titre du Morceau'
            size='huge'
            type='text'
            fluid 
            onChange={handleChange}
            name='title'
            value={title}
          />
        </Form.Field>
        <Form.Field>
          <DatePicker 
            onChange={onDateChange} 
            value={dateValue} 
            format="d-M-y"
            dayPlaceholder="--"
            monthPlaceholder="--"
            yearPlaceholder="----"
            required
          />
          {/*
          <Input
            label={{ icon: 'asterisk', color: 'teal'  }}
            labelPosition='left corner'
            placeholder='Date de sortie de la chanson: JJ/MM/AAAA'
            size='huge'
            type='text'
            fluid 
            onChange={handleChange}
            name='releaseDate'
            value={releaseDate}
          />
        */}
        </Form.Field>
        {/*
        //TODO This will be auto populated by the users label
        <Form.Field>
          <Input
            label={{ icon: 'asterisk', color: 'teal'  }}
            labelPosition='left corner'
            placeholder='Label'
            size='huge'
            type='text' 
            fluid 
            required
          />
        </Form.Field>
        */}
        <TextArea 
          placeholder='Description' 
          className='file-textArea'
          onChange={handleChange}
          name='description'
          value={description}
        />
        <br /><br />
        <div className="file-input-container">
          <Button className="file-input__btn" as="label" htmlFor="picture" type="button" color='teal'>
            <Icon name="file image outline" size='large'/>
            Choisir une image de couverture.
          </Button>
          <input 
            type="file" 
            id="picture" 
            className="file-input__hidden" 
            onChange={handleFiles}
            name='picture'
          />
          <span className='file-input__hidden--span'>{picture.name}</span>
        </div>
        <br />
        <div className="file-input-container">
          <Button className="file-input__btn" as="label" htmlFor="file" type="button" color='teal'>
            <Icon name="file audio outline" size='large'/>
            Choisissez votre chanson.
          </Button>
          <input 
            type="file" 
            id="file" 
            className="file-input__hidden" 
            onChange={handleFiles}
            name='file'
          />
          <span className='file-input__hidden--span'>{file.name}</span>
        </div>
        <br /><br />
        <div className="form__submit-container"> 
          <Button color='teal' size='huge' type='submit'>Uploader</Button>
        </div>
        { 
          progress && 
          <Progress className="progressbar" percent={progress}  color='teal' progress />  
        }

        {
        (progress === 100) &&
        <Message positive className="succes__upload">
          <Message.Header className="succes__upload__content" > Ta musique a bien été uploadé !</Message.Header>
        </Message>
          
        }

        {
        (errorCode === 422) &&
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

      </Form>

    </Modal.Content>
  </Modal>

  );

};

export default ModalAddMusic;