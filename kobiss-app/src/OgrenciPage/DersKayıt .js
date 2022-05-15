import React, { useEffect, useState } from "react";
import {getDocs,collection} from "firebase/firestore";
import {db} from '../firebase';
import DersKayıtDogrulama from  "./DersKayıtDogrulama";

function DersKayıt() {
    
    const [postLists,setPostList] = useState([]);

    
    const postCollection =collection(db,"dersPost");
    
    useEffect(() => {
        const getPosts = async() =>{
            
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ));
        };
        getPosts();
    });

    return(
      <div className="d-flex" id="wrapper">

<div className="border-end bg-white" id="sidebar-wrapper">
        <img className="mb-4 rounded-circle me-2" src="https://st2.depositphotos.com/3867453/6842/v/600/depositphotos_68427499-stock-illustration-letter-k-logo-icon-design.jpg" alt="" width="50" height="50"></img>
        <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Genel İşlemler</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Ders ve Dönem İşlemleri</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">YÖKSiS</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Formlar</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Kullanıcı İşlemleri</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Başvurularım</a>
        </div>
    </div><div id="page-content-wrapper ">

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
        <strong _msthash="496067" _msttexthash="33306">1815225566.........</strong>
    </a>
    <ul className="dropdown-menu dropdown-menu-dark text-small shadow " aria-labelledby="dropdownUser1" _mstvisible="0">

        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115556" _msttexthash="94510" _mstvisible="2">Ayarlar</a></li>
        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115738" _msttexthash="77246" _mstvisible="2">Profil</a></li>
        <li _mstvisible="1"><hr className="dropdown-divider" _mstvisible="2"></hr></li>
        <li _mstvisible="1"><a className="dropdown-item" href="/" _msthash="1116102" _msttexthash="163969" _mstvisible="2">Oturumu Kapat</a></li>
    </ul></li></ul></div></div></nav>
      <br></br>
        
      <div className="container">
      <div className="container m-5">
            <div className="row">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <span className="navbar-brand ">Lütfen Eklemek İstediğiniz Dersi Seçiniz</span>
                        </div>
                    </div>
                </nav>
            </div>
            <br></br>
<div className="row">
<div className="col-md-10 col-md-offset-1">
<div className="panel panel-default panel-table">
    <div className="panel-heading">
        <div className="row">
            <div className="col col-xs-6">
                <h3 className="panel-title">Ders Kayıt Ekranı</h3>
            </div>
<div className="col col-xs-6 text-right">
    <div className="pull-right">
        <div className="btn-group" data-toggle="buttons">
            <label className="btn btn-success btn-filter active" data-target="completed">
                <input type="radio" name="options" id="option1" autocomplete="off" />Güz Dönemi
            </label>
            <label className="btn btn-warning btn-filter" data-target="pending">
                <input type="radio" name="options" id="option2" autocomplete="off" /> Bahar Dönemi
            </label>
            <label className="btn btn-default btn-filter" data-target="all">
                <input type="radio" name="options" id="option3" autocomplete="off" /> Hepsi
            </label>
        </div>
    </div>
</div>
</div>
    </div>
    
      <div className="dersGet">
    {postLists.map((post)=> {
    return <><div className="post">


        <div className="panel-body">
            <table id="mytable" className="table table-striped table-bordered table-list">
                <thead>
                    <tr>

                        <th className="col-tools"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                        </th>
                        <th className="hidden-xs">ID</th>
                        <th className="col-text">Ders Adı</th>

                    </tr>
                </thead>
                <tbody>
                    <tr data-status="completed">
                        <td align="center"><input type="checkbox" className="checkthis" /></td>
                        <td className="hidden-xs">{post.id}</td>
                        <td>{post.dersEkle}</td>

                    </tr>

                </tbody>
            </table>

        </div>
        <div className="col col-xs-3">
            <div className="pull-right">
                
            </div>
        </div>
    </div>
    <br></br><hr></hr>
    <DersKayıtDogrulama></DersKayıtDogrulama>
    </>
 
    })}
    </div>
    </div>
    </div></div></div></div></div></div>
    )
    
    }
 
        export default DersKayıt;