import React from 'react';
import './App.css';
import Header from './Components/header';
import SiteInfo from './Components/main';
import Footer from './Components/footer';
import './css/main.css';

function App() {
  return (
    <div className="body">
      <Header/>
      <SiteInfo/>
      <Footer/>

    </div>
  );
}

export default App;
