import React, { useState } from "react"
import "./App.css"

function ModelForm() {
  const [modalstatus, setModalstatus] = useState(false)
  return (
    <div>
      <button className="enquiryBtn" onClick={()=>setModalstatus(true)}>Enquiry Now</button>
      <div onClick={()=>setModalstatus(false)} className={`modalOverlay ${ modalstatus ? "modalShow" : "" }`}></div>
      <div className={`modalDiv ${ modalstatus ? "showModalDiv" : "" }`}>
        <h3>Enquiry Form <span onClick={()=>setModalstatus(false)}  style={{ cursor: "pointer", float: "right" }}>&times;</span></h3>
      </div>
    </div>
  )
}

export default ModelForm


// import "./App.css"
// .modalOverlay{
//     width: 100%;
//     height: 100%;
//     display: none;
//     position: fixed;
//     background-color:rgba(0, 0, 0, 0.5) ;
// }
// .modalShow{
//  display: block;
// }

// .modalDiv{
//     width: 320px;
//     position: fixed;
//     z-index: 1;
//     height: 320px;
//     transition:0.5s ease-in-out;
//     left: 50%;
//     top: -500px;
//     transform: translate(-50%, -50%);
//     background-color: white;
//     border: 2px solid black;
// }
// .showModalDiv{
//     top: 50%;
// }
// .enquiryBtn{
//     position: fixed;
//     right: -30px;
//     top: 100px;
//     transform: rotate(90deg);
// }

// /* ----------------------------------------------------------------- */

// /* --- Modal Overlay --- */
// .modalOverlay {
//     width: 100%;
//     height: 100%;
//     display: none;
//     position: fixed;
//     background-color: rgba(0, 0, 0, 0.5);
//     top: 0;
//     left: 0;
//     z-index: 999;
// }

// .modalShow {
//     display: block;
// }

// /* --- Modal Box --- */
// .modalDiv {
//     width: 320px;
//     position: fixed;
//     z-index: 1000;
//     height: 320px;
//     transition: top 0.5s ease-in-out;
//     left: 50%;
//     top: -500px; /* initially hidden above the viewport */
//     transform: translateX(-50%);
//     background-color: white;
//     border: 2px solid black;
//     border-radius: 10px;
//     padding: 20px;
// }

// .showModalDiv {
//     top: 50%;
//     transform: translate(-50%, -50%);
// }

// /* --- Enquiry Button --- */
// .enquiryBtn {
//     position: fixed;
//     right: -35px;
//     top: 180px; /* 👈 "Sit nich" – bring it a little lower */
//     transform: rotate(90deg);
//     padding: 10px 20px;
//     background-color: #007bff;
//     color: white;
//     font-size: 16px;
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
// }

// .enquiryBtn:hover {
//     background-color: #0056b3;
// }
