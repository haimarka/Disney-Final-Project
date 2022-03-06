import Styles from '../CSS/Styles.module.css'


export default function About({fontIncrease, colorReversal}) {
  return (
    <div className={Styles.aboutFather}>
        <h1 style={{color: colorReversal ? "white" : "black",marginLeft:'-50%'}}>About Us</h1>
        <div className={Styles.aboutConteiner}>
                <p style={{fontSize: fontIncrease? '300%':'150%',transition:'1s',color: colorReversal ? "white" : "black"}} className={Styles.aboutParagraph}>
                  welcome to disney movies and products , by haim arka. disney have the hottest movies available to you , products
                  from the first class and more lovley disney charecters decoreition. our goal is to make sure thet our users
                  will take a part of a big jurny to the hero within them, and we belive thet by watching our movies they cen be a 
                  better people and more Optimistic. so what do you wating for?! FLY WITH US!
                </p>
                <ul className={Styles.aboutList}>
                  <h4>With the experience of our site, users receive bonuses such as:</h4>
                  <li> movies with the higher view quality (HD).</li>
                  <li> Personal assistance regarding problems on the site.</li>
                </ul>
        </div>
    </div>
  );
}
