import React, { useEffect, useState } from "react";
import {getDocs,collection} from "firebase/firestore";
import {db} from '../firebase';
import { Link } from "react-router-dom";
   
function SınavPage1 (){

    const [postLists,setPostList] = useState([]);

    const postCollection =collection(db,"soruPost");
     useEffect(() => {
        const getPosts = async() =>{
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ))
        };
        getPosts();
    });

    const [radioSec,setRadioSec]=useState(""); 
    const handleRadio=(e)=>{
    console.warn(e.target.value);
     setRadioSec();
  }
              

    return (
       <div className="pages">
           <div className="soruGet p-5">
    
    {postLists.map((post)=> {
      
 return<><div className="post" key={post.id}>
    <div className="posts">
       <div className="card-body p-5">
       <p>{post.soruID}.Soru</p>
          <div className="container-check" id="change">
             <p className="text-muted mb-0">{post.soru}</p>
             <hr></hr>
             <input className="container-check-input" id="A" type="radio" value="A" checked={radioSec === "A"} onChange={handleRadio} />
             <label className="container-check-label">{post.a}</label>
             <hr></hr>
             <input className="container-check-input" id="B" type="radio" value="B" checked={radioSec === "B"} onChange={handleRadio} />
             <label className="container-check-label">{post.b}</label>

             <hr></hr>
             <input className="container-check-input" id="C" type="radio" value="C" checked={radioSec === "C"} onChange={handleRadio} />
             <label className="container-check-label">{post.c}</label>

             <hr></hr>
             <input className="container-check-input" id="D" type="radio" value="D" checked={radioSec === "D"} onChange={handleRadio} />
             <label className="container-check-label">{post.d}</label>
          </div>
       </div>
    </div></div><button><Link to={"/sinavpage2/" + post.id+"/"+post.soruID} style={{ color: "#113" }}>Devam Et</Link></button></>
})}
    </div>



o                                                                                 
       </div>




    )


}


export default SınavPage1;