import CardCExtended from "./CardClimateExtended";
import "./CardForDay.css";

export default function CardForDay({InfoDay}) {
  const weekdays =['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let date;
    return (

      <div className="container">

        {
            InfoDay.map(info =>{
              if (typeof info === 'string'){
                 date = new Date(info);
               return (<h4>{weekdays[date.getDay()]} {info.substring(8,10)}</h4>)
              }else{
               return (<CardCExtended hour={info.hour} temp={info.temp} img={info.img} windGust={info.windGust} windSpeed={info.windSpeed} ></CardCExtended>)
              }
            })        
        }
      
      </div>
        
    )
}