import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomeCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleKitchenAndCookware = () => {
        navigate("/home/kitchenAndCookware");
    }

    const handleHomeFurnishing = () => {
        navigate("/home/homeFurnishing");
    }

    const handleHomeDecor = () => {
        navigate("/home/homeDecor");
    }

    const handleDiningAndServerware = () => {
        navigate("/home/diningServeware");
    }

    const handleGardeningEssentials = () => {
        navigate("/home/gardeningEssentials");
    }

    const handleLightning = () => {
        navigate("/home/lightning");
    }

    const handleBedsheets = () => {
        navigate("/home/bedSheets");
    }

    const handleCleaningEssentials = () => {
        navigate("/home/cleaningEssentials");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divHomeImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonHomeCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleKitchenAndCookware}>
                                                <img src="https://media.istockphoto.com/id/478769830/photo/kitchen-cookware-set.jpg?s=612x612&w=0&k=20&c=47NXX65DxdTeUc_QZsTyv8hf-va2wOKI8ujWcNdiYp8=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Kitchen and Cookware</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleHomeFurnishing}>
                                                <img src="https://havenly.com/blog/wp-content/uploads/2015/07/lulu-and-georgia-home-finds-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Home Furnishing</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleHomeDecor}>
                                                <img src="https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Home Decor</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleDiningAndServerware}>
                                                <img src="https://www.furnitureman.ie/image/cache/catalog/CHANTELLEDT8053-2-SKY9003-1-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Dining and Serveware</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleGardeningEssentials}>
                                                <img src="https://media.istockphoto.com/id/534362613/photo/gardening.jpg?s=612x612&w=0&k=20&c=5uM6WYUqgX67aWIdqwUSl5D2eNxHMrAXC9HwvSEVi0o=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Gardening Essentials</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleLightning}>
                                                <img src="https://media.istockphoto.com/id/1082558358/photo/different-modern-streamlined-mirror-copper-chandeliers-bubble-metal-copper-shade-pendant.jpg?b=1&s=170667a&w=0&k=20&c=0PMiYGq2ruqKApGdT4EA-8YwrxGa5Rp5IsXuvh62uqQ=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Lightning</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleBedsheets}>
                                                <img src="https://www.innovationintextiles.com/uploads/10020/Rekoop-bedding-front-view-612x408-boxed.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Bedsheets and more</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divHome">
                                            <button type="button" className="btn btn-outline-light" id="buttonHome" onClick={handleCleaningEssentials}>
                                                <img src="https://media.istockphoto.com/id/654153664/photo/cleaning-service-sponges-chemicals-and-mop.jpg?s=612x612&w=0&k=20&c=vHQzKbz7L8oEKEp5oQzfx8rwsOMAV3pHTV_1VPZsREA=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingHome">Cleaning Essentials</h3>
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

export default HomeCategoriesComponent;