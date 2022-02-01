import {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Styles from '../CSS/Styles.module.css'

export default function Register({auth, setAuth}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const API_KEY = 'AIzaSyDrW5Bi1EI5iKKZCNYj17T2Lxqw0KsCaiM';
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    const AUTH_LOCAL_STORAGE = 'Users';

    const isValide = ()=>{
        return (email.length && password.length === confirmPassword.length)
    }

    if(auth){
        return <Redirect to='/'/>
    }

    const signUp = () =>{
        axios
        .post(URL,{
            email,
            password,
            confirmPassword
        })
        .then((res)=>{
            localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(res));
            setAuth(res.data)
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <h1>Register</h1>
            <img className={Styles.registerImage} src="" alt="" />
            <section className={Styles.registerConteiner}>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(isValide){
                        signUp()
                    }
                    }}>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='enter email' /> <br />
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='enter password' /> <br />
                    <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder='enter confirm password' /> <br />
                    <input type="submit" value="sign up" />
                </form>
            </section>
  
    </div>
  );
}
