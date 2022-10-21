import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import SearchBar from './SearchBar';
import {motion } from "framer-motion/dist/framer-motion"; 



export default function Cards({onSearch,cities, onClose}) {
  return ( 
      <motion.div 
      
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
      >
      <div>
       <SearchBar onSearch={onSearch} />
      </div>
      <div className='cards' >
         {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
     
    </motion.div>
  );
}
