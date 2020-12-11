import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Signin, Gallery, Register, VolunteerMatch, Admin } from "./components";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/Home" exact component={() => <Home />} />
            <Route path="/signin" exact component={() => <Signin />} />
            <Route path="/gallery" exact component={() => <Gallery />} />
            <Route path="/VolunteerMatch" exact component={() => <VolunteerMatch />} />
            <Route path="/register" exact component={() => <Register />} />
            <Route path="/Admin" exact component={() => <Admin />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;