import React, { useState, useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import Header from './Header';
import { DEFAULT_PROFILE_PIC, NETFLIX_BACKGROUND_BANNER } from '../constants/urlConstants';
import { checkValidData } from '../utils/validate';
import {auth} from '../utils/firebase';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleButtonClick = () => {
    const validateStatus = checkValidData(email.current.value, password.current.value);
    setErrorMessage(validateStatus);

    if (validateStatus === null) {
      if (isSignInForm) {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                isSignedIn: true,
                photoURL: user.photoURL || DEFAULT_PROFILE_PIC,
              })
            );
            navigate("/browse");
          })
          .catch((error) => setErrorMessage(`${error.code}: ${error.message}`));
      } else {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: fullname.current.value,
              photoURL: DEFAULT_PROFILE_PIC,
            }).then(() => {
              dispatch(
                setUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: fullname.current.value,
                  isSignedIn: false,
                  photoURL: DEFAULT_PROFILE_PIC,
                })
              );
              setIsSignInForm(!isSignInForm)
              navigate("/");
            });
          })
          .catch((error) => setErrorMessage(`${error.code}: ${error.message}`));
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className='h-screen object-cover' src={NETFLIX_BACKGROUND_BANNER} alt="Login" />
      </div>
      <form
        className="absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            id="name"
            ref={fullname}
            placeholder="Name"
            required
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          id="email"
          ref={email}
          placeholder="Email"
          required
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          id="password"
          ref={password}
          placeholder="Password"
          required
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm my-4 cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
