/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Timer from "./Timer";
import "./Modal.css";
import SınavOl from "../OgrenciPage/SınavOl";


 
function ModalAc (){
 
       
    const history = useNavigate();
  
    const [modalOpen,setModalOpen]=useState(false);

    const onTimeout = () => {
      console.log('navigate now');
      history('/sinavsonuc');
    } 
     const devambtn =() =>{
      console.log('navigate now');
      history('/modalsinav');
     }

    
    
     return(
     <>
     <div className="baslik">
      <h1>Sınav Ekranına Hoşgeldiniz</h1>
      <h2 >Başarılar...</h2></div>
         <div>
       <button className="button p-3" onClick={() => setModalOpen(true)}>Sınava Gir</button></div><Modal isOpen={modalOpen}>

    <div className="ModalTitle"><h2>Soru :
      <button className="close-modal" onClick={() => setModalOpen(false)}>x</button></h2></div>
    <div className="timer">
      <div className="container">
        <div className="timer-container">
          <div className="loader">
            <Timer onTimeout={onTimeout}></Timer>
          </div>
          <div className="ModalBody">
              <SınavOl></SınavOl>
          
                 </div>
              
    </div></div></div>

          <div className="ModalFooter">
            <div>
              <button className="devambtn" onClick={devambtn}>Devam Et</button>
            </div>
            </div>
  </Modal></>
     );

  
}

export default ModalAc;*/