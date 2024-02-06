// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import react from 'react';
import ReactDOM  from 'react-dom';  
import App from './app';
import'bootstrap/dist/css/bootstrap.css';
import './index.css';

/*DOM=document object model is a package used to manage react components*/
// const header=<h1>This is my first react</h1> /*isko comment kare bcoz we dont want*/
// console.log(header);

// ReactDOM.render(header ,document.getElementById('root'));  
 /*[public-index.html me ka div (root) isme dalna]*/
//DOM element access kiye in react

 const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>)

// let div=document.getElementById('root');
// div.append(App());