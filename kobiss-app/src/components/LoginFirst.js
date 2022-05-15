import React from "react";
import './stylelogin.css';
import "./Footer";
/*import Footer from "./Footer";*/
import { Link } from "react-router-dom";


function LoginFirst() {
    return (
  <><header className="LoginFirst-header">
         <div className="animated-title">
  <div className="text-top">
    <div>
      <span>KOBİS</span>
      <span>BİLGİ SİSTEMİ</span>
    </div>
  </div>
        
          <button className="btn m-5 "><Link to ="/ogrenci"style={{ color: "#fff" }}>Öğrenci</Link></button>
          <button className="btn "><Link to ="/ogretmen" style={{ color: "#fff" }}>Öğretmen</Link></button>
          
       </div>
</header>

      </>
     
    );
    
  }
  
  export default LoginFirst;
  