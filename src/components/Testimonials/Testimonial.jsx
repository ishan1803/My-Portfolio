import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Optica.jpg";
import profilePic2 from "../../img/verzeo.png";
import profilePic3 from "../../img/hult.jpg";
import profilePic4 from "../../img/pts.png";
import profilePic5 from "../../img/ioe.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Secretary Genearl -  Lead a team of 60 volunteers to organize multiple events with a participation of more than 3000 tech enthusiasts ",
    },
    {
      img: profilePic2,
      review:
        "Campus Ambassador - Lead of the marketing of our company in our college. Pitched to atleast 200",
    },
    {
      img: profilePic3,
      review:
        "Volunteer - Managed the first round of a really huge international evevnt and contributed towards bringing in participation . ",
    },
    {
      img: profilePic4,
      review:
        "Volunteer - Wrote some amazing content and developed immersive posters for the hub. Helped them in organizing multipe events. ",
    },
    {
      img: profilePic5,
      review:
        "Drove people towards nature driven movements",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Positions of </span>

        <span>Responsibility...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
