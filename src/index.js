import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Maestro from "./components/pages/maestro";
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

const root=ReactDOM.createRoot(
 document.getElementById('root')
)
root.render(
<Maestro/>
)


/* <Card 
nombre="sebas" 
edad="17"
color="gray"  */

/* const contenedor = document.getElementById('root')
ReactDOM.render(element,contenedor) */









/*esto va mas arriba entre el render y la funcion esa xd*/

/* const nombre='sebas'
const user={
  Nombre:'sebas',
  Apellido:'Diaz',
  Edad:38,
  avatar:'https://i.blogs.es/23bb31/apps.16480.13656678855925393.22ab9b41-5579-449c-81e5-ff46ea0e30b6/1366_2000.jpeg'
}
function datosuser(user){
  return user.Nombre+' '+ user.Apellido+' '+ user.Edad
}
const element = (
  <div>
<h1>hola, {datosuser(user)}</h1>
<img src={user.avatar}/>
</div>); */