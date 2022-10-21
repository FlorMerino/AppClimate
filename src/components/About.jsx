import React from "react";
import {motion } from "framer-motion/dist/framer-motion"; 

export default function About (){
    
    return (
     <motion.div 
     initial={{opacity:0}}
     animate={{opacity: 1}}
     exit={{opacity:0}}>
         <h1>About Weather App!</h1>
         <p>This application is developed for practical purposes for the author. You will be able to browse freely and obtain forecast data for your area, both for the current date and for 5 days later. I hope you enjoy browsing!
           Atte Florence Merino🌺​🖐️​</p>

     </motion.div>

    )
}

//Cuando construimos un componente:
//     1. importar react
//     Si es funcional:
//           return--> devuelve directamente lo q queremos renderizar
//           props? recibe por parametros