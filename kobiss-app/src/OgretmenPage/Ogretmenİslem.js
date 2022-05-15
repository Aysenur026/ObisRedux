import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser,setLogOut } from "../FEATURES/Slice/userSlice";
import { auth } from "../firebase";
function Ogretmenİslem() {
    const user = useSelector(selectUser)
      const dispatch = useDispatch();
      const navigate = useNavigate();
  
      const SignOut = () =>{
          auth.signOut().then(()=>{
              dispatch(setLogOut())
              navigate('/ogretmengiris')
          })
          .catch((error) => alert(error.message))
      }
    return(
        
      <div className="d-flex" id="wrapper">
      
      <div className="border-end bg-white" id="sidebar-wrapper">
      <img className="mb-4 rounded-circle me-2" src="https://st2.depositphotos.com/3867453/6842/v/600/depositphotos_68427499-stock-illustration-letter-k-logo-icon-design.jpg" alt="" width="50" height="50" ></img>
          <div className="list-group list-group-flush">
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Genel İşlemler</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Ders ve Dönem İşlemleri</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">YÖKSiS</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Formlar</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Kullanıcı İşlemleri</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Başvurularım</a>
              <li className="list-group-item list-group-item-action list-group-item-light p-3" ><Link to="/dersekle" style={{ color: "#113" }}>Ders Ekle</Link></li>
              <li className="list-group-item list-group-item-action list-group-item-light p-3" ><Link to="/sinavekle" style={{ color: "#113" }}>Sınav Ekle</Link></li>
             
          </div>
      </div>
     
      <div id="page-content-wrapper " style={{ minHeight: '100vh' }}>
         
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top ">
                    <div className="collapse navbar-collapse justify-content-end">
                  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                          <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                          <li className="nav-item dropdown">
                          <a href="!#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong _msthash="496067" _msttexthash="33306"><h5>{user?.displayName}</h5></strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow " aria-labelledby="dropdownUser1" _mstvisible="0">

        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115556" _msttexthash="94510" _mstvisible="2">Ayarlar</a></li>
        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115738" _msttexthash="77246" _mstvisible="2">Profil</a></li>
        <li _mstvisible="1"><hr className="dropdown-divider" _mstvisible="2"></hr></li>
        <li _mstvisible="1"><div onClick={SignOut}><a className="dropdown-item" href="/" _msthash="1116102" _msttexthash="163969" _mstvisible="2">Oturumu Kapat</a></div></li>
      </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
         
          <div className="container-flex p-5">
              <h1 className="mt-4">Akademisyen Sayfasına Hoşgeldiniz</h1>
              <br></br>
             
        
      </div>
  </div>
  </div>

);
}
export default Ogretmenİslem;