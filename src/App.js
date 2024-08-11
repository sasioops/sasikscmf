import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import "./App.css";
import Home from "./home";
import Services from "./services";
import Courses from "./courses";
import Contact from "./contact";
import About from "./about";
import Careers from "./career";
import Webservice from "./webservice";

import Cyberservice from "./cyberservice";
import Appservice from "./appmore";
import Cloudservice from "./cloudservice";
import Dataservice from "./dataservices";
import Threedservice from "./threedservice";
import Uiuxservice from "./uiuxservice";


class App extends React.Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/courses" component={Courses} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/career" component={Careers} />
            <Route path="/webservice" component={Webservice} />
            <Route path="/appmore" component={Appservice} />
            <Route path="/cloudservice" component={Cloudservice} />
            <Route path="/dataservices" component={Dataservice} />
            <Route path="/cyberservice" component={Cyberservice} />
            <Route path="/threedservice" component={Threedservice} />
            <Route path="/uiuxservice" component={Uiuxservice} />
          </Switch>
          
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App;