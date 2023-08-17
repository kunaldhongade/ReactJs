import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
// import Resume from './Resume';
// import ChildParent from './ChildParent';
// import ListApp from './ListApp';
// import Form from './Form';
// import IIB from './IIB';
// import GrandParentChild from './GrandParentChild';
// import Clock from './Clock';
import DigiClock from './DigiClock';

import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root2'))
// root2.render(
//   <React.StrictMode>
//     <App2></App2>
//   </React.StrictMode>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <Resume />
//   </React.StrictMode>
// )


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DigiClock />
  </React.StrictMode>
)
