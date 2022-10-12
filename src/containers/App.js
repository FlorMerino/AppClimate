import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import {Route} from 'react-router-dom';
import About from '../components/About';
import City from '../components/City';
import AnimatedRoutes from '../components/AnimatedRoutes';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId)); //la informacion que toma de URL (del match) la va
    //           esto recorre el arreglo                       a tomar como un string entonces lo transformamos en un nro
    if(ciudad.length > 0) {
        return ciudad[0]; //retorna la ciudad con el id indicado
    } else {
        return null;
    }
  }
  //aca tenemos la raiz del arbol de componentes
  return (
    <div className="App">
    <Route
    path='/'
    render={() => <Nav onSearch={onSearch} />}
    />
    <hr />
    <Route 
    exact path='/'
    render= {() => <Cards onSearch={onSearch} cities={cities} onClose={onClose}/>} 
    /> 
    <div>
    <Route
    exact
    path='/about'
    render={() => <About />}
    />
    <AnimatedRoutes onFilter={onFilter} ></AnimatedRoutes> 
     {/* <Route exact path={'/city/:cityId'} render={({match}) => <City city={onFilter(match.params.cityId)}/>} /> */}
     {/*el ultimo nombre debe coincidir con el q le dimos cityId */}
    </div>
      
    </div>
  );
}

export default App;
// Route:
//   render-children (si tengo props) sino component
//   exact
//   *path obligatorio
// luego se evalua si va strict o sensitive

//query-----> no se declara en el path -> lo coloco en la URL
//?name=martina&lastname=scomazzon (key=value)

//params----> lo declaro en el path -> lo hago con los :