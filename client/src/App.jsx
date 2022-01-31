import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import {Home,Register,LogIn,ChangePassword,AllMovies,Navigation,Accessibilty,MoviesSolution} from './components'
import {ContactUs,About,Store,Cart } from './pages'
import {SelectedMovies,InCinemas,FamilyMovies,WatchAtHome,MoreMovies} from './pages/all_movies'
import useFetch from "./Hooks/useFetch";
import useFetchMovies from "./Hooks/useFetchMovies";
import Styles from "./CSS/Styles.module.css";


function App() {
  const [auth, setAuth] = useState(null);
  const [data, setData] = useFetch("./data.json");
  const [moviesData] = useFetchMovies("./moviesData.json");
  const [colorReversal, setColorReversal] = useState(false); 
  const [fontIncrease, setFontIncrease] = useState(false);
  const [highlighting, setHighlighting] = useState(false);
  const [accessibilyList, setAccessibilyList] = useState("block");
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieSrc, setMovieSrc] = useState(null);
  const [cartTotalPrice, setcartTotalPrice] = useState(0);
  const [cartTotalQuantity, setcartTotalQuantity] = useState(0);
  const AUTH_LOCAL_STORAGE = "Users";

  useEffect(() => {
    let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
    return authStorage ? setAuth(authStorage.data) : null;
  }, []);

  const logOutHeandler = () => {
    localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(""));
    setAuth(null);
    document.location.href = "/";
  };


  const calculatePrice = (updateData)=>{
    let price = 0; let quantity = 0;
    updateData.forEach(element => {
        price += element.price * element.quantity
        quantity += element.quantity
    });
    setcartTotalPrice(price);
    setcartTotalQuantity(quantity);
    setData(updateData);
}

const addProducts = (i)=>{
    let temp = [...data];
    temp[i].added = true;
    temp[i].quantity ++;
    temp[i].message = 'Thanks For Buying';
    calculatePrice(temp)
    
}

const subtractProducts = (i)=>{
    let temp = [...data];
    temp[i].quantity --;
    temp[i].added = temp[i].quantity > 0;
    if(temp[i].quantity <= 0) temp[i].quantity = 0;
    temp[i].message = '';
    calculatePrice(temp);
}


return (
<BrowserRouter>
<div className="App" style={{ backgroundColor: colorReversal ? "black" : "white" }}>
    <Navigation highlighting={highlighting} colorReversal={colorReversal} auth={auth}/>
  {/*  logo */}
  <img
    id={Styles.logo}
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1280px-Disney_wordmark.svg.png"
    alt="disney logo"
    width="150px"
    height="100px"
    title="disney"/>  
        <Accessibilty 
            setAccessibilyList={setAccessibilyList} accessibilyList={accessibilyList} 
            setHighlighting={setHighlighting} highlighting={highlighting} 
            setFontIncrease={setFontIncrease} fontIncrease={fontIncrease} 
            colorReversal={colorReversal}   setColorReversal={setColorReversal}
        />
        {auth ? (<button title="click to sign out" className={Styles.signOutBtn} onClick={logOutHeandler}
            >
            sign out
          </button>
        ) : ("")}
        
        
        <Switch>
          <Route exact path="/" render={() => (
              <Home
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                auth={auth}
              />
            )}
          />
          <Route exact path="/Register" render={() =>
             <Register
              auth={auth}
               setAuth={setAuth}
                />}/>
          <Route exact path="/LogIn" render={() => 
          <LogIn 
          auth={auth}
           setAuth={setAuth}
            />}
          />
          <Route exact path="/ChangePassword" render={() => 
          <ChangePassword
           auth={auth} />}
          />
          <Route exact path="/AllMovies" render={() => (
              <AllMovies
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/SelectedMovies" render={() => (
              <SelectedMovies
                movieTrailer={movieTrailer}
                setMovieTrailer={setMovieTrailer}
                moviesData={moviesData} 
                movieSrc={movieSrc}
                setMovieSrc={setMovieSrc} 
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/InCinemas" render={() => (
              <InCinemas
                movieTrailer={movieTrailer}
                setMovieTrailer={setMovieTrailer}
                moviesData={moviesData}
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/FamilyMovies" render={() => (
              <FamilyMovies
                movieTrailer={movieTrailer}
                setMovieTrailer={setMovieTrailer}
                moviesData={moviesData}
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/WatchAtHome" render={() => (
              <WatchAtHome
                movieTrailer={movieTrailer}
                setMovieTrailer={setMovieTrailer}
                moviesData={moviesData}
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/MoreMovies" render={() => (
              <MoreMovies
                movieTrailer={movieTrailer}
                setMovieTrailer={setMovieTrailer}
                moviesData={moviesData}
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/ContactUs" render={() => <ContactUs />} />
          <Route exact path="/About" render={() => (
              <About
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
              />
            )}
          />
          <Route exact path="/Store" render={() => (
              <Store
              addProducts={addProducts}
              subtractProducts={subtractProducts}
                fontIncrease={fontIncrease}
                colorReversal={colorReversal}
                cartTotalPrice={cartTotalPrice}
                cartTotalQuantity={cartTotalQuantity}
                data={data}
              />
            )}
          />
          <Route exact path="/Cart" render={() => (
              <Cart
              subtractProducts={subtractProducts}
                cartTotalPrice={cartTotalPrice}
                cartTotalQuantity={cartTotalQuantity}
                data={data}
              />
            )}
          />
          <Route exact path="/MoviesSolution" render={() => (
              <MoviesSolution
                auth={auth}
                setMovieTrailer={setMovieTrailer}
                movieTrailer={movieTrailer}
                movieSrc={movieSrc}
                setMovieSrc={setMovieSrc}
              />
            )}
          />
        </Switch>{" "}
        <br />
        <footer style={{
              fontSize: fontIncrease ? "300%" : "150%",
              color: colorReversal ? "white" : "black",
              transition: "1s"
          }}
          className={Styles.footer}
        >
          copyRight saves to haim arka 2022
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
