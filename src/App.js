import React, { Component } from 'react';
//import the BrowserRouter, Route, and Link components
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import stylesheets
import './App.css';
import './index.css';

//import page components
import Landing from './components/landing';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Accelerator from './components/projects/accelerator';
import Newsletter from './components/projects/newsletter';
import Biscuits from './components/projects/biscuits';
import AnnArbor from './components/projects/ann-arbor';
import GreenerDining from './components/projects/greenerdining';
import Spain from './components/projects/spain';
import India from './components/projects/india';
import Michigan from './components/projects/michigan';
import Chicago from './components/projects/chicago';
import Connected from './components/projects/connected';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/home" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/accelerator" component={Accelerator}/>
            <Route exact path="/newsletter" component={Newsletter}/>
            <Route exact path="/biscuits" component={Biscuits}/>
            <Route exact path="/ann-arbor" component={AnnArbor}/>
            <Route exact path="/greener-dining" component={GreenerDining}/>
            <Route exact path="/spain" component={Spain}/>
            <Route exact path="/india" component={India}/>
            <Route exact path="/michigan" component={Michigan}/>
            <Route exact path="/chicago" component={Chicago}/>
            <Route exact path="/connected" component={Connected}/>

          </Switch>

          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
