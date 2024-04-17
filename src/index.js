import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; */

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */

const nombre='sebas'
const user={
  Nombre:'sebas',
  Apellido:'Diaz',
  Edad:38
}
function datosuser(user){
  return user.Apellido+' '+ user.Nombre+' '+ user.Edad
}
const element = <h1>Hello, {datosuser(user)}</h1>;

const contenedor = document.getElementById('root')
ReactDOM.render(element,contenedor)