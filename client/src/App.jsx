import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import useFetch from "./Hooks/useFetch";
// import useFetchMovies from "./Hooks/useFetchMovies";
import {Navigation,Accessibilty} from './components'
import {ContactUs,About,Store,Cart, WatchList,Home,Register,LogIn,ChangePassword,AllMovies, MoviesSolution, ErrorPage } from './pages';
import {SelectedMovies,InCinemas,FamilyMovies,WatchAtHome,MoreMovies} from './pages/all_movies'
import axios from 'axios';
import "./App.css";
import Styles from "./CSS/Styles.module.css";


function App() {
  const [auth, setAuth] = useState(null);
  // const [data, setData] = useFetch("./data.json");
  // const [moviesData] = useFetchMovies("./moviesData.json");
  const [colorReversal, setColorReversal] = useState(false); 
  const [fontIncrease, setFontIncrease] = useState(false);
  const [highlighting, setHighlighting] = useState(false);
  const [accessibilyList, setAccessibilyList] = useState("block");
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieSrc, setMovieSrc] = useState(null);
  const [watchList, setWatchList] = useState(null);
  const [cartTotalPrice, setcartTotalPrice] = useState(0);
  const [cartTotalQuantity, setcartTotalQuantity] = useState(0);
  const [moviesData, setMoviesData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [usersData, setUsersData] = useState([])
  const AUTH_LOCAL_STORAGE = "Users";

  useEffect(() => {
    getUsers();
    getMovies();
    getProducts();
    getCart();
    let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
    return authStorage ? setAuth(authStorage.data) : null;
  }, []);

const logOutHeandler = () => {
  localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(""));
  setAuth(null);
  document.location.href = "/";
};

const getUsers = () => {
  axios 
  .get('http://localhost:8082/users')
  .then(res=>{
      setUsersData(res.data);
  })
  .catch(err=>console.log(err.response))
}

const getCart = () => {
  axios 
  .get('http://localhost:8082/users/cart')
  .then(res=>{
      setUsersData(res.data);
      // res.data.forEach(element => {
      //   console.log(element);
      //   setUsersData(element);
      // });
      // console.log(usersData);
      // console.log(usersData[0].cart);
  })
  .catch(err=>console.log(err.response))
}

const getMovies = ()=>{
  axios 
  .get('http://localhost:8082/Movies')
  .then(res=>{
    setMoviesData(res.data);
  })
  .catch(err=>console.log(err.response))
}

const addMovies = (i,movie)=>{
  let temp = [...moviesData];
  temp[i].added = true;
  temp[i].message = 'Movie Added';
  setMoviesData(temp);
  // let usersTemp = [...usersData];
  // console.log(usersTemp[i]);
  // usersTemp[i].cart.push(1);
  // setUsersData(usersTemp);
}

const removeMovies = (i)=>{
  let temp = [...moviesData];
  temp[i].added = false;
  temp[i].message = '';
  setMoviesData(temp);
}

const getProducts = ()=>{
  axios
  .get('http://localhost:8082/products')
  .then(res=>{
    setProductsData(res.data);
    // console.log(res.data);
  })
  .catch(err=>console.log(err))
}

const addProducts = (i,product)=>{
   if(auth){
    let temp = [...productsData];
    // let usersTemp = [...usersData];
    // for (let i = 0; i < usersTemp.length; i++) {
    //   if(auth.email == usersTemp[i].email) {
    //     console.log(i);
    //     usersTemp[i].cart.push(product);
    //     break;
    //   }
    // }
    // setUsersData(usersTemp);
    // console.log(usersTemp);
    temp[i].added = true;
    temp[i].quantity ++;
    temp[i].message = 'added to your cart';
    calculatePrice(temp);
   }
}

const subtractProducts = (i)=>{
    let temp = [...productsData];
    temp[i].quantity --;
    temp[i].added = temp[i].quantity > 0;
    if(temp[i].quantity <= 0) temp[i].quantity = 0;
    temp[i].message = '';
    calculatePrice(temp);
}

const calculatePrice = (updateData)=>{
    let price = 0; let quantity = 0;
    updateData.forEach(element => {
        price += element.price * element.quantity
        quantity += element.quantity
    });
    setcartTotalPrice(price);
    setcartTotalQuantity(quantity);
    setProductsData(updateData);
}

return (
<BrowserRouter >

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
               usersData={usersData}
               setUsersData={setUsersData} 
                />}/>
          <Route exact path="/LogIn" render={() => 
          <LogIn 
          auth={auth}
           setAuth={setAuth}
          getUsers={getUsers}
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
                usersData={usersData}
                auth={auth}
                setUsersData={setUsersData}
              />
            )}
          />
          <Route exact path="/SelectedMovies" render={() => (
              <SelectedMovies
                setMovieTrailer={setMovieTrailer}
                setMovieSrc={setMovieSrc} 
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                addMovies={addMovies}
                auth={auth} 
                moviesData={moviesData} 
                setMoviesData={setMoviesData}
              />
            )}
          />
          <Route exact path="/InCinemas" render={() => (
              <InCinemas
                setMovieSrc={setMovieSrc} 
                setMovieTrailer={setMovieTrailer}
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                addMovies={addMovies}
                auth={auth}
                moviesData={moviesData}
                setMoviesData={setMoviesData}
              />
            )}
          />
          <Route exact path="/FamilyMovies" render={() => (
              <FamilyMovies
                setMovieTrailer={setMovieTrailer}
                setMovieSrc={setMovieSrc} 
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                addMovies={addMovies}
                auth={auth}
                moviesData={moviesData}
                setMoviesData={setMoviesData}
              />
            )}
          />
          <Route exact path="/WatchAtHome" render={() => (
              <WatchAtHome
                setMovieTrailer={setMovieTrailer}
                setMovieSrc={setMovieSrc} 
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                addMovies={addMovies}
                auth={auth}
                moviesData={moviesData}
                setMoviesData={setMoviesData}
              />
            )}
          />
          <Route exact path="/MoreMovies" render={() => (
              <MoreMovies
                setMovieTrailer={setMovieTrailer}
                setMovieSrc={setMovieSrc} 
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                addMovies={addMovies}
                auth={auth}
                moviesData={moviesData}
                setMoviesData={setMoviesData}
              />
            )}
          />
            <Route exact path="/WatchList" render={() => ( <WatchList
              setWatchList={setWatchList}
              watchList={watchList}
              fontIncrease={fontIncrease}
              colorReversal={colorReversal}
              setMovieTrailer={setMovieTrailer}
              setMovieSrc={setMovieSrc} 
              removeMovies={removeMovies}
              moviesData={moviesData} 
            />)}/>

          <Route exact path="/ContactUs" render={() => <ContactUs />} />
          <Route exact path="/About" render={() => (<About 
                colorReversal={colorReversal}
                fontIncrease={fontIncrease}
                />)}/>
          <Route exact path="/Store" render={() => (
              <Store
                addProducts={addProducts}
                subtractProducts={subtractProducts}
                fontIncrease={fontIncrease}
                colorReversal={colorReversal}
                cartTotalPrice={cartTotalPrice}
                cartTotalQuantity={cartTotalQuantity} 
                productsData={productsData} 
                setProductsData={setProductsData}
                usersData={usersData}
                setUsersData={setUsersData}
                getProducts={getProducts}
                setProductsData={setProductsData}
                auth={auth}
                // updateProdact={updateProdact}
              />
            )}
          />
          <Route exact path="/Cart" render={() => (
              <Cart
              subtractProducts={subtractProducts}
                cartTotalPrice={cartTotalPrice}
                cartTotalQuantity={cartTotalQuantity}
                productsData={productsData}
                usersData={usersData}
                setUsersData={setUsersData}
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
            <Route exact path="*" render={() => ( <ErrorPage/>)}/>

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
