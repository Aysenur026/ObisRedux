import React, { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,

} from '../firebase';
import { useDispatch } from 'react-redux';
import { setLogIn } from '../FEATURES/Slice/userSlice';
import './stylelogin.css';
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const dispatch = useDispatch();

  const navigate=useNavigate();
 

  const register=(e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((userAuth)=>{
      dispatch(
        setLogIn({
         email: userAuth.user.email,
         uid: userAuth.user.uid,
         displayName: userAuth.user.displayName,
        })
      )
      navigate('/ogretmenislem')
    })
    .catch((error)=>{
      alert(error.code+error.message)
      document.getElementById("password").value="";
    })
   
   
   
   }

  return (
    <div className='login'>
      <img src='Linkedin_Logo_text.svg' alt='' />
      <form>
        
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Akademik Email Adresiniz'
          type='email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Şifreniz'
          type='password'
        />
         <button type="submit" onClick={register}>Sign In</button>
      </form>

     
    </div>
  );
}

export default Login;