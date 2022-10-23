import {motion } from "framer-motion/dist/framer-motion"; 
import CardForDay from "./CardForDay";
import Loading from "./Loading";



export default function ClimateExtended ({id,citiesExtended}) {
  
  let infoCity = citiesExtended.filter(c => c.id === id);
  
  console.log(infoCity)
  return(
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}>
        
        {
          citiesExtended.length>0?
          <div>
            {
              infoCity.map(c =>{
                return(
                  <div>
                    <h3>{c.name}</h3>
                    {
                      c.forecastInfo.map(arrayInfo =>{
                        return(
                         <CardForDay InfoDay={arrayInfo}></CardForDay>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
          :
          <Loading></Loading>
        }
    </motion.div>
  )

};

