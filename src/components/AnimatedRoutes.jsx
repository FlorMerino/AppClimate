import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import City from '../components/City';
import { AnimatePresence } from "framer-motion/dist/framer-motion"; 
import Cards from '../components/Cards.jsx';

export default function AnimatedRoutes ({onFilter}){

    const location = useLocation();
 return (
    <AnimatePresence>

     <Route exact path={'/city/:cityId'} location={location} key={location.pathname} render={({match}) => <City city={onFilter(match.params.cityId)}/>} />
       
    </AnimatePresence> 
 )

}