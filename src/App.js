import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Doc from "./components/Doc";
import Identification from "./components/Identification";
import Calculator from "./components/Calculator";
import AnchorPointVerification from './components/AnchorPointVerification';
import CheckList from "./components/Checklist.jsx";
import CheckList2 from './components/CheckList2';
import CheckList3 from './components/CheckList3';
import CheckList4 from './components/CheckList4';
import Results from './components/Results';
import './App.css';



const App = () => {
/* ---------------------información de usuario--------------------------------------- */
const [user, setUser] = useState('');
const [position, setPosition] = useState('');
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
  const estadoDelArnes = [
   {id:1, pregunta:'¿Pregunta N°1?'},
   {id:2, pregunta:'¿Pregunta N°2?'},
   {id:3, pregunta:'¿Pregunta N°3?'},
   {id:4, pregunta:'¿Pregunta N°4?'}, 
   {id:5, pregunta:'¿Pregunta N°5?'},
   {id:6, pregunta:'¿Pregunta N°6?'},
   {id:7, pregunta:'¿Pregunta N°7?'}
  ];

  const [arnesCondition, setArnesCondition] = useState([{id:1, pregunta:'¿Pregunta N°1?'}]);
  
  

/*---------Función que agrega las condiciones de validación de punto de anclaje---------------- */
 const  additionOfhArnesConditions = (id) => {
  const copyOfArnesConditions = [...arnesCondition];
  if( id === 7){
    setArnesCondition(copyOfArnesConditions);
  }else{
    copyOfArnesConditions.push(estadoDelArnes[id]);
    setArnesCondition(copyOfArnesConditions);
      
      }
 }
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
  const [estrobo, setEstrobo] = useState('1.2');
  const [height, setHeight] = useState('');
  const [space, setSpace] = useState('');
  const [informationELC, setInformationELC] = useState('');

/*-------------------------------- Calculadora ----------------------------------*/
const onChangeinformationELC = (LongitudEstrobo, EstaturaTrabajador, EspacioRealDeTerreno) => {
   const EA = 1.2;
   const MS = 1;
   const ELC = parseFloat(LongitudEstrobo) + parseFloat(EstaturaTrabajador) + EA + MS;
   if (ELC >= parseFloat(EspacioRealDeTerreno)) {
    setInformationELC('Estarás a salvo');
   }
   else{
    setInformationELC('Estarás en peligro');
   }
   return ELC;

}
/* --------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
return (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <Home/>
      </Route>
      <Route path="/identification">
        <Identification
        user={user}
        setUser={setUser}
        position={position}
        setPosition={setPosition} />
      </Route>
      <Route path="/menu">
        <Menu/>
      </Route>
      <Route path="/verification">
        <AnchorPointVerification/>
      </Route>
      <Route path="/calculator">
        <Calculator
         estrobo={estrobo}
         setEstrobo={setEstrobo}
         height={height}
         setHeight={setHeight}
         space={space}
         setSpace={setSpace}
         onChangeinformationELC={onChangeinformationELC}
       />
      </Route>
      <Route path="/checklist">
        <CheckList 
        arnesCondition={arnesCondition}
        additionOfhArnesConditions={additionOfhArnesConditions}
        />
      </Route>
      <Route path="/checklist2">
        <CheckList2/>
      </Route>
      <Route path="/checklist3">
        <CheckList3/>
      </Route>
      <Route path="/checklist4">
        <CheckList4/>
      </Route>
      <Route path="/results">
        <Results 
        estrobo={estrobo}
        height={height}
        space={space}
        informationELC={informationELC}
        onChangeinformationELC={onChangeinformationELC}
        
        />
      </Route>
      <Route path="/doc">
        <Doc 
        user={user}
        position={position}
        />
      </Route>
    </Switch>
  </Router>
);
};

export default App;

