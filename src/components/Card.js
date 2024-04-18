import React from "react";
import koku from "./imagenes/koku2.png"
import "./style/Card.css"




class Card extends React.Component{
render(){
const {nombre,edad,color}=this.props
    return (
    <div className="card back">
        <div className="font">
            <h1 style={{color:`${color}`}}>hola progoku41235 {nombre} tu edad es {edad}</h1>
            </div>
    <div className="porta">
        <img src={koku}></img>
        </div>
    </div>
 )
}
}
/* function imagenxd(props) {
    return (
        <img src='https://i.blogs.es/23bb31/apps.16480.13656678855925393.22ab9b41-5579-449c-81e5-ff46ea0e30b6/1366_2000.jpeg'/>
    )
}
 */
export default Card         