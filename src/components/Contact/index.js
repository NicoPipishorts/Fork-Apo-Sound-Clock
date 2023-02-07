// IMPORT NPM
import React from 'react'
import { Form, Button, Input, TextArea} from 'semantic-ui-react'

// IMPORT ASSETS
import "./styles.scss";


const ContactForm = () => (

  <section className='contact-form-container'>

    <Form className='contact-form__form'>
      <h1>Laissez nous un message...</h1>
      <Input
        label={{ icon: 'asterisk', color: 'teal' }}
        labelPosition='left corner'
        className='contact-form__input'
        size='huge'
        type='text' 
        fluid 
        required
      >
      </Input>
      <br />
      <Input
        label={{ icon: 'asterisk', color: 'teal'  }}
        labelPosition='left corner'
        size='huge'
        type='text' 
        fluid 
        required
      >
      </Input>
      <br />
      <TextArea className='contact-form__textarea' placeholder='Laissez nous un petit message...' required></TextArea>
      <br />
      <br />
      <Button color='teal' type='submit'>Submit</Button>
    </Form>

  </section>
);

export default ContactForm;