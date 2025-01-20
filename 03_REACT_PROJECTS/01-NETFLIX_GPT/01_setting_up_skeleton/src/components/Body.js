import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'
import { removeUser } from '../slices/userSlice'



const Body = () => {

    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }

    ])

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid , email, displayName, photoURL}= user;
                dispatch(setUser({uid: uid, email: email, displayName:displayName, isSignedIn: true , photoURL: photoURL }  ))
            } else {
                // User is signed out
                dispatch(removeUser())

            }
        });
    },[])
    

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body