import React from 'react';
import './App.css';
import Head from './components/Head';
import Options from './components/Options';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Getways from './components/Getways';
import './Explicit.css';

function App() {
  return (
    <div className='font-semibold'>
      <Head/>
      <Options/>
      <MainContent/>
      <Getways/>
      <Footer/>
    </div>
  );
}

export default App;
