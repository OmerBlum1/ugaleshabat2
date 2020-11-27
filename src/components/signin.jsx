import React from "react";
import '../CSSFiles/signin.css';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="Signin">
      <div class="container-sign-in">
        <h3> התחברות עם קוד חד פעמי בסמס</h3>
        <label for="phone">הכנס את מספר הטלפון שאיתו נרשמת:</label> 
        <input type="tel" id="phone" name="טלפון" required/>
        <a><button type="button" class="btn btn-outline-secondary">שלחו לי קוד לנייד</button></a>
        <label for="phone">הכנס את הקוד שקיבלת:</label> 
        <input type="numbers" id="code" name="קןד" required/>
        <a><button type="button" class="btn btn-outline-secondary">שלח</button></a>
        <br/>
      <p>לא רשום עדיין? 
          <Link to={'/Register'}>
            <a class="register">להרשמה </a>
          </Link>          
        </p>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Signin;