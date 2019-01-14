import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import AssetsView from './components/assetsTable'
import ModulesAffectedByAsset from './components/modulesAffectedByAsset'
import NavBar from './components/navBar'
import ModulesView from './components/modulesView'
import PyramidView from './components/pyramidView'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        
        <Switch>
            <Route path="/assets/:assetName" component={ModulesAffectedByAsset}></Route>
            {/* <Route path="/assets" component={ModulesAffectedByAsset}></Route> */}
            <Route path = "/modules" component={ModulesView}></Route>
            <Route path = "/pyramid" component={PyramidView}></Route>
            <Route path="/" component={AssetsView}></Route>
          </Switch> 
      </React.Fragment>
    );
  }
}

export default App;
