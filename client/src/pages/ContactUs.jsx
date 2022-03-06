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
    <div className={Styles.contactUsContainer}>
      <img className={Styles.contactUsImage} src='https://www.wallpaperup.com/uploads/wallpapers/2017/07/09/1094123/d013aa85facfc7d311f8d24b629dba54-700.jpg' alt='Monsters INC'/>
      <h1 className={Styles.contactUsTitle}>Contact Us</h1>
       <section className={Styles.contactUsFormContainer}>
          <h4>Leave your personal details and we will contact you soon</h4>
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
          <div className={Styles.contactUsDetailes}>
            {messagesData !== null && messagesData.map((mes,i)=>{
                  return(
                      <div key={i}>
                        <h3>{mes.name}</h3>
                        <h3>{mes.email}</h3>
                        <p>{mes.message}</p>
                        <hr/>
                      </div>
                  )
                })}
                {/* <img style={{borderRadius:'40%'}} src="https://media3.giphy.com/media/IG6i30q4DMT0Q/giphy.gif?cid=ecf05e4701s0ap7kq1cbgou6p8hhfnlwrwrnotl4a6ayo95i&rid=giphy.gif&ct=g" alt="" /> */}
          </div>
    </div>
  );
}
