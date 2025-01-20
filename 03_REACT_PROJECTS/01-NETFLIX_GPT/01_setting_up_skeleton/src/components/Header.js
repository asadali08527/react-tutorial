import React from 'react'
import { useState } from'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from'react-router-dom';
import { useSelector } from'react-redux';


const Header = () => {
  const user = useSelector(store=> store.user);
  const auth = getAuth();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isSignedIn, setSignedIn] = useState(user?.isSignedIn);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setSignedIn(false);
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  };

  const handleMouseEnter = () => {
    setIsHovered(true); // Show the Sign Out button on hover
  };
  console.log(user?.isSignedIn);
  const handleMouseLeave = () => {
    setIsHovered(false); // Hide the Sign Out button when not hovering
  };
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
        {isSignedIn && <div className='relative flex p-2'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <img
              className="my-5 h-10 w-10 cursor-pointer rounded-full"
              src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/1177/1177568.png'}
              alt="user_icon"
            />            {/* Sign Out Button */}
            {isHovered && (
              <button
                className='absolute top-14 right-0 font-bold text-white bg-black px-4 py-2 rounded-lg cursor-pointer'
                onClick={(handleSignOut)}
              >
                Sign Out
              </button>
        )}
        </div>
        }
    </div>
  )
}

export default Header