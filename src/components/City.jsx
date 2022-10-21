import React from "react";
import './City.css';
import './Card.css';
import {motion } from "framer-motion/dist/framer-motion"; 
import Footer from '../components/Footer';

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
export default function City ({cities}){
  if (cities.length ===0){
      alert ('Error al buscar mas informacion')
      return ( <div>Error al buscar mas informacion</div> )
   } 

 return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    > 
    <div className="city">
    {
        cities.map(city=>{
            return(
                <div className="card">
                <div className="blob"></div>
                  <div className="blob"></div>
                  <div className="blob"></div>
                  <div className="blob"></div>
                  <div className="blob"></div>
          
                  <div className="card__content">
          
                   <h2>{city.name}</h2>
                   <div className="info">
                        <div> Temperatura: {city.temp} ºC</div>
                        <div>Clima:   {city.weather}</div>
                        <div>Viento:   {city.wind} km/h</div>
                        <div>Cantidad de nubes:   {city.clouds}</div>
                        <div>Latitud:   {city.latitud}º</div>
                        <div>Longitud:   {city.longitud}º</div>
                    </div>
                  </div>
                </div>
            )
        })
    }
    </div>
       </motion.div>
  )

}
// tambien podemos usar params.cityId importando {useParams} from react-....
