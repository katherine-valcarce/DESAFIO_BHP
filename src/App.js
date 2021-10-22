import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Calculator from "./components/Calculator";
import Checklist from "./components/Checklist";
import './App.css';
import Results from './components/Results';

const App = () => {

  const [estrobo, setEstrobo] = useState('1.2');
    console.log(estrobo);
    const [height, setHeight] = useState('');
    console.log(height);
    const [space, setSpace] = useState('');
    console.log(space);
    const [informationELC, setInformationELC] = useState('');
    const [checkList, setCheckList] = useState(false);

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


return (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/menu">
        <Menu/>
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
        <Checklist
        checkList={checkList}
        setCheckList={setCheckList}
        />
      </Route>
      <Route path="/results">
        <Results 
        estrobo={estrobo}
        height={height}
        space={space}
        informationELC={informationELC}
        onChangeinformationELC={onChangeinformationELC}
        checkList={checkList}
        />
      </Route>
    </Switch>
  </Router>
);
};

export default App;
