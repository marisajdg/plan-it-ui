import React, { useState } from 'react'

function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div>Welcome!</div>
            <form >
            <label>
                EMAIL
                <input value={email} onChange={(event) => { setEmail(event.target.value) }}/>
            </label>
            <label>
                PASSWORD
                <input value={password} onChange={(event) => { setPassword(event.target.value) }} />
            </label>
            <div>{email}</div>
            <div>{password}</div>
            <button type="submit">SIGN IN</button>
            </form>
        </div>
    )
}

export default SignInPage