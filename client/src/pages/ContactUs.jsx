import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Styles from '../CSS/Styles.module.css'


export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    let elements = [];
    const getPosts = ()=>{
      axios
      .post('/ContactUs',{
        name, email, message
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err.response))
    }
  return (
    <div>
      <h1>Contact Us</h1>
      <img className={Styles.contactUsImage} src="https://www.disneyclips.com/images/images/pluto-christmas4.png" alt="plooto hold latter" />
       <section className={Styles.contactUsContainer}>
          <h4>Leave your name and email and we will contact with you soon</h4>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(name,email, message);
                getPosts()
                console.log(elements);
            }}>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name' /><br />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='enter your email' /><br />
                <textarea onChange={(e)=>setMessage(e.target.value)} placeholder='leave message'></textarea><br />
                <input type="submit" value="send" />
            </form>
              
       </section>
    </div>
  );
}
