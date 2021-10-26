import React from "react";
import Logo from "../asset/bhp-logo 2.png"
import Question1 from "../asset/checklist/harnessDoc.png";
import Question2 from "../asset/checklist/accesoriesDoc.png";
import Question3 from "../asset/checklist/ropeDoc.png";
import Question4 from "../asset/checklist/anclajeDoc.png";
import Draw from "../asset/grafic.png";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
 
const Doc = (props) => {
  const { user, position } = props;
 
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 25, 10, 160, 280); //margen izq, margen top, width heigth
      pdf.save("download.pdf");
    });
  };
 
  return (
    <>
    <div id="divToPrint">
      <div className="imgLeft">
      <img className="logoDoc" src= {Logo} alt="logo" />
      </div>
      <h1 className="titleDoc">
        Validación Guía de Cumplimiento de Estándar SDDC
      </h1>
      <h2 className="textDoc"> Nombre de usuario : {user} </h2>
      <h2 className="textDoc"> Nombre de cargo : {position} </h2>
      <h2 className="textDoc"> Fecha y hora de emisión : </h2>
      <hr />
      <h5 className="titleDoc2">
        CHECKLIST ARNÉS DE SEGURIDAD Y PUNTOS DE ANCLAJE
      </h5>
      <div className="containerAnswer">
        <img src={Question1} className="correctAnswer" alt="Question1"></img>
        <img src={Question2} className="correctAnswer" alt="Question2"></img>
        <img src={Question3} className="correctAnswer" alt="Question3"></img>
        <img src={Question4} className="correctAnswer" alt="Question4"></img>
      </div>
 
      <pagebreak />
      <h5 className="titleDoc2">CALCULO DE ESPACIO LIBRE DE CAÍDA</h5>
      <div className="result">
        <div>
          <h2 className="textDoc">LE=</h2>
          <h2 className="textDoc">EA=</h2>
          <h2 className="textDoc">ET=</h2>
          <h2 className="textDoc">MS=</h2> <br />
 
          <h2 className="textDoc">RESULTADO ELC=</h2>
        </div>
        <div></div>
        <img src={Draw} alt="Draw"></img>
      </div>
      <br />
      <h5 className="titleDoc2">
        El resultado del ELC permite realizar el trabajo en altura, de acuerdo
        al estándar
      </h5>
      <div className="containerBtn">
        <hr width="120" size="5" />
        <h1 className="textDoc">Firma y Timbre </h1>
        <h1> {user} </h1>
        <h1> {position} </h1>
      </div>
    </div>
    <div className="containerBtn">
      <button className="btn btn-primary" onClick={printDocument}>
          Descargar PDF
        </button>
      </div>
</>
      
  );
};
export default Doc;