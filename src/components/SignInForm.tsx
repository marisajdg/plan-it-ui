import React, { FC, useState } from 'react'
import usePost from "../services/usePost";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // how do the server knows that is email and password?? is it better to specify?
    const {doPost, loading, error, response} = usePost("https://47e26fe6-cd84-4fc0-bf2f-07b70e7caddd.mock.pstmn.io/login", {email, password});

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        doPost();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                EMAIL
                <input value={email} onChange={handleEmailChange}/>
            </label>
            <label>
                PASSWORD
                <input value={password} onChange={handlePasswordChange}/>
            </label>
            <button type="submit">SIGN IN</button>
            {loading }
        </form>
    )
}

export default SignInForm