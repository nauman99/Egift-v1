import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { store } from "react-notifications-component";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        store.addNotification({
          title: "Success!",
          message: "Login successful!",
          type: "success",
          insert: "top",
          container: "bottom-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000,
            onScreen: true,
          },
        });
        history.push("/");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        store.addNotification({
          title: "Error!",
          message: error.message,
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000,
            onScreen: true,
          },
        });
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user with email and password
        if (auth) {
          setEmail("");
          setPassword("");
          store.addNotification({
            title: "Registration successful",
            message: "Please login to continue",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true,
            },
          });
          history.push("/login");
        }
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        store.addNotification({
          title: "Error!",
          message: error.message,
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000,
            onScreen: true,
          },
        });
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <div class="header-login">
          <svg id="logo" width="41" height="22" viewBox="0 0 41 22" fill="none">
            <path
              d="M33.7857 18.6786C33.739 18.6552 33.6903 18.6252 33.6399 18.5889C31.7025 17.4062 27.6816 15.275 25.9746 15.5536C24.9235 17.4362 23.9189 19.5535 23.2857 21C18.4456 18.9651 7.21239 12.1163 1 1L39.268 6.25659C39.5365 6.25356 39.7837 6.28434 40 6.35714L39.268 6.25659C37.6925 6.27436 35.3842 7.45629 34.2857 8.14286C35.2571 10.2857 34.3571 16.0595 33.7857 18.6786Z"
              fill="white"
            />
            <path
              d="M1 1L40 6.35714C38.5143 5.85714 35.5714 7.33929 34.2857 8.14286M1 1L29.3571 11.3571M1 1L34.2857 8.14286M1 1C7.21239 12.1163 18.4456 18.9651 23.2857 21C23.9189 19.5535 24.9235 17.4362 25.9746 15.5536M29.3571 11.3571C30.3571 13.5595 32.6429 18.1071 33.7857 18.6786M29.3571 11.3571C28.5217 11.4345 27.2158 13.3304 25.9746 15.5536M33.7857 18.6786C34.3571 16.0595 35.2571 10.2857 34.2857 8.14286M33.7857 18.6786C31.9116 17.5179 27.7257 15.2679 25.9746 15.5536"
              stroke="#FF8989"
            />
          </svg>
          <span class="header-letter">E-Gift</span>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>

          <p className="login__agreement">
            By sigining-in you agree to terms and conditions.
          </p>

          <button onClick={register} className="login__registerButton">
             
            Create your Account 
          </button>

          <button
            onClick={(e) => {
              history.push("/");
            }}
            className="login__registerButton"
          > 
            Continue using guest 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
