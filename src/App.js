import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddPerson from './components/Persons/AddPerson';
import {Provider} from "react-redux";
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
     <Header/>
     <Route exact path="/dashboard" component={Dashboard} />
     <Route exact path="/addPerson" component={AddPerson} />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
