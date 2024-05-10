import "./Login.css"

import React, {useState} from "react";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";

function Login({ auth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        console.log("Loading...");
    }

    if (error) {
        document.getElementById("login-status-text").innerText = "Incorrect username or password";
    }

    return (
        <div className={"center background"}>
            <div className={"center card contain shadow"} id={"login-card"}>
                <div className={"center"} id={"login-form"}>
                    <input
                        className="login-input"
                        type="email"
                        value={email}
                        placeholder={"Username"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="login-input"
                        type="password"
                        value={password}
                        placeholder={"Password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="login-button"
                        onClick={() => signInWithEmailAndPassword(email, password)}>
                        Login
                    </button>
                    <p id={"login-status-text"}></p>
                </div>
            </div>
        </div>
    );
}

export default Login;