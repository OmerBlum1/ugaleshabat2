import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Signin, Gallery, Register, VolunteerMatch, Admin } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/signin" exact component={() => <Signin />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
          <Route path="/volunterr-match" exact component={() => <VolunteerMatch />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/Admin" exact component={() => <Admin />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;