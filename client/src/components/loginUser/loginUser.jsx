import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './loginUser.css';
import AuthContext from "../../context/AuthContext";
import { LoginUser } from "../../services/auth/authService";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext);



    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        try {
<<<<<<< HEAD
            await LoginUser(userData, setAuth);
=======
            // Send login request to backend server
            const response = await fetch('http://localhost:5000/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            if (response.ok) {
                // Authentication successful, redirect to dashboard
                navigate("/dashboard");
            } else {
                // Authentication failed, display error message
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed. Please try again.");
             }
>>>>>>> 84ab6169c91a4c8ec4b18a934c370d637b1020f1
        } catch (error) {
            console.error(error.message || 'An error occurred during sign-in');
        }
    };

<<<<<<< HEAD
    useEffect(() => {
=======
    const handleRegistration = async (event) => {
        event.preventDefault();
        try {
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match, Please try again')
            }
            // Send registration request to backend server
            const response = await fetch('http://localhost:5000/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
>>>>>>> 84ab6169c91a4c8ec4b18a934c370d637b1020f1


        if (auth) {
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }

    }, [auth, navigate])

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>

                {/* <div className="input-box">
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div> */}

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>"Don't have an account? <a href="#" onClick={() => navigate("/register")}>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;