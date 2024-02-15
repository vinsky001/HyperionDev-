import React, { useState } from "react";
import { useNavigate }  from "react-router-dom";
import { FaUser, FaLock,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './loginUser.css';

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username] = useState('');    
    const [password] = useState('');
    const navigate = useNavigate();

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Send login request to backend server
            const response = await fetch('/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Authentication successful, redirect to dashboard
                navigate("/dashboard");
            } else {
                // Authentication failed, display error message
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed. Please try again.");
            }
        } catch (error) {
            // Handle any errors that occur during login
            console.error("Login error:", error.message);
            alert(error.message);
        }
    };   
    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>{isRegistering ? 'Register' : 'SignIn'}</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon"/> 
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <MdEmail className="icon"/> 
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/> 
                </div>

                {isRegistering && (
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <FaLock className="icon"/> 
                    </div>
                )}

                {!isRegistering && (
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                )}

                <button type="submit">{isRegistering ? 'Register' : 'SignIn'}</button>

                <div className="register-link">
                    <p>{isRegistering ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={toggleRegister}>{isRegistering ? 'SignIn' : 'Register'}</a></p>                    
                </div>
            </form>
        </div>
    );     
};

export default Login;
