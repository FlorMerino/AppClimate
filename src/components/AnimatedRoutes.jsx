import React from "react";
import { Route, useLocation } from "react-router-dom";
import City from '../components/City';
import { AnimatePresence } from "framer-motion/dist/framer-motion"; 
import Cards from '../components/Cards.jsx';
import ClimateExtended from '../components/ClimateExtended';
import About from '../components/About';


export default function AnimatedRoutes ({onSearch,cities,onClose,onFilterCityExtended,forecastExtended,citiesExtended,theme}){

    const location = useLocation();

 return (
    <AnimatePresence exitBeforeEnter>
     <Route exact path='/' location={location} key={location.pathname} render= {() => <Cards onSearch={onSearch} cities={cities} onClose={onClose} theme={theme}/>} /> 
     <Route exact path={'/city/Additional-Information'} location={location} key={location.pathname} render={() => <City cities={cities}/>} />
     <Route exact path={'/extended-Forecast/:cityId'} location={location} key={location.pathname} render={({match}) => <ClimateExtended forecastExtended={forecastExtended(match.params.cityId)} onFilterCityExtended={onFilterCityExtended} id={match.params.cityId} citiesExtended={citiesExtended} />} /> 
     <Route exact path={'/about'} location={location} key={location.pathname} render={() => <About />}
    />
    </AnimatePresence> 
  )

}