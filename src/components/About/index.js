import { Card, Icon, Image  } from 'semantic-ui-react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// IMPORTAT ASSETS
import './styles.scss';
import PhotoJulien from './photo-julien.jpg';
import PhotoRaph from './photo-raph.jpg';
import PhotoGuillaume from './photo-guillaume.png';
import PhotoJB from './photo-jb.jpg';
import PhotoNico from './photo-nico.jpg';

const Contact = () => {
  
  return(
    <>
      <section className="contact-container-desktop">    
        <Card.Group itemsPerRow={5} className='contact-cardgroup' >
          <Card className='contact__item'>
              <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoNico})`}}></div>
              <Card.Content>
                <Card.Header>Nicolas PISAR</Card.Header>
                <Card.Meta>Lead-Front / Git Master</Card.Meta>
                
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/NicoPipishorts">
                <Icon name='github' />
                  https://github.com/NicoPipishorts
                </a>
              </Card.Content>
          </Card>

          <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoJB})`}}></div>
            <Card.Content>
              <Card.Header>Jean-Baptiste CAMBILLARD</Card.Header>
              <Card.Meta> Scrum-Master </Card.Meta>
            
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/Athellan">
              <Icon name='github' />
              https://github.com/Athellan
              </a>
            </Card.Content>
          </Card>

          <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoRaph})`}}></div>
            <Card.Content>
              <Card.Header>Raphael ALDAZ</Card.Header>
              <Card.Meta>Ref Technique</Card.Meta>
              
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/Raphael-Aldaz">
              <Icon name='github' />
              https://github.com/Raphael-Aldaz
              </a>
            </Card.Content>
          </Card>

          <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoJulien})`}}></div>
            <Card.Content>
              <Card.Header>Julien DENIS</Card.Header>
              <Card.Meta>Product Owner</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/DENISJulien">
              <Icon name='github' />
              https://github.com/DENISJulien
              </a>
            </Card.Content>
          </Card>

          <Card className='contact__item'>            
          <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoGuillaume})`}}></div>
            <Card.Content>
              <Card.Header>Guillaume MARTINS</Card.Header>
              <Card.Meta>Lead Back</Card.Meta>
              
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/GuillaumeMartinsS">
              <Icon name='github' />
              https://github.com/GuillaumeMartinsS
              </a>
            </Card.Content>
          </Card>
      
      </Card.Group>

        {/*
        Not sure we need this if we have a contact form.
          <Message
            icon='talk'
            header='Une question a nous poser ? Contacter notre support !'
            content='contact@soundclock.com'
            className='contact__support'
          />
        */}
      </section>

      <section className='contact-container-mobile'>    
        <Swiper 
          slidesPerView={1}
          spaceBetween={30}
          speed={500}
          loop={true}
          navigation={true}
          effect="fade"
          modules={[Pagination, Navigation, Autoplay,EffectFade]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
          >
          <SwiperSlide>
            <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoNico})`}}></div>
              <Card.Content>
                <Card.Header>Nicolas PISAR</Card.Header>
                <Card.Meta>Git Master</Card.Meta>
                
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='github' />
                  https://github.com/NicoPipishorts
                </a>
              </Card.Content>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoJB})`}}></div>
              <Card.Content>
                <Card.Header>Jean-Baptiste CAMBILLARD</Card.Header>
                <Card.Meta>Lead-Front / Scrum-Master </Card.Meta>
              
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='github' />
                https://github.com/Athellan
                </a>
              </Card.Content>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoRaph})`}}></div>
              <Card.Content>
                <Card.Header>Raphael ALDAZ</Card.Header>
                <Card.Meta>Ref Technique</Card.Meta>
                
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='github' />
                https://github.com/Raphael-Aldaz
                </a>
              </Card.Content>
            </Card> 
          </SwiperSlide>
          <SwiperSlide>
            <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoJulien})`}}></div>
              <Card.Content>
                <Card.Header>Julien DENIS</Card.Header>
                <Card.Meta>Product Owner</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='github' />
                https://github.com/DENISJulien
                </a>
              </Card.Content>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='contact__item'>
            <div className="contact__about--photo" style={{backgroundImage: `url(${PhotoGuillaume})`}}></div>
              <Card.Content>
                <Card.Header>Guillaume MARTINS</Card.Header>
                <Card.Meta>Lead Back</Card.Meta>
                
              </Card.Content>
              <Card.Content extra>
                <a>
                <Icon name='github' />
                https://github.com/GuillaumeMartinsS
                </a>
              </Card.Content>
            </Card>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Contact;