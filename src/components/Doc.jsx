import React from 'react'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'

const Doc = (props) => {
    const {user, position} = props;

    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
          })
        ;
      }

    return (
        <div id='divToPrint'>
            <h2> Nombre de usuario : {user} </h2>
            <h2> Nombre de cargo : {position} </h2>
            <button onClick={printDocument}>Descargar PDF</button>
        </div>
    )
}
export default Doc