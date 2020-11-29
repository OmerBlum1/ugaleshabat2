import React from "react";
import { Link } from 'react-router-dom'
import '../CSSFiles/Home.css';
import CakeLogo from '../Images/logo2.png';
import uga1 from '../Images/uga.PNG';
import uga2 from '../Images/uga7.png';
import quote from '../Images/quote.PNG';
import uga3 from '../Images/uga6.PNG';


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="jumbotron midbackground R">
          <h1 class="display-4 bold"><img src={CakeLogo} width="300" height="300"/></h1> 
          <h5>מעוניינים לאפות ולהעביר עוגה?</h5>
          <p class="lead">
            <Link to={'/Register'}>
              <button class="btn btn-outline-secondary" id="buttonactive">פעם ראשונה? הירשם כאן</button>
            </Link>
            <Link to={'/signin'}>
              <button class="btn btn-outline-secondary" id="buttonactive">כבר התנדבת אצלנו? התחבר כאן</button><br/>
            </Link>
          </p>
        </div>
        <div class="jumbotron midbackground L">
          <div class="imgcontainer">
            <img class="ugaimg " src={ uga1 } width="214" height="200"/>
            <img class ="ugaimg" src={ uga2 } width="214" height="200"/>
            <img class ="ugaimg" src={ quote } width="214" height="200"/>
            <img class ="ugaimg" src={ uga3 } width="214" height="200"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;