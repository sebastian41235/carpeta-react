import React from "react";
import Card from "../Card";
import Hola from "../saludo";
import imagenbob from "../imagenes/koku2.webp"
import Iteracion from "../itinerante";

export default class Maestro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                "id":1,
                "nombre":"",
                "descripcion":"hola como estas ",
                "img":imagenbob,
                "color":"black"
            }]
        }
    }
    render(){
        return(
            <div>
                <Hola 
                    username="sebas"
            />
            <Iteracion
                chao={this.state.data}
            />
        </div>
        )
    }
}




/* <Hola 
            username="sebas"
            />
            <Card
                nombre="sebas" 
                descripcion="no c que poner xd"
                img={koku} 
                /> */