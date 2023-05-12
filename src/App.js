import React from 'react';
import Dropdown from './dropdown';
import './App.css';

const App = () => {
  const items = ['DSA', 'Nodejs', 'ReactJs','FrontEnd','BackEnd'];

  return (
    <div id='main'>
      <h1>My Dropdown </h1> 
      <div id='drop'>
      <Dropdown items={items} />
      </div>
    </div>
  );
};



export default App;

