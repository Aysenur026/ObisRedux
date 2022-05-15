
import React, { useEffect, useState } from "react";
import {getDocs,collection} from "firebase/firestore";
import {db} from '../firebase';

   
function SınavPage2 (){

    const [postLists,setPostList] = useState([]);

    const postCollection =collection(db,"soruPost");
     useEffect(() => {
        const getPosts = async() =>{
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ))
        };
        getPosts();
    });

    return(
        <div className="pages">
           <div className="soruGet p-5">
    
    {postLists.map((post)=> {
        return<div></div>
        
    })}
    </div></div>
    );
    
}
export default SınavPage2;