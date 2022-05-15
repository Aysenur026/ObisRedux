import React,{useEffect,useState} from "react";
import {db} from '../firebase';

import "./SınavBtn.css";
import SınavEkle from "../OgretmenPage/SınavEkle";


import "../FEATURES/store";

function SınavOl() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
      db.collection("questions")
      .onSnapshot((snapshot)=>
      setPosts(
        snapshot.docs.map((doc)=>({
          id:doc.id,
          question:doc.data(),
        }))
      )
      );
    },[]);
        
 
  

 
 /*
  const [postLists,setPostList] = useState([]);

    const postCollection =collection(db,"soruPost");
     useEffect(() => {
        const getPosts = async() =>{
          
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ))
        };
        getPosts();
    });
     
*/
    return(

        <div className="pages">
        
        {posts.map(({id,question})=> (
         <SınavEkle
           key={id}
           question={question.question}
           quoraUser={question.user}
         
         
         />
        )
        )}
    </div>
);
    

        }
  export default SınavOl;
 