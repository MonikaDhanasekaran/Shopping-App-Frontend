import React from "react";
import "./fashion.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TrackPants = () => {

    const navigate = useNavigate();
    const [initialValue, setInitialValue] = useState(0);
    const [pant, setPant] = useState([]);

    useEffect(() => {
        getPant();
    }, []);

    const getPant = async () => {
        try {
            const response = await axios.get("http://localhost:5000/shop/fashion/trackPants/get", {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            setPant(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleOperation = (e) => {
        if (e.target.innerText === "Add to Cart") {
            setInitialValue(initialValue + 1);
            e.target.innerText = "Remove from Cart";
        }
        else {
            setInitialValue(initialValue - 1);
            e.target.innerText = "Add to Cart";
        }
    }

    const searchTrackpants = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/shop/fashion/trackPants/searchTrackpants/${key}`, {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                }
            });
            result = await result.json()
            if (result) {
                setPant(result);
            }
        } else {
            getPant();
        }
    }

    const handleBack = () => {
        navigate("/fashionCategories");
    }

    const makePayment = () => {
        alert("Order Placed");
    }

    return (
        <>
            <div id="divTrackPantsImage">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="btn btn-light" onClick={handleBack}>
                                <ArrowBackIcon sx={{ fontSize: "30px" }} />
                            </button> &nbsp; &nbsp;
                            <a className="navbar-brand" id="pantHeading">TRACK PANTS</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="d-flex" id="pantSearchForm">
                                    <input className="form-control me-2" type="search" id="pantSearchInput" placeholder="Search Track Pants" aria-label="Search" onChange={searchTrackpants} />
                                </form>
                            </div>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit">
                                    <i class="fa fa-shopping-cart" />
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{initialValue}</span>
                                </button>
                            </form>
                        </div>
                    </nav>
                    <div className="col mb-5" id="divPant">
                        <Grid id="pantGrid" container spacing={2}>
                            {pant.length && pant.map((row, index) => (
                                <Grid item key={index}>
                                    <div className="flip-card" id="pantFlipCard">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src={row.image} alt="Avatar" id="cardImage" />
                                            </div>
                                            <div className="flip-card-back" id="pantFlipCardBack"> <br />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 id="headingPant">{row.name}</h5>
                                                        <h6 className="price" id="headingPant">${row.originalRate} <span id="pantSpan">${row.strikeOutRate}</span> {row.percent} off</h6>
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center">
                                                        <a className="btn btn-outline-dark mt-auto" onClick={(e) => handleOperation(e)} id="buttonPant">Add to Cart</a>
                                                        &nbsp;
                                                        <StripeCheckout name={row.name} currency="INR" token={makePayment} stripeKey="pk_test_51MlnPYSDphT43pOnf3L4Dh9Z8KudUcu3CEECHgznzTj8cojvmlU4ft1GlOwVIZbqR164Gj4wWUQrmOuE3daiaTHG00O5c5DGv7">
                                                            <button className="btn btn-outline-dark mt-auto" id="buttonPant">Buy now</button>
                                                        </StripeCheckout>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <footer className="py-5 bg-dark" id="footer">
                        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div> <br />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default TrackPants;