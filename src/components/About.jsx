import React from "react";
import {motion } from "framer-motion/dist/framer-motion"; 

export default function About (){
    return (
     <motion.div 
     initial={{opacity:0}}
     animate={{opacity: 1}}
     exit={{opacity:0}}>
         <h1>About Weather App!</h1>
         <p>kvdnvlsdjvñlkañlvksñlkvñlskvlñksñlkdvñslkdvlñ</p>
     </motion.div>
    )
}

//Cuando construimos un componente:
//     1. importar react
//     Si es funcional:
//           return--> devuelve directamente lo q queremos renderizar
//           props? recibe por parametros