import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/Productlist';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Productlist from './components/Productlist';
import Model from './components/Model';

function App() {
  return (
  //Read about fragment here: https://reactjs.org/docs/fragments.html
    <React.Fragment>
      <Navbar></Navbar>
      {/* Router Section */}
        {/* add switch to add a default page in no matching case */}
      <Switch> 
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
      </Switch>
      <Model></Model>
    </React.Fragment>

  );
}

export default App;
