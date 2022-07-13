import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ishu18032001@gmail.com</span>
        <div className="f-icons">
        <div className="i-icons-1">
          <a href ="https://github.com/ishan1803" target="blank"><img  src={Github} alt="Ishan's Github" /></a>
          <a href ="linkedin.com/in/ishan-saxena-4757301a7" target="blank"><img src={LinkedIn} alt="Ishan's LinkedIn" /></a>
          <a href ="https://www.instagram.com/movies.match/" target="blank"><img src={Instagram} alt="Ishan's Insta" /></a>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
