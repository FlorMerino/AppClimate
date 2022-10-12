import React from "react";
import './Card.css'
import {motion } from "framer-motion/dist/framer-motion"; 
//class City extends React.Component {
    //constructor -> cuando quiero definir un estado:
    //   constructor(props){
    //        super(props)
    //        this.state = {}
    //   }
//    render(){
//        return(
//            <div>city</div>
//        )
//    }
//}
export default function City ({city}){
  if (!city){
      alert ('la ciudad no existe')
      return ( <div>La ciudad no existe</div> )
   } 

 return (
    <motion.div 
    className="card"
    initial={{width:0}}
    animate={{width: "100%"}}
    exit={{position: "absolute"}}
    >
      <div className="container">
         <h2>{city.name}</h2>
         <div className="info">
              <div>Temperatura: {city.temp} ºC</div>
              <div>Clima: {city.weather}</div>
              <div>Viento: {city.wind} km/h</div>
              <div>Cantidad de nubes: {city.clouds}</div>
              <div>Latitud: {city.latitud}º</div>
              <div>Longitud: {city.longitud}º</div>
          </div>
      </div>
   </motion.div>
  )

}
// tambien podemos usar params.cityId importando {useParams} from react-....
