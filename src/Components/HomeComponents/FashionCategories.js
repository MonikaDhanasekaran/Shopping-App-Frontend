import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FashionCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleTShirts = () => {
        navigate("/fashion/tShirts");
    }

    const handleJean = () => {
        navigate("/fashion/jean");
    }

    const handleTrackPants = () => {
        navigate("/fashion/trackPants");
    }

    const handleMensShoes = () => {
        navigate("/fashion/sportsShoes");
    }

    const handleSareesAndKurti = () => {
        navigate("/fashion/sareesAndKurti");
    }

    const handleWomenSandals = () => {
        navigate("/fashion/womenFootwear");
    }

    const handleLuggageAndBags = () => {
        navigate("/fashion/luggageAndBags");
    }

    const handleKidsFashion = () => {
        navigate("/fashion/kidsFashion");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divFashionImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonFashionCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleTShirts}>
                                                <img src="https://media.istockphoto.com/id/950965584/photo/man-in-white-blank-t-shirt.jpg?b=1&s=170667a&w=0&k=20&c=xs_8eMvYvrRcwflGC_OcLgw2NVQSdObrD7j8gHythIE=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">T-Shirts</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleJean}>
                                                <img src="https://media.istockphoto.com/id/627399108/photo/row-of-fashion-different-jeans-isolated-on-white.jpg?s=612x612&w=0&k=20&c=-ZqieKvkUOKTWliqBV8IoDYiVV2Z1fJr04QthXh8A0o=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Jean</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleTrackPants}>
                                                <img src="https://media.istockphoto.com/id/1328317886/photo/blank-black-and-white-sport-sweatpants-mockup-front-view.jpg?s=612x612&w=0&k=20&c=GNTvr_AN8xqDMwyUSTl0S46NA61V771KtKcpv3nzPzI=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Track Pants</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleMensShoes}>
                                                <img src="https://media.istockphoto.com/id/623270836/photo/modern-sport-shoes.jpg?s=612x612&w=0&k=20&c=D7xOiyV3TMQgUuIqlVvutPo49gyMG9f5U82mcvuDc0Y=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Men's Sports Shoes</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleSareesAndKurti}>
                                                <img src="https://bollyspice.com/wp-content/uploads/2022/05/E7B104B3-77E4-488F-B4BF-128A427F6A02-612x408.jpeg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Sarees and Kurtas</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleWomenSandals}>
                                                <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81sN9lMD16L._UX500_.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Women's Footwear</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleLuggageAndBags}>
                                                <img src="https://www.innovationintextiles.com/uploads/4655/MPBagstoFuture-612x408-boxed.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Luggage and Bags</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFashion">
                                            <button type="button" className="btn btn-outline-light" id="buttonFashion" onClick={handleKidsFashion}>
                                                <img src="https://media.istockphoto.com/id/537307742/photo/cute-stylish-children.jpg?s=612x612&w=0&k=20&c=WU-V7DTbtBAYlmknXRaPR3werEx2CjsUgxUjosi3svU=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFashion">Kid's Fashion</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FashionCategoriesComponent;