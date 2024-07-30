import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './component/Header.js'; 
import NavBars from './component/NabBars.js';
import Imageandtext from './component/Imageandtext.js';
import FromAndImage from './component/FromAndImage.js';
import DocImage from './component/DocImage.js';
import Footer from './component/Footer.js';

class App extends React.Component {
   render() {
        return <>
        
          <Header/>
          <NavBars/>
          <Imageandtext/>
          <FromAndImage/>
          <DocImage/>
          <Footer/>
       
       
        </>
  
  }
}


export default App;
