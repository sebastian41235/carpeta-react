import React from "react";
/*import koku from "./imagenes/koku2.webp"*/
import "./style/Card.css";




class Card extends React.Component{
render(){
const {nombre,descripcion,img,color}=this.props
    return (
    <div className="card" style={{background:`${color}`}}>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <img src={img} className="porta" alt=""/>
       
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