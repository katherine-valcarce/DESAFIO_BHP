import React from 'react'

const ResultsELC = ({estrobo,height,space,informationELC, onChangeinformationELC}) => {
    return (
      <div>
        <h2>{informationELC}</h2>
       <br />
        <p>El calculo de tu ELC es:</p>
        <h3>{onChangeinformationELC(estrobo,height,space)}</h3>
        <br />
        <p>Las medidas que introdujiste son:</p>
        <h3>Longitud del estrobo en metros: {estrobo}</h3>
        <h3>Estatura del trabajador en metros: {height}</h3>
        <h3>Espacio real de terreno:{space}</h3>
        <br />
        <p>Las medidas estandar usadas para los cálculos fueron:</p>
        <h3>Margen de seguridad en metros: 1</h3>
        <h3>Elongación del amortiguador de impacto tipo 1 en metros: 1.2</h3>
      </div>
    );
}

export default ResultsELC
