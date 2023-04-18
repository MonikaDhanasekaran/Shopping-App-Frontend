import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Grid, Typography } from '@mui/material'

const ForgotPasswordComponent = () => {

    const [formStep, setFormStep] = useState(1);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const renderAlert = (type, message = "") => {
        console.log(type, message);
        switch (type) {
            case "error":
                return (
                    <div class="alert alert-danger" role="alert">
                        {message}
                    </div>
                );
                break;
            default:
                return (
                    <div class="alert alert-success" role="alert">
                        {message}
                    </div>
                );
                break;
        }
    };

    const handleAccountExists = async (e) => {
        if (e && formData.email) {
            axios
                .post("https://shopping-app-xkoy.onrender.com/shop/forgotpassword", {
                    email: formData.email,
                })
                .then((response) => {
                    const data = response.data;
                    if (data && data.success) {
                        setFormStep(2);
                    }
                    if (!data.success) {
                        setError(data.message);
                    }
                })
                .catch((e) => console.log(e));
        } else {
            alert("Email is empty");
        }
    }

    const handleSubmit = (e) => {
        if (formData.password.length < 1) {
            setError("Password is not valid");
            return;
        }
        if (
            e &&
            formData.password &&
            formData.password === formData.confirmPassword &&
            formData.password.length > 0
        ) {
            // FIRE API AND CHNAGE PASSWORD
            axios
                .post("https://shopping-app-xkoy.onrender.com/shop/changepassword", {
                    email: formData.email,
                    password: formData.password,
                })
                .then((response) => {
                    let data = response.data;
                    console.log(response, data);
                    if (data && response.status === 201 && data.success) {
                        navigate("/");
                    } else {
                        setError(data.message);
                    }
                })
                .catch((e) => console.log(e));
        } else {
            alert("Passwords doesnt match");
        }
    };

    return (
        <>
            {error && renderAlert("error", error)}
            <div id="divForgotPassword">
                {formStep === 1 && (
                    <>
                        <div className="mb-3">
                            <Grid container>
                                <Card id="cardForgotPassword">
                                    <CardContent>
                                        <Typography id="typoForgotPassword" variant="h5">Email Verification</Typography> <br />
                                        < TextField type="text" name="email" label="Enter registered email" sx={{ width: "70%" }}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="forgotTextfield"/>
                                        <br /> <br />
                                        <Button variant="contained" type="submit" id="buttonForgotPassword" onClick={handleAccountExists}> Verify </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    </>
                )}
                {formStep === 2 && (
                    <>
                        <div id="divChangePassword" className="mb-3">
                            <Grid container>
                                <Card id="cardChangePassword">
                                    <CardContent>
                                        <Typography id="typoChangePassword" variant="h5">Change Password</Typography> <br />
                                        < TextField type="password" name="email" label="New Password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} sx={{ width: "70%" }} />
                                        <br /> <br />
                                        < TextField type="password" name="email" label="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} sx={{ width: "70%" }} />
                                        <br /> <br />
                                        <Button variant="contained" type="submit" id="buttonChangePassword" onClick={handleSubmit} > Change Password </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ForgotPasswordComponent;