import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import "./auth.css";

const LoginComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        if(formData.email==="" && formData.password===""){
            alert("Please fill all Values!!!")
        }
        else {
            e.preventDefault();
            try {
                const response = await axios.post("http://localhost:5000/shop/signin", {
                    ...formData,
                });
                if (response) {
                    localStorage.setItem("token", response.data.Token);
                    navigate("/shop");
                }
                console.log(response);
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    const handleSignup = () =>{
        navigate("/signup")
    }

    return (
        <div id="divLogin">
            <div className="wrapper login">
                <div id="containerLogin">
                    <div className="col-left">
                        <div className="login-text">
                            <h2 id="welcomeHeading">Welcome!</h2>
                            <p id="welcomeHeading">Create your account.<br />For Free!</p> <a id="welcomeHeading" className="btn" onClick={handleSignup}>Sign Up</a>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            <h2>Login</h2>
                            <form action="">
                                <p> <label>Email<span>*</span></label> <input type="text" placeholder="Enter email" value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /> </p>
                                <p> <label>Password<span>*</span></label> <input type="password" placeholder="Enter password" value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} required /> </p>
                                <p> <input type="submit" id="buttonSignIn" onClick={handleSubmit} value="Sign In" /> </p>
                                <p> <Link to="/forgotpassword" id="linkForgotPassword"> forgot password? </Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;