import React from "react";
import "./CardCExtended.css";



export default function CardCExtended({hour,temp,img,windSpeed,windGust}) {
  
    return (

      <div className="containerM">

        <div className="Card" >
         <p className="title">{hour}</p>
         <img className="imag" src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="IconClimb" />  
             
         <p className="title">{temp}°</p>
         <p> Wind Speed: {windSpeed} km/h Gust:{windGust}km/h</p>
                            
        </div>
      
      </div>
        
    )
}