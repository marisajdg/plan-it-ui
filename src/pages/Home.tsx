import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/sign-in");
    }

    return (
        <div>
            WELCOME!!! This is the fake home page!
            <button onClick={handleSignInClick}>SIGN IN</button>
        </div>
    )
}

export default Home