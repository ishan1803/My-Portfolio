import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import MyFlix from "../../img/MyFlix.png";
import GrootApp from "../../img/GrootApp.png";
import BounceBall from "../../img/BounceBall.png";
import DrumKit from "../../img/DrumKit.png";
import TinDog from "../../img/TinDog.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
        < a href="https://my-netflix-clone-29989.web.app/" target="blank"><img src={MyFlix} alt=" My Flix" /></a>  
        <h1> MyFlix </h1>
        {/* <h2> A Netflix Clone </h2> */}
        </SwiperSlide>
        <SwiperSlide>
        < a href="https://keepupwithgroot.wordpress.com/" target="blank"><img src={GrootApp} alt=" Keep Up With Groot" /></a>  
        <h1> Keep up with Groot</h1>
        </SwiperSlide>
        <SwiperSlide>
        < a href="https://www.linkedin.com/posts/ishan-saxena-4757301a7_javascript-future-programming-activity-6804679459904516097-etAu/?utm_source=linkedin_share&utm_medium=member_desktop_web" target="blank"><img src={BounceBall} alt="" /></a>  
        <h1> Bounce Ball </h1>
        </SwiperSlide>
        <SwiperSlide>
        < a href="" target="blank"><img src={DrumKit} alt="" /></a>  
        <h1> Drum Kit </h1>
        </SwiperSlide>
        <SwiperSlide>
        < a href="https://ishan1803.github.io/Tin-Dog/" target="blank"><img src={TinDog} alt="" /></a>  
        <h1> TinDog </h1>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
