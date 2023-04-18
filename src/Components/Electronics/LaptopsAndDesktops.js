import React from "react";
import "../Electronics/electronics.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LaptopsAndDesktops = () => {

    const navigate = useNavigate();

    const handleLaptops = () => {
        navigate("/electronics/laptops");
    }

    const handleDesktops = () => {
        navigate("/electronics/desktops");
    }

    const handleBack = () => {
        navigate("/electronicsCategories")
    }

    return (
        <>
            <div id="divLaptopsAndDesktopsImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonLaptopsAndDesktopsCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divLaptops">
                                            <button type="button" className="btn btn-outline-light" id="buttonLaptops" onClick={handleLaptops}>
                                                <img src="https://www.gizmochina.com/wp-content/uploads/2019/03/XIDU-PhilBook-Max-Laptop-600x600.jpg" className="card-img-top"
                                                    id="electronicsRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingLaptops">Laptops</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divDesktops">
                                            <button type="button" className="btn btn-outline-light" id="buttonDesktops" onClick={handleDesktops}>
                                                <img src="http://atlas-content-cdn.pixelsquid.com/stock-images/desktop-computer-a8nd2w2-600.jpg" className="card-img-top"
                                                    id="electronicsRoundCards" alt="..." />
                                            </button>
                                            <h3 id="headingDesktops">Desktops</h3>
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

export default LaptopsAndDesktops;