import React from "react";
import '../CSSFiles/Navigation.css';
import { Link, withRouter } from "react-router-dom";
import cakeLogo from '../Images/logo3small.png';

function Navigation(props) 
{
  var Img = <img src={'logo3small'}/>
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            עוגה לשבת
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <img src={cakeLogo} width="85" height="85"></img>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  דף הבית
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/signin" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/signin">
                  התחבר
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/volunteer-match" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/volunteer-match">
                  למי אאפה הסופש
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/gallery" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/gallery">
                  גלריה
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/register" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/register">
                  הרשמה
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Admin" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Admin">
                  אדמין
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);