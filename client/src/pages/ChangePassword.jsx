import {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

// eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImRpc25leS1tb3ZpZXMtNGVjZTYiLCJpYXQiOjE2NDMyMTc2ODMsImV4cCI6MTY0NDQyNzI4MywidXNlcl9pZCI6IjI1WEFPRFJVcndobDc5ZnFReVZRWThta0l3OTIiLCJlbWFpbCI6IjFAMS4xIiwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIiwidmVyaWZpZWQiOmZhbHNlfQ.LFVAXbxOQkO1rUydBV-Bw9bjnGU7mPf3DJvePxX8M2ddEr45hf-cXuky1z0lpAI8DQ9gRtnP8txHvVo0KJeQ6bxNenSJF-nnv79Vq825LI8QKFuy64mkRc9xFM2Oud6EaE0Bw1swmLOkEgWBZZ4TMPNJVFJE-qwwAJhBKf-YPapSS_-ZmJHuftJ8xBvdR2kbMijSYk_M8F5uUmog_oxsL6SE5TrDNJB36tW-YPiUP-lCuyj5ZFcDUNguALzwWGabJSTwKqSi1Q9QiHpnrdXChcSG_q5jrW3QoNbqxtCEWcnvLqMjQRqTJwB4ymY8RSWSZrW2CR4z5KOqZW8y5FVM7A

export default function ChangePassword({auth}) {
    // const [idToken, setIdToken] = useState('')
    const [password, setNewPassword] = useState('')
    const API_KEY = 'AIzaSyDrW5Bi1EI5iKKZCNYj17T2Lxqw0KsCaiM';
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`
    if(auth) return <Redirect to='/LogIn'/>
    const newPasswordHandler = ()=>{
        axios
        .post(URL,{
            idToken: auth.idToken,
            password
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <h1>change password</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            newPasswordHandler()
        }}>
            <input onChange={(e)=>{setNewPassword(e.target.value)}} type="password" placeholder='enter new password' /> <br />
            <input type="submit" value="change" />
        </form>
    </div>
  );
}
