import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Doc from "./components/Doc";
import Identification from "./components/Identification";
import Calculator from "./components/Calculator";
import AnchorPointVerification from './components/AnchorPointVerification';
import CheckList from "./components/CheckList";
import CheckList2 from './components/CheckList2';
import CheckList3 from './components/CheckList3';
import CheckList4 from './components/CheckList4';
import Results from './components/Results';
import './App.css';



const App = () => {
/* ---------------------información de usuario--------------------------------------- */
const [user, setUser] = useState('');
console.log(user)
const [rut, setRut] = useState('');
console.log(rut)


/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
  

  const [arnesCondition, setArnesCondition] = useState([{id:1, pregunta:'¿Se encuentra libre grasa, pinturas, etc?', respuesta:'si'}]);
  const [accessoriesCondition, setAccessoriesCondition] = useState([{id:1, pregunta:'¿Los anillos en D presentan deformaciones?', respuesta:'no'}]);
  const [lifeRopeCondition, setLifeRopeCondition] = useState([{id:1, pregunta:'¿Se encuentran libres de grasa, pintura, etc?', respuesta:'si'}]);
  const [anchorPointCondition, setAnchorPointCondition] = useState([{id:1, pregunta:'¿Se visualiza alguna modificación del Punto de Anclaje?', respuesta:'no'}]);
  const [checklist, setChecklist] = useState(false);  

/*---------Funciónes que agregan las condiciones de validación de punto de anclaje---------------- */
 const  additionOfArnesConditions = (id, data) => {
  const copyOfArnesConditions = [...arnesCondition];

  if(copyOfArnesConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setArnesCondition(copyOfArnesConditions);
  }else{
    copyOfArnesConditions.push(data[id]);
    setArnesCondition(copyOfArnesConditions);
      
      }
 }

 const  additionOfAnchorPointConditions = (id, data) => {
  const copyOfAnchorPointConditions = [...anchorPointCondition];
  if(copyOfAnchorPointConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setAnchorPointCondition(copyOfAnchorPointConditions);
  }else{
    copyOfAnchorPointConditions.push(data[id]);
    setAnchorPointCondition(copyOfAnchorPointConditions);
      }
 }

 const  additionOfAccessoriesConditions = (id, data) => {
  const copyOfAccessoriesConditions = [...accessoriesCondition];

  if(copyOfAccessoriesConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setAccessoriesCondition(copyOfAccessoriesConditions);
  }else{
    copyOfAccessoriesConditions.push(data[id]);
    setAccessoriesCondition(copyOfAccessoriesConditions);
      
      }
 }

 const  additionOfLifeRopeConditions = (id, data) => {
  const copyOfLifeRopeConditions = [...lifeRopeCondition];

  if(copyOfLifeRopeConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setLifeRopeCondition(copyOfLifeRopeConditions);
  }else{
    copyOfLifeRopeConditions.push(data[id]);
    setLifeRopeCondition(copyOfLifeRopeConditions);
      
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
        rut={rut}
        setRut={setRut} 
        />
      </Route>
      <Route path="/menu">
        <Menu 
        setArnesCondition={setArnesCondition}
        setAccessoriesCondition={setAccessoriesCondition}
        setLifeRopeCondition={setLifeRopeCondition}
        setAnchorPointCondition={setAnchorPointCondition}
        />
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
        setArnesCondition={setArnesCondition}
        additionOfArnesConditions={additionOfArnesConditions}
        />
      </Route>
      <Route path="/checklist2">
        <CheckList2
        accessoriesCondition={accessoriesCondition}
        setAccessoriesCondition={setAccessoriesCondition}
        additionOfAccessoriesConditions={additionOfAccessoriesConditions}/>
      </Route>
      <Route path="/checklist3">
        <CheckList3
        lifeRopeCondition={lifeRopeCondition}
        setLifeRopeCondition={setLifeRopeCondition}
        additionOfLifeRopeConditions={additionOfLifeRopeConditions}
        />
      </Route>
      <Route path="/checklist4">
        <CheckList4
        additionOfAnchorPointConditions={additionOfAnchorPointConditions}
        anchorPointCondition={anchorPointCondition}
        setAnchorPointCondition={setAnchorPointCondition}
        setChecklist={setChecklist}
        />
      </Route>
      <Route path="/results">
        <Results 
        estrobo={estrobo}
        height={height}
        space={space}
        informationELC={informationELC}
        onChangeinformationELC={onChangeinformationELC}
        checklist={checklist}
        setChecklist={setChecklist}
        user={user}
        />
      </Route>
      <Route path="/doc">
        <Doc 
        onChangeinformationELC={onChangeinformationELC}
        informationELC={informationELC}
        height={height}
        estrobo={estrobo}
        space={space}
        user={user}
        setUser={setUser}
        rut={rut}
        setRut={setRut}
        />
      </Route>
    </Switch>
  </Router>
);
};

export default App;

