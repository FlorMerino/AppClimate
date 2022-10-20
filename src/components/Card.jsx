import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


export default function Card ({min, max, name, img, onClose, id}) {
 
  return (
      <div className="card">

        {/* <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div> */}
        <div className="card__content">
        <div id="closeIcon" className="row">
          <button onClick={onClose} className="btn btn-sm btn-danger">X</button>

          <div className="card-body">
            <h1 >{name}</h1>
        
           <div className="img">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
           </div>
            {/*Cuando me haga click en el nombre de la ciudad, ya la estamos usando por eso no van los : */}
           <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
              </div>
             <p className='ocultButton' >
               <Link to={`/extended-Forecast/${id}`} >
                <button className='buttonInfo' >
                  <span className="shadowB"></span>
                  <span className="edge"></span>
                  <span className="front text"> extended...
                  </span> 
                </button>
                </Link> 
             </p>
          </div>
        </div>
        </div>
        </div>
        
      </div>
      
    );
};