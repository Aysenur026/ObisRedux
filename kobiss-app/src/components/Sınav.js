/*import React ,{Component} from 'react';
import axios from "axios";
import {getDocs,collection} from "firebase/firestore";
import { db} from '../firebase';
import { Link } from "react-router-dom";
 

class Sınav extends Component{

    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3000/posts')
        .then (res=>{
            console.log(res)
            this.setState({
                posts:res.data.slice(0,10)
                 })
        })
    }
    
render(){
    const {posts} =this.state;
    const postLists = posts.lenght ?(
        {postLists.map((post => {
            return(
                <div className="posts" key={post.id}>
                <div className="card-content">
                    <Link to={'/' + post.id}></Link>
                <div className="container-check" id="change" >
                         <p className="text-muted mb-0">{post.soru}</p>
                         <hr></hr>
                 <input className="container-check-input" id="A" type="radio" value="A" checked={radioSec==="A"} onChange={handleRadio}/>
                 <label className="container-check-label">{post.a}</label>
                 <hr></hr>
                 <input className="container-check-input" id="B" type="radio" value="B" checked={radioSec==="B"} onChange={handleRadio}/>
                 <label className="container-check-label">{post.b}</label>

                 <hr></hr>
                 <input className="container-check-input" id="C" type="radio" value="C" checked={radioSec==="C"} onChange={handleRadio}/>
                 <label className="container-check-label">{post.c}</label>

                 <hr></hr>
                 <input className="container-check-input" id="D" type="radio" value="D" checked={radioSec==="D"} onChange={handleRadio}/>
                 <label className="container-check-label">{post.d}</label>
               </div>
         </div>
        </div>

            )
        }))}
        ):(
            <div className='center' >Bulunamadı</div>
        )
      
        return(
          <div className='container'>
              <h4 className='center'>Sınav Ekranı</h4>
              {postLists}
          </div>
           )

        }     
    }  

export default Sınav;*/