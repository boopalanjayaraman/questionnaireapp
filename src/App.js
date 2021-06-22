import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './App.css';

import { Provider } from "react-redux";
import Navbar from './layouts/Navbar';
import Landing from './views/Landing';
import RegularSubSection from './components/RegularSubSection';
import VerticalTableSubSection from './components/VerticalTableSubSection';
import HorizontalTableSubSection from './components/HorizontalTableSubSection';
import MatrixSubSection from './components/MatrixSubSection';
import FullQuestionnaire from './components/FullQuestionnaire';
 
class App extends Component {
  render(){

    return (
        <Router>
            <div className="App">
              <Navbar />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/regular" component={RegularSubSection} />
                  <Route exact path="/verticaltable" component={VerticalTableSubSection} />
                  <Route exact path="/horizontaltable" component={HorizontalTableSubSection} />
                  <Route exact path="/matrix" component={MatrixSubSection} />
                  <Route exact path="/fullquestionnaire" component={FullQuestionnaire} />
            </div>
        </Router>
    );
  }
  
}


export default App;
