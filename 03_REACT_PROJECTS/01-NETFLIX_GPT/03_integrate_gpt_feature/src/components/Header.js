import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, removeUser } from '../slices/userSlice';
import { NETFLIX_LOGO, DEFAULT_PROFILE_ICON } from '../constants/urlConstants';
import {auth} from '../utils/firebase';

const Header = () => {
  const user = useSelector((store) => store.user); // Get user state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth ) {
        // User is signed in
          const { uid, email, displayName, photoURL } = userAuth;
          dispatch(
            setUser({
              uid,
              email,
              displayName,
              isSignedIn: true,
              photoURL: photoURL || DEFAULT_PROFILE_ICON,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup: Unsubscribe on component unmount
    return () => unsubscribe();
  }, [ auth, dispatch,navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="Logo" />
      {user?.isSignedIn && (
        <div
          className="relative flex p-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="my-5 h-10 w-10 cursor-pointer rounded-full"
            src={user.photoURL || DEFAULT_PROFILE_ICON}
            alt="user_icon"
          />
          {isHovered && (
            <button
              className="absolute top-14 right-0 font-bold text-white bg-black px-4 py-2 rounded-lg cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
