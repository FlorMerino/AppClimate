import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import SearchBar from './SearchBar';

export default function Cards({onSearch,cities, onClose}) {
  return (
    <div >
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
    </div>
  );
}
