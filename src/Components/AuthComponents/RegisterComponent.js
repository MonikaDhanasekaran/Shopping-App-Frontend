import React, { useState } from "react";
import axios from 'axios';
import { validateEmail } from "../Validations/helpers";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate, Link } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './auth.css';

const RegisterComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
        role: "",
    });

    const handleSubmit = async (e) => {
        if (validateEmail(formData.email || "")) {
            alert("Email is invalid");
        } else if (
            !formData.password ||
            !formData.confirmPassword ||
            String(formData.password).trim().toLocaleLowerCase() !== String(formData.confirmPassword).trim().toLocaleLowerCase()
        ) {
            alert("Passwords doesn't match");
        } else {
            e.preventDefault();
            const response = await axios.post("https://shopping-app-xkoy.onrender.com/shop/signup", {
                ...formData,
            });
            console.log(response);
            navigate("/");
        }
    }

    return (
        <div id="divRegister">
            <div id="login-box">
                <div className="left">
                    <h1> <LockOpenIcon sx={{ fontSize: "40px" }} /> <br /> Sign up </h1> <br />
                    <input type="text" name="name" placeholder="Name" id="textfield"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <input type="text" name="uname" placeholder="Username" id="textfield"
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
                    <input type="text" name="email" placeholder="E-mail" id="textfield"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <input type="password" name="password" placeholder="Password" id="textfield"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" id="textfield"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                    <FormControl variant="outlined" id="formRegister">
                        <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </Select>
                    </FormControl> <br /> <br />
                    <input type="text" name="mnumber" placeholder="Mobile Number" id="textfield"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} />
                    <input type="submit" name="signup_submit" id="textfield"
                        value="Sign up" onClick={handleSubmit} /> <br /> <br />
                    Already have an account? <Link to="/">Sign in</Link>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;