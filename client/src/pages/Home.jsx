import React from 'react';
import { useState ,useEffect} from 'react/cjs/react.development';
import Styles from '../CSS/Styles.module.css'


export default function Home({auth, fontIncrease, colorReversal}) {
  const [message, setMessage] = useState(false);

  useEffect(massageHandler,[])

  function massageHandler (){
    return (  setTimeout(() => {
      setMessage(true)
        }, 1000))
    }

    function clearMassageHandler (){
      return (  setTimeout(() => {
        setMessage(false)
          }, 4000))
      }
      
    clearMassageHandler()
  let styleMessage = {display: message?'block':'none'}  
  return (
    <div className={Styles.homeConteiner}>
        <h3 style={{fontSize: fontIncrease? '300%':'200%',color: colorReversal ? "white" : "black",transition:'1s'}}>home page</h3>

        {auth?<h1 className={Styles.homeMessage} style={styleMessage}>welcome {auth.email}</h1>:message?<h1 className={Styles.homeMessage} style={{marginLeft:'35%'}}>Disney Movies</h1>:""}

        <section className={Styles.cardsContainer}>
            <div className={Styles.card}>
            <img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/07/Disney-movies-to-watch.jpeg" alt="" />
            </div>
            <div className={Styles.card}>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/disney-movies-1613592418.jpg" alt="" />
            </div>
            <div className={Styles.card}>
                <img src="https://static-assets.bamgrid.com/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png" alt="" />
                
            </div>
            <div className={Styles.card}>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-best-disney-movies-1532711573.jpg" alt="" />
            </div>
            <div className={Styles.card}>
                <img src="http://blog.touringplans.com/wp-content/uploads/2014/12/Disney_MCOkk.jpg" alt="" />
            </div>
          </section>
    </div>
  );
}
