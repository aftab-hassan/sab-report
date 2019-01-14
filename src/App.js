import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import AssetsView from './components/assetsTable'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AssetsView}></Route>
        </Switch> 
      </BrowserRouter>
      

      // <React.Fragment>
      //   {/* <NavBar /> */}
      //   <main className="container">
      //   <Switch>
      //     <Route path="/assetsView" component={AssetsView}></Route>
      //   </Switch>     
      //   </main>
      // </React.Fragment>  
    );
  }
}

export default App;
