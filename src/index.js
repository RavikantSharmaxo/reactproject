import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Component from './component';
import Props from './Props';
import Component2 from './Component2';
import Colorbutton from './Colorbutton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Component2 />
  <App />
  <Component />
  <Props name = "Ravikant Sharma"/>
  <Colorbutton />
  
</div>
    
);


