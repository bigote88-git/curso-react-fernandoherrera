import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './HelloWorldApp'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp 
      title={"Random News"} 
      content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime provident? Assumenda doloribus ut facere adipisci, rerum sint"} 
      year={ 2024 }
      /> */}
      <CounterApp value={1} />
  </React.StrictMode>
)
