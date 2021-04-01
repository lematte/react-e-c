import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Header from './components/liste_contacts/Header'
//import Contacts from './components/liste_contacts/Contacts'
import Navbar from './navbar/Navbar'
import Grid from './components/grid/Grid'
import {list} from './components/Data'

function App(props) {
  return (
    <Fragment>
      <div className="container" >
          
          <Navbar/>
          <div  style={{paddingTop:6 +'em'}}>
          <Grid list ={list}/>
          </div>
     </div>
    </Fragment> 
     
  );
}

export default App;
