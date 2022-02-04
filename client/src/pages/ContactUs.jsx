import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Styles from '../CSS/Styles.module.css'


export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messagesData, setMessagesData] = useState(null);
    useEffect(()=>{
      getMessages()
    },[]);

    const getMessages = ()=>{
      axios
      .get('http://localhost:8082/contact-us')
      .then(res=>{
        setMessagesData(res.data);
      })
      .catch(err=>console.log(err.response))
    }
    

    const postMessages = ()=>{
      axios
      .post('http://localhost:8082/contact-us',{
        name, email, message
      })
      .then(res=>{
        console.log(res);
        getMessages()
      })
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
                postMessages()
            }}>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name' /><br />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='enter your email' /><br />
                <textarea onChange={(e)=>setMessage(e.target.value)} placeholder='leave message'></textarea><br />
                <input type="submit" value="send" />
            </form>
       </section>
          <div>
            {messagesData !== null && messagesData.map((mes,i)=>{
                  return(
                      <div key={i}>
                        <p>{mes.name}</p>
                        <p>{mes.email}</p>
                        <p>{mes.message}</p>
                      </div>
                  )
                })}
          </div>
    </div>
  );
}
