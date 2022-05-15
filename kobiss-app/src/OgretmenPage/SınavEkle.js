
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addSoru} from "../FEATURES/Slice/soruSlice";
/*import { store } from "../FEATURES/store";*/

const SınavEkle = () => {
  
  const [question,setQuestion] =useState('');
  const [answerA,setAnswerA]=useState('');
  const [answerB,setAnswerB]=useState('');
  const [answerC,setAnswerC]=useState('');
  const [answerD,setAnswerD]=useState('');
  const dispatch = useDispatch();

  const addSoruHandler=(e)=>{
    e.preventDefault();
    dispatch(
      addSoru({
        question,
        answerA,
        answerB,
        answerC,
        answerD
      }),
      /*store.firestore.add({})*/
    )
  }
  
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
          <img src="https://st2.depositphotos.com/3867453/6842/v/600/depositphotos_68427499-stock-illustration-letter-k-logo-icon-design.jpg" alt="" width="50" height="50" className="rounded-circle me-2"></img>
          <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Genel İşlemler</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Ders ve Dönem İşlemleri</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">YÖKSiS</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Formlar</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Kullanıcı İşlemleri</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Başvurularım</a>
          </div>
        </div><div id="page-content-wrapper " style={{ minHeight: '100vh' }}>

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
                        <strong _msthash="496067" _msttexthash="33306">Akademisyen Doç.Dr.Mr.Smith</strong>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark text-small shadow " aria-labelledby="dropdownUser1" _mstvisible="0">

                        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115556" _msttexthash="94510" _mstvisible="2">Ayarlar</a></li>
                        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115738" _msttexthash="77246" _mstvisible="2">Profil</a></li>
                        <li _mstvisible="1"><hr className="dropdown-divider" _mstvisible="2"></hr></li>
                        <li _mstvisible="1"><a className="dropdown-item" href="/" _msthash="1116102" _msttexthash="163969" _mstvisible="2">Oturumu Kapat</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>


            <div className="container d-flex align-item-center justify-content-center w-100 p-5 h-100">

              <div className="card p-5" style={{ minWidth: '500px' }}>
                <div className="card-header">
                  Sınav Ekleme Ekranı
                </div>
                <div className="card-body p-5">

                  <div className="form-group" >
                    <label>Soru</label>
                    <input className="form-control"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder='soruyu yazınız'
                      type='question' />
                  </div>

                  <div className="form-group">
                    <label>Şıklar</label>
                    <input className="form-control"
                      value={answerA}
                      onChange={(e) => setAnswerA(e.target.value)}
                      placeholder="Şıkkı yazınız"
                      type='answer'
                      />
                       <input className="form-control"
                      value={answerB}
                      onChange={(e) => setAnswerB(e.target.value)}
                      placeholder="Şıkkı yazınız"
                      type='answer'
                      />
                       <input className="form-control"
                      value={answerC}
                      onChange={(e) => setAnswerC(e.target.value)}
                      placeholder="Şıkkı yazınız"
                      type='answer'
                      />
                       <input className="form-control"
                      value={answerD}
                      onChange={(e) => setAnswerD(e.target.value)}
                      placeholder="Şıkkı yazınız"
                      type='answer'
                      />
                  </div>
               



                  <button className="btn btn-primary btn-block form-group-center col-md-10 m-5" type="submit" onClick={addSoruHandler}>Sınav Ekle</button>
                </div>
              </div>
            </div>
          </div></div>             

  );

}
export default SınavEkle;