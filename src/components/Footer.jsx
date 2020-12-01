import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../CSSFiles/Footer.css';

function Footer() {
  return (
    <footer className="footer fixed-bottom">
        <p className="m-0 text-center text-black padding">
        <span>Copyright &copy; עוגה לשבת</span> 
        </p>
        <p> 
        <a href="https://www.facebook.com/groups/258116568671570"
           target="_blank"
           rel="noopener noreferrer"
           className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/ugaleshabat/"
           target="_blank"
           rel="noopener noreferrer"
           className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </p>
    </footer>
  );
}

export default Footer;