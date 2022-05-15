import React from "react";
import {getDocs,collection} from "firebase/firestore";
import { db} from '../firebase';
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import { selectAnswers, selectQuestion } from "../FEATURES/Slice/soruSlice";
import "../FEATURES/actionTypes";
import "../FEATURES/action";
import "../FEATURES/store";


   
function SınavPage (){
     
      const question=useSelector(selectQuestion);
      const answers =useSelector(selectAnswers);
       
     
      const getPosts=async()=>{

            await getDocs(collection(db,"soruPost"),{
             soru:question,
             secenek:answers,
          });
            getPosts();
          
         
         
      
    /*const [postLists,setPostList] = useState([]);*/
    
    /*const postCollection =collection(db,"soruPost");
     
        const getPosts = async() =>{
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ))
        };
        getPosts(
        );*/
       
       

   /* const [radioSec,setRadioSec]=useState(""); 
    const handleRadio=(e)=>{
    console.warn(e.target.value);
     setRadioSec();
  }*/
     
};  

    return (
       <div className="pages">
           <div className="soruGet p-5">
    
    {getPosts.map((sorular)=> {
      
      return<div className="post" key={sorular.id}>
      <div className="posts">
       <div className="card-body p-5">
          
       <div className="container-check" id="change" >
      
                 <p className="text-muted mb-0">{sorular.question}</p>
                 <hr></hr>
                 <input className="container-check-input" id="answer" type="radio" value="answer" />
                 <label className="container-check-label">{sorular.answers}</label>
                 <hr></hr>
                 
               </div>


               <button><Link to={"/sinavpage1/"+sorular.id+sorular.soruID}style={{ color: "#113" }}>Devam Et</Link></button>
             
                 </div>
                 </div></div>
})}
    </div>
       </div>

    );


}
      

      



export default SınavPage;