import React from 'react'
import Header from './Header'
import { useState } from'react'
import { checkValidData } from '../utils/validate'
import { useRef } from'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../utils/firebase'
import { useNavigate } from'react-router-dom'
import { useDispatch } from'react-redux'

const Login = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const auth = getAuth();

    const [errorMessage, setErrorMessage] = useState(null);


    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);

    const handleButtonClick = () => {
        const validateStatus = checkValidData(email.current.value, password.current.value);
        setErrorMessage(validateStatus);  
        if(validateStatus === null){
            if(isSignInForm){
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user) 
                    // Navigate user to Browse page
                    navigate("/browse")             
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" : "+errorMessage);

                });

            }else{
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        console.log(user)   
                        // Update User Profile
                        updateProfile(auth.currentUser, {
                            displayName: fullname.current.value, photoURL: "https://avatars.githubusercontent.com/u/8710257?s=400&u=b1d255061306a6045d3037eb45c9c8c288be7b55&v=4"
                          }).then(() => {
                            // Profile updated!
                            setIsSignInForm(true)
                            dispatch(
                                {
                                    uid: user.uid,
                                    email: user.email,
                                    displayName: fullname.current.value,
                                    isSignedIn: false,
                                    photoURL: auth.currentUser.photoURL,
                                }
                            )
                            navigate("/")             
                        }).catch((error) => {
                            // An error occurred
                            // ...
                          });
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode+" : "+errorMessage);
                });

            }
        }
    };
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    };

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/GB-en-20250113-TRIFECTA-perspective_83301252-2ef4-475c-857d-6410c0b726ed_medium.jpg
            " alt="Login" />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80' onSubmit={(e)=>e.preventDefault()}>

            <h1 className='text-white text-2xl font-bold py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            
            {
                !isSignInForm && (
                    <input type="text" 
                    id="name" 
                    ref={fullname}
                    name="name" 
                    placeholder='Name'required 
                    className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
                )
            }

            {
                !isSignInForm && (
                    <input type="text" 
                    id="phonenumber" 
                    name="phonenumber" 
                    placeholder='Phone Number'required 
                    className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
                )
            }     

            <input type="text" 
                id="email" 
                ref={email}
                name="email" 
                placeholder='Email'required 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg'/> 
        
            <input type="password" 
                ref={password}
                id="password" 
                name="password" 
                placeholder='Password' required 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

            <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick} > { isSignInForm? "Sign In": "Sign Up"}</button>

            <p className='text-sm my-4 cursor-pointer' 
                onClick={toggleSignInForm} > 
                    { isSignInForm? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now" }
            </p>
        </form>
    </div>
  )
}

export default Login