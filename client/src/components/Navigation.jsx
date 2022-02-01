import React from 'react';
import Styles from "../CSS/Styles.module.css";
import {Link} from 'react-router-dom';



export default function Navigation({highlighting ,colorReversal, auth}) {

  return <div className={Styles.linksContainer}>
      
          <Link
            className={Styles.links}
            style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>{" "}
          <Link
            className={Styles.links}
            style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }}
            to="/AllMovies"
          >
            Movies
          </Link>{" "}
          <Link
            className={Styles.links}
            style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }}
            to="/Store"
          >
            Store
          </Link>{" "}
          <Link
            className={Styles.links}
            style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }}
            to="/Cart"
          >
            Cart
          </Link>{" "}
          <Link
            className={Styles.links}
            style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }}
            to="/About"
          >
            About
          </Link>{" "}
          <Link
            className={Styles.links}
            style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }}
            to="/ContactUs"
          >
            Contact Us
          </Link>{" "}
          {auth?<Link  className={Styles.links}
              style={{
              color: colorReversal ? "white" : "black",
              background: highlighting ? "orange" : "rgb(1, 35, 131)",
              textDecoration: "none",
            }} to="/WatchList">
              Watch List</Link>:''}
          {!auth ? (
            <Link
              className={(Styles.links, Styles.registerBtn)}
              style={{ color: colorReversal ? "lightGray" : "black" }}
              to="/Register"
            >
              Register
            </Link>
          ) : (
            ""
          )}{" "}
          {!auth ? (
            <Link
              className={(Styles.links, Styles.logInBtn)}
              style={{ color: colorReversal ? "lightGray" : "black" }}
              to="/LogIn"
            >
              LogIn
            </Link>
          ) : ("")}
          {/* {auth ? (
            <Link to='/ChangePassword'>
            <button title="click to change password">
            change password
          </button></Link>) : ("")} */}
        </div>

}
