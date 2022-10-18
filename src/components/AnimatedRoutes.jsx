import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import City from '../components/City';
import { AnimatePresence } from "framer-motion/dist/framer-motion"; 
import Cards from '../components/Cards.jsx';
import ClimateExtended from '../components/ClimateExtended';

export default function AnimatedRoutes ({onSearch,cities,onClose,onFilterCityExtended,forecastExtended,citiesExtended}){

    const location = useLocation();

 return (
    <AnimatePresence exitBeforeEnter>
     <Route exact path='/' location={location} key={location.key} render= {() => <Cards onSearch={onSearch} cities={cities} onClose={onClose}/>} /> 
     <Route exact path={'/city/Additional-Information'} location={location} key={location.key} render={() => <City cities={cities}/>} />
     <Route exact path={'/extended-Forecast/:cityId'} location={location} key={location.key} render={({match}) => <ClimateExtended forecastExtended={forecastExtended(match.params.cityId)} onFilterCityExtended={onFilterCityExtended} id={match.params.cityId} citiesExtended={citiesExtended} />} /> 
    </AnimatePresence> 
 )

}