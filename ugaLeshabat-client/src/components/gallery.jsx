import React from "react";
import '../CSSFiles/Gallery.css';
import inst1 from '../Images/instagram1.jpg';
import inst2 from '../Images/instagram2.jpg';
import inst3 from '../Images/instagram3.jpg';
import inst4 from '../Images/instagram4.jpg';
import inst5 from '../Images/instagram5.jpg';
import inst6 from '../Images/Instagram6.jpg';
import inst7 from '../Images/instagram7.jpg';
import inst8 from '../Images/instagram8.jpg';
import inst9 from '../Images/instagram9.png';
import inst10 from '../Images/instagram10.jpg';
import inst11 from '../Images/instagram11.jpg';
import inst12 from '../Images/instagram12.jpg';


function Gallery() {
  return (
      <div class="container-gallery">
        <h2>גלריית תמונות</h2> <br/>
        <div class="grid-container">
          <img src={inst1} class="image"/>
          <img src={inst2} class="image"/>
          <img src={inst3} class="image"/>
          <img src={inst4} class="image"/>
          <img src={inst5} class="image"/>
          <img src={inst6} class="image"/>
          <img src={inst7} class="image"/>
          <img src={inst8} class="image"/>
          <img src={inst9} class="image"/>
          <img src={inst10} class="image"/>
          <img src={inst11} class="image"/>
          <img src={inst12} class="image"/>
        </div>
      </div>
  );
}

export default Gallery;