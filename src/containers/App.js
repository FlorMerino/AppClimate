import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import {Route} from 'react-router-dom';
import AnimatedRoutes from '../components/AnimatedRoutes';
import Footer from '../components/Footer';

function App() {

  const [cities, setCities] = useState([]);

  const [citiesExtended, setCitiesExtended] =useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_APIKEY}&units=metric`)
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
    
   function forecastExtended (id){
    
    if(!citiesExtended.filter(c => c.id === id).length>0){
      let lat;
     let long;
     let nameCity;
 
     cities.map(c => {
      if(c.id===parseInt(id)){
        nameCity= c.name;
        lat=c.latitud; 
        long=c.longitud;
      }
     })
     lat && long?
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_MYAPIKEY}&units=metric`)
       .then(resp => resp.json())
       .then((recurso) => {
         if(recurso.list.length> 0){
          let info=[];
          let infoForDay=[];
           let day = recurso.list[0].dt_txt.substring(0,10);// ej "2022-10-16"
           for (let i = 0; i < recurso.list.length; i++) {
            let objInfo= {
              hour: recurso.list[i].dt_txt.substring(11,16),
              temp: Math.round(recurso.list[i].main.temp),
              img: recurso.list[i].weather[0].icon,
              windSpeed: recurso.list[i].wind.speed,
              windGust: recurso.list[i].wind.gust,
            };
              
             if(day===recurso.list[i].dt_txt.substring(0,10)){

              if(!infoForDay.includes(day)) infoForDay.push(day);
              infoForDay.push(objInfo)

             }else{
               info.push(infoForDay);
               day= recurso.list[i].dt_txt.substring(0,10);
               infoForDay=[day];
               infoForDay.push(objInfo)
             }            
           }
           info.push(infoForDay);      
           const cityExtended = {
             id: id,
             name: nameCity,
             forecastInfo: info,
           };
           setCitiesExtended(oldCities => [...oldCities, cityExtended]);
         }else {
           alert("Error al cargar el pronostico extendido");
         }     
       })
       :
       alert("Error al cargar la ciudad, intentelo nuevamente");

    }
     
  }
  console.log(citiesExtended)
  console.log(cities)
  //  function onFilterCities(ciudadId) {
  //   let ciudad = cities.filter(c => c.id === parseInt(ciudadId)); //la informacion que toma de URL (del match) la va
  //   //           esto recorre el arreglo                       a tomar como un string entonces lo transformamos en un nro
  //   if(ciudad.length > 0) {
  //       return ciudad[0]; //retorna la ciudad con el id indicado
  //   } else {
  //       return null;
  //   }
  //  }
   function onFilterCityExtended(cityId) {
    let city = citiesExtended.filter(c => c.id === parseInt(cityId)); //la informacion que toma de URL (del match) la va
    //           esto recorre el arreglo                       a tomar como un string entonces lo transformamos en un nro
    if(city.length > 0) {
        return city[0]; //retorna la ciudad con el id indicado
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
    {/* <Route exact path='/'
    render= {() => <Cards onSearch={onSearch} cities={cities} onClose={onClose}/>} 
    />  */}
    <div>
    {/* <Route
    exact
    path='/about'
    render={() => <About />}
    /> */}
    <AnimatedRoutes onSearch={onSearch} cities={cities} onClose={onClose} onFilterCityExtended={onFilterCityExtended} forecastExtended={forecastExtended} citiesExtended={citiesExtended} ></AnimatedRoutes> 
     {/* <Route exact path={'/city/:cityId'} render={({match}) => <City city={onFilter(match.params.cityId)}/>} /> */}
     {/*el ultimo nombre debe coincidir con el q le dimos cityId */}
    </div>
    <Route
    path='/'
    render={() => <Footer />}
    />
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