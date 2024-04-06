import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){

  return (
    <main>
      <h2>Hi from React</h2>
    </main>);
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
