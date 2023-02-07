import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Background from './banner.png';

import "./styles.scss";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

const ParallaxMain = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        className="swiper"
        loop={true}
        autoplay={{ delay: 5000 }}
      > 
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              `url(${Background})`
          }}
          data-swiper-parallax="-23%"
        />
        <SwiperSlide
          className="swiper__slide"
            //</Swiper>style={{
            //"backgroundImage":
            //"url(https://static.vecteezy.com/system/resources/previews/002/090/204/large_2x///summer-music-day-festival-banner-free-vector.jpg)",
            //}}
              >
          <div className="swiper__text--container" data-swiper-parallax="-300"> 
            <div className="swiper__title">
              Abonnez-vous à vos artistes préférés !
            </div>
            <div className="swiper__text">
              <p>
                Coup de coeur sur un son ? Vous voulez soutenir un artiste ?  Suivez le et ajoutez le à votre playlist, partagez la à vos amis, et faites la fête jusqu'au bout de la nuit ! 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper__slide"
          //</Swiper>style={{
          //"backgroundImage":
          //"url(https://static.vecteezy.com/system/resources/previews/002/090/196/large_2x////summer-music-day-festival-banner-free-vector.jpg)",
          //}}
            >
          <div className="swiper__text--container" data-swiper-parallax="-300"> 
            <div className="swiper__title">
              Faites un don !
            </div>
            <div className="swiper__text">
              <p>
               Vous voulez soutenir Sound'Clock ? Alors suivez le lien et lachez vos meilleurs deniers ! (A venir)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper__slide"
            //style={{
            //"backgroundImage":
            //"url(https://static.vecteezy.com/system/resources/previews/002/088/563/large_2x/lectronic-music-festival-poster-and-banner-design-free-vector.jpg)",
            //}}
            >
          <div className="swiper__text--container" data-swiper-parallax="-300"> 
            <div className="swiper__title">
              Le top 10 Sound'clock
            </div>
            <div className="swiper__text">
              <p>
               Le TOP 10 des experts de chez Sound'Clock.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default ParallaxMain;