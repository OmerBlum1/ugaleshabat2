import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Signin, Gallery, Register, VolunteerMatch } from "./components";
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;