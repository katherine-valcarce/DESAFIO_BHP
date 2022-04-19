import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Access from './components/Access';
import Calculator from "./components/Calculator";
import AnchorPointVerification from './components/AnchorPointVerification';
import CheckList from "./components/CheckList";
import CheckList2 from './components/CheckList2';
import CheckList3 from './components/CheckList3';
import CheckList4 from './components/CheckList4';
import Results from './components/Results';
import Document from "./components/Document";
import './App.css';




const App = () => {
/* ---------------------información de usuario--------------------------------------- */
const [user, setUser] = useState('');
const [rut, setRut] = useState('');
const [terms, setTerms] = useState(false);
const [fieldValidation, setFieldValidation] = useState(false);



/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
  

  const [arnesCondition, setArnesCondition] = useState([{id:1, pregunta:'¿Se encuentra libre grasa, pinturas, etc?', respuesta:'si'}]);
  const [accessoriesCondition, setAccessoriesCondition] = useState([{id:1, pregunta:'¿Los anillos en D presentan deformaciones?', respuesta:'no'}]);
  const [lifeRopeCondition, setLifeRopeCondition] = useState([{id:1, pregunta:'¿Se encuentran libres de grasa, pintura, etc?', respuesta:'si'}]);
  const [anchorPointCondition, setAnchorPointCondition] = useState([{id:1, pregunta:'¿Se visualiza alguna modificación del Punto de Anclaje?', respuesta:'no'}]);
  const [checklist, setChecklist] = useState(false);  

/*---------Funciónes que agregan las condiciones de validación de punto de anclaje---------------- */


const  addingQuestions = (id, data, state) => {

  switch (state) {
    case arnesCondition:
      const copyOfArnesConditions = [...arnesCondition];
      if(copyOfArnesConditions.filter((item)=>{return item.id === id+1}).length>0){
        return;
     }else if( id === data.length){
      setArnesCondition(copyOfArnesConditions);
     }else{
     copyOfArnesConditions.push(data[id]);
     setArnesCondition(copyOfArnesConditions);
     }
      break;
      case accessoriesCondition:
        const copyOfAccessoriesConditions = [...accessoriesCondition];

  if(copyOfAccessoriesConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setAccessoriesCondition(copyOfAccessoriesConditions);
  }else{
    copyOfAccessoriesConditions.push(data[id]);
    setAccessoriesCondition(copyOfAccessoriesConditions);
      
      }
      break;
      case lifeRopeCondition:
        const copyOfLifeRopeConditions = [...lifeRopeCondition];

  if(copyOfLifeRopeConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setLifeRopeCondition(copyOfLifeRopeConditions);
  }else{
    copyOfLifeRopeConditions.push(data[id]);
    setLifeRopeCondition(copyOfLifeRopeConditions);
      
      }
    break;
    case anchorPointCondition:
      const copyOfAnchorPointConditions = [...anchorPointCondition];
  if(copyOfAnchorPointConditions.filter((item)=>{return item.id === id+1}).length>0){
       return;
  }else if( id === data.length){
    setAnchorPointCondition(copyOfAnchorPointConditions);
  }else{
    copyOfAnchorPointConditions.push(data[id]);
    setAnchorPointCondition(copyOfAnchorPointConditions);
      }
    break;
    default:
    break;
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
       <Route path="/access">
        <Access
        user={user}
        setUser={setUser}
        rut={rut}
        setRut={setRut} 
        terms={terms}
        setTerms={ setTerms}
        fieldValidation={fieldValidation}
        setFieldValidation={setFieldValidation}
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
        addingQuestions={addingQuestions}
        />
      </Route>
      <Route path="/checklist2">
        <CheckList2
        accessoriesCondition={accessoriesCondition}
        setAccessoriesCondition={setAccessoriesCondition}
        addingQuestions={addingQuestions}/>
      </Route>
      <Route path="/checklist3">
        <CheckList3
        lifeRopeCondition={lifeRopeCondition}
        setLifeRopeCondition={setLifeRopeCondition}
        addingQuestions={addingQuestions}
        />
      </Route>
      <Route path="/checklist4">
        <CheckList4
        addingQuestions={addingQuestions}
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
      <Route path="/document">
        <Document 
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

