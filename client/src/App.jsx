import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {Navigation,Accessibilty} from './components'
import {ContactUs,About,Store,Cart, WatchList,Home,Register,LogIn,ChangePassword,AllMovies, MoviesSolution, ErrorPage } from './pages';
import axios from 'axios';
import "./App.css";
import Styles from "./CSS/Styles.module.css";
import useAccessibility from "./hooks/useAccessibility";
import MoviesPage from "./pages/MoviesPage";
 
function App() {  
  const [auth, setAuth] = useState(null);   
  const accessibilty = useAccessibility(); 
  // you can do something similar with currentMovie (movieTrailer,movieSrc,movieSummary)
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieSrc, setMovieSrc] = useState(null);
  const [movieSummary, setMovieSummary] = useState(null);

  // same for cart
  const [cartTotalPrice, setcartTotalPrice] = useState(0);
  const [cartTotalQuantity, setcartTotalQuantity] = useState(0);

  const [moviesData, setMoviesData] = useState([])
  const [productsData, setProductsData] = useState([])  
  const [usersData, setUsersData] = useState([])
  const [watchList, setWatchList] = useState(null);

  const AUTH_LOCAL_STORAGE = "Users"; 
  
const logOutHeandler = () => {
  localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(""));
  setAuth(null);
  document.location.href = "/";
};

const getUserFromStorage = ()=>{
  let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
  return authStorage ? setAuth(authStorage.data) : null;
}  
  
const getUsers = () => {
  axios
  .get('http://localhost:8082/users')
  .then(res=>{
    // console.log(auth);
    // console.log(res.data); 
    for (let i = 0; i < res.data.length; i++) {
      if(auth.email == res.data[i].email) {
        // console.log( res.data[i]);
        return setUsersData(res.data[i]); 
      }
    }   
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

const addMovies = (i)=>{
  let temp = [...moviesData];
  temp[i].added = true;
  temp[i].message = 'Movie Added';
  setMoviesData(temp);
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
  })
  .catch(err=>console.log(err))
}

const addProductsToStore = (i)=>{
  if(auth){
  let temp = [...productsData];
  temp[i].added = true;
  temp[i].quantity++;
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
        price += Number(element.price) * Number(element.quantity);
        quantity += Number(element.quantity);
    });
    setcartTotalPrice(price);
    setcartTotalQuantity(quantity);
    setProductsData(updateData);
}

useEffect(() => {
  getUserFromStorage();
  getMovies();
  getProducts();
}, []); 

useEffect(()=>{
  if(auth){
    getUsers();
  }
},[auth]);

const { colorReversal, fontIncrease, highlighting } = accessibilty;

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
        <Accessibilty accessibilty={accessibilty} />
        {auth 
          ? <button title="click to sign out" className={Styles.signOutBtn} onClick={logOutHeandler}>
              sign out
            </button>
          : null
        }
        <Switch>
          <Route exact path="/" render={() => <Home accessibilty={accessibilty} auth={auth}/>}/>
          <Route exact path="/Register" render={() =>
             <Register auth={auth} setAuth={setAuth} usersData={usersData} setUsersData={setUsersData} />
          }/>
          <Route exact path="/LogIn" render={() => <LogIn auth={auth} setAuth={setAuth}/>}/>
          <Route exact path="/ChangePassword" render={() => <ChangePassword auth={auth} />}/>
          <Route exact path="/ContactUs" render={() => <ContactUs />} />
          <Route exact path="/About" render={() => <About accessibilty={accessibilty}/>}/>
          <Route exact path="/AllMovies" render={() => <AllMovies accessibilty={accessibilty} />}/>
          <Route path="/movies/:category" render={(props) => 
            <MoviesPage {...props} 
              setMovieSrc={setMovieSrc}
              setMovieTrailer={setMovieTrailer}
              accessibilty={accessibilty}
              addMovies={addMovies}
              auth={auth}
              moviesData={moviesData}
              setMoviesData={setMoviesData}
              usersData={usersData}
              setUsersData={setUsersData}
              setMovieSummary={setMovieSummary}
              />
          }/> 
          
          <Route exact path="/WatchList" render={() => ( <WatchList
            setWatchList={setWatchList}
            accessibilty={accessibilty}
            setMovieTrailer={setMovieTrailer}
            setMovieSrc={setMovieSrc} 
            removeMovies={removeMovies}
            auth={auth} 
            usersData={usersData}
            setUsersData={setUsersData}
              setMovieSummary={setMovieSummary}
          />)}/>
          
          <Route exact path="/Store" render={() => (
              <Store
                subtractProducts={subtractProducts}
                accessibilty={accessibilty}
                productsData={productsData} 
                setProductsData={setProductsData}
                usersData={usersData}
                setUsersData={setUsersData}
                getProducts={getProducts}
                addProductsToStore={addProductsToStore}
                auth={auth}
               
              />
            )}
          />
          <Route exact path="/Cart" render={() => (
              <Cart
              subtractProducts={subtractProducts}
                cartTotalPrice={cartTotalPrice}
                cartTotalQuantity={cartTotalQuantity}
                usersData={usersData}
                setUsersData={setUsersData}
                auth={auth}
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
               movieSummary={movieSummary}
               setMovieSummary={setMovieSummary}

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
