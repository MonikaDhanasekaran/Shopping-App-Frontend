import React from "react";
import "./shop.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import StripeCheckout from "react-stripe-checkout";
import "../HomeComponents/shop.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewArrival = () => {

    const navigate = useNavigate();
    const [initialValue, setInitialValue] = useState(0);
    const [newArrival, setNewArrival] = useState([]);

    useEffect(() => {
        getNewArrival();
    }, []);

    const getNewArrival = async () => {
        try {
            const response = await axios.get("https://shopping-app-xkoy.onrender.com/shop/newArrival/get", {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            setNewArrival(response.data);
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

    const handleNewArrivalSearch = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`https://shopping-app-xkoy.onrender.com/shop/newArrival/searchNewArrivals/${key}`, {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                }
            });
            result = await result.json()
            if (result) {
                setNewArrival(result);
            }
        } else {
            getNewArrival();
        }
    }

    const handleBack = () => {
        navigate("/shop");
    }

    const makePayment = () => {
        alert("Order Placed");
    }

    return (
        <>
            <div id="divNewArrivalsImage">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="btn btn-light" onClick={handleBack}>
                            <ArrowBackIcon sx={{ fontSize: "30px" }} />
                        </button> &nbsp; &nbsp;
                        <a className="navbar-brand">NEW ARRIVALS</a>
                        <form className="d-flex" id="newArrivalsSearchForm">
                            <input className="form-control me-2" type="search" id="searchIconNewArrival" placeholder="Search New Arrival Products" aria-label="Search" onChange={handleNewArrivalSearch} />
                            <button className="btn btn-outline-dark" id="cartNewArrivals" type="submit">
                                <i class="fa fa-shopping-cart" />
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{initialValue}</span>
                            </button>
                        </form>
                    </div>
                </nav>
                <div className="col mb-5">
                    <Grid container spacing={2}>
                        {newArrival.length && newArrival.map((row, index) => (
                            <div className="card h-100" key={index} id="cardNewArrival">
                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>On Sale</div>
                                <img className="card-img-top" src={row.image} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{row.name}</h5>
                                        ${row.rate}
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" onClick={(e) => handleOperation(e)}>Add to Cart</a>
                                        &nbsp;
                                        &nbsp;
                                        <StripeCheckout name={row.name} currency="INR" token={makePayment} stripeKey="pk_test_51MlnPYSDphT43pOnf3L4Dh9Z8KudUcu3CEECHgznzTj8cojvmlU4ft1GlOwVIZbqR164Gj4wWUQrmOuE3daiaTHG00O5c5DGv7">
                                            <button className="btn btn-outline-dark mt-auto">Buy now</button>
                                        </StripeCheckout>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </div>
                <footer className="py-5 bg-dark" id="footer">
                    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div> <br />
                </footer>
            </div>
        </>
    )
}

export default NewArrival;