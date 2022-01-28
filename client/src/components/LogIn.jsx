import { Link } from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Styles from '../CSS/Styles.module.css'


export default function LogIn({auth, setAuth}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const API_KEY = 'AIzaSyDrW5Bi1EI5iKKZCNYj17T2Lxqw0KsCaiM';
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    const AUTH_LOCAL_STORAGE = 'Users';

    if(auth){
        return <Redirect to='/'/>
    }

    const logInUser = ()=>{
        axios
        .post(URL,{
            email,
            password
        })
        .then((res)=>{
            console.log(res);
            localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(res));
            setAuth(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
  return (
        <div>
            <h1>Log In</h1>
            <img src="" alt="" />
                <section className={Styles.logInConteiner}>
                    <form onSubmit={(e)=>{
                            e.preventDefault();
                            logInUser()
                            }}>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='enter email' /> <br /> 
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='enter password' /> <br />
                        <input type="submit" value="sign in" />
                    </form> 
                </section>  
            <Link to='changePassword'>change password</Link> 
        </div>
  );
}
