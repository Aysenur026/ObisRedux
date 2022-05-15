/*import React, {Component} from "react";
import axios from 'axios';
class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        let id=this.props.match.params.post.id;
        axios.get('http://localhost:3000/posts/'+id)
        .then(res=>{
            this.setState({
                post:res.data
            })
            
        })
       
    
    }
render(){
    const post=this.state.post ? (
        <div className="post">
            <h4 className="center">{this.state.post.soru}</h4>
        
        
        </div>
    ) :(
        <div className="center">Yükleniyor...</div>
    )
    return(
        <div className="container">
            {post}
        </div>
    )
}

}
export default Post*/