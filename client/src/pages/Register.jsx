import {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Styles from '../CSS/Styles.module.css'

export default function Register({auth, setAuth,usersData, setUsersData}) {
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

    const postNewUser = ()=>{
        let temp = [...usersData];
        const newUser = { email:email, watchList:[], cart:[], active:auth?true:false};
        temp.push(newUser)
        axios
        .post('http://localhost:8082/users',newUser)
        .then(res=>{
          console.log(res);
          setUsersData(temp)
        })
        .catch(err=>console.log(err.response))
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
            setAuth(res.data);
            // postNewUser();
            console.log('working');
        })
        .catch((err)=>{
            console.log(err);
            console.log('not working');
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
                        postNewUser();
                        signUp();
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
