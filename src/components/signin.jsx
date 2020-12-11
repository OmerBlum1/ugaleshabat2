import React, { useState } from "react";
import '../CSSFiles/signin.css';
import { Link } from 'react-router-dom';

function Signin() {
  const [isSent, setSent] = useState(false)

  const onSendCode = () => {
    setSent(true);
  }

  return (
    <div class="container Signin">
        <h2> התחברות עם קוד חד פעמי בסמס</h2>
        
        {
          !isSent ? 
          <div>
            <label for="phone">הכנס את מספר הטלפון שאיתו נרשמת:</label> 
            <input type="tel" id="phone" name="telephone" required/>
            <a><button type="button" class="btn btn-outline-secondary" onClick={onSendCode}>שלחו לי קוד לנייד</button></a>
          </div>
          : 
          <div>
            <label for="phone">הכנס את הקוד שקיבלת:</label> 
            <input type="numbers" id="code" name="code" required/>
            <a><button type="button" class="btn btn-outline-secondary">שלח</button></a>
          </div>
        }

        <p class="not-signed">
          לא רשום עדיין? 
          <Link to={'/Register'}>
            <a class="register">להרשמה </a>
          </Link>          
        </p>
        <br/>
        <br/>
      </div>
  );
}

export default Signin;