import React from "react";
import '../HomeComponents/shop.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import StripeCheckout from "react-stripe-checkout";
import LogoutIcon from '@mui/icons-material/Logout';

const ShoppingPageComponent = () => {

    const [initialValue, setInitialValue] = useState(0);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get("https://shopping-app-xkoy.onrender.com/shop/recentSale/get", {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            setProducts(response.data);
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

    const handleRecentSaleSearch = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`https://shopping-app-xkoy.onrender.com/shop/recentSale/searchRecentSale/${key}`, {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                }
            });
            result = await result.json()
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    const makePayment = () => {
        alert("Order Placed");
    }

    const handleAllProducts = () => {
        navigate("/categories");
    }

    const handlePopularItems = () => {
        navigate("/shop/popularItem");
    }

    const handleNewArrivals = () => {
        navigate("/shop/newArrival");
    }

    const handleBack = () => {
        navigate("/");
    }

    return (
        <>
            <div id="divShoppingPage">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">SHOPIFY</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shopping Categories
                                    </a>
                                    <ul className="dropdown-menu" id="navbarDropdown" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" onClick={handleAllProducts}>All Products</a></li>
                                        <li><a className="dropdown-item" onClick={handlePopularItems}>Popular Items</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" onClick={handleNewArrivals}>New Arrivals</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input class="form-control me-2" type="search" id="recentSaleSearchInput" placeholder="Search product" aria-label="Search" onChange={handleRecentSaleSearch} />
                            </form>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" id="cartRecentSale" type="submit">
                                    <i class="fa fa-shopping-cart" />
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{initialValue}</span>
                                </button>
                                &nbsp;
                                <button className="btn btn-outline-dark" id="buttonRecentSale" onClick={handleBack}>
                                    <LogoutIcon /> Logout
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-outline-dark" id="buttonDialog" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    For Reference
                                </button>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Reference for Payment</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Use Card Number as <b>4242 4242 4242 4242</b>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/782e25652baf8c2e.jpg?q=50" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/de2914c3b6d0a26b.jpg?q=50" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/ff23ee143f2a3f50.jpg?q=50" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="col mb-5">
                    <Grid container spacing={2}>
                        {products.length && products.map((row, index) => (
                            <div className="card h-100" key={index} id="cardShopping">
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
                                        <StripeCheckout name={row.name} currency="INR" token={makePayment} stripeKey="pk_test_51MlnPYSDphT43pOnf3L4Dh9Z8KudUcu3CEECHgznzTj8cojvmlU4ft1GlOwVIZbqR164Gj4wWUQrmOuE3daiaTHG00O5c5DGv7">
                                            <button className="btn btn-outline-dark mt-auto">Buy now</button>
                                        </StripeCheckout>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </div>
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
                </footer>
            </div>
        </>
    );
}

export default ShoppingPageComponent;