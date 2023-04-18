import React from "react";
import '../HomeComponents/shop.css';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { pink } from '@mui/material/colors';
import "../HomeComponents/shop.css";

const AllProductComponent = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/shop");
    }

    const handleMobileCategories = () => {
        navigate("/mobileCategories");
    }

    const handleElectronicsCategories = () => {
        navigate("/electronicsCategories");
    }

    const handleAppliancesCategories = () => {
        navigate("/appliancesCategories");
    }

    const handleFashionCategories = () => {
        navigate("/fashionCategories");
    }

    const handleHomeCategories = () => {
        navigate("/homeCategories");
    }

    const handlePersonalCareCategories = () => {
        navigate("/personalCareCategories");
    }

    const handleToysAndBabyCareCategories = () => {
        navigate("/toysAndBabyCareCategories");
    }

    const handleFurnitureCategories = () => {
        navigate("/furnitureCategories");
    }

    const handleSportsCategories = () => {
        navigate("/sportsCategories");
    }

    const handleNutritionAndMore = () => {
        navigate("/nutritionAndMoreCategories");
    }

    return (
        <>
            <div id="divAllProducts">
                <div>
                    <button className="btn btn-outline-dark" id="buttonAllProduct" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://amateurphotographer.com/wp-content/uploads/sites/7/2018/10/Galaxy-A0-Press-Release_main_1-612x408.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Mobiles</h5>
                                        <button type="button" className="btn btn-light" onClick={handleMobileCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://thumbs.dreamstime.com/b/laptop-tablet-smartphone-headphone-electronic-device-isolated-white-background-133428983.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Electronics</h5>
                                        <button type="button" className="btn btn-light" onClick={handleElectronicsCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/952839420/photo/home-appliancess-set-of-household-kitchen-technics-in-the-new-appartments-or-kitchen-e.jpg?b=1&s=612x612&w=0&k=20&c=AvVZHqP0SoFutmH_Am2mBZ8thC-e_OxynYauonHn6BY=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Appliances</h5>
                                        <button type="button" className="btn btn-light" onClick={handleAppliancesCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Fashion</h5>
                                        <button type="button" className="btn btn-light" onClick={handleFashionCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/1190440285/photo/eclectic-living-room-interior-with-comfortable-velvet-corner-sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=T87OfLSfrChREiVaDLJA4LIM2qvrc7UaosmxH75RY98=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Home</h5>
                                        <button type="button" className="btn btn-light" onClick={handleHomeCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/914783052/photo/set-of-colorful-perfume-bottles-in-shop-window.jpg?s=612x612&w=0&k=20&c=Y81Uw02g7qDi0EJYkAXI7IoEuLbdoYnhaMVKmBRcnlE=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Personal Care</h5>
                                        <button type="button" className="btn btn-light" onClick={handlePersonalCareCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/1185943155/photo/beautiful-toddler-sitting-on-the-floor-playing-with-building-blocks-toys-at-kindergarten.jpg?s=612x612&w=0&k=20&c=FJreI34oJhGcdVhnALb-58Ys0ySay61Jnr1WOPgR_bM=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Toys and Baby Care</h5>
                                        <button type="button" className="btn btn-light" onClick={handleToysAndBabyCareCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/1174577798/photo/pastel-chairs-in-empty-background-concept-of-minimalism-installation-art-3d-rendering-mock-up.jpg?b=1&s=170667a&w=0&k=20&c=d21-2djT0vBiCpjqljaNDSaovaWqX9zim_0ct_T7Q0o=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Furniture</h5>
                                        <button type="button" className="btn btn-light" onClick={handleFurnitureCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }} id="cardItem">
                                    <img src="https://media.istockphoto.com/id/1188462138/photo/variety-of-sport-accessories-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=y2l7DYNkxbVteZy-Kx_adCzm-soTRbiEypje4j8ENe0=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Sports</h5>
                                        <button type="button" className="btn btn-light" onClick={handleSportsCategories}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://media.istockphoto.com/id/1005962212/photo/balanced-diet-food-background.jpg?s=612x612&w=0&k=20&c=Bt-1ivoWnkZpXDxc989TTLmrN8jDsX0iBtqXZFpVoZk=" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Nutrition and More</h5>
                                        <button type="button" className="btn btn-light" onClick={handleNutritionAndMore}><VisibilityIcon sx={{ color: pink[500] }} />View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AllProductComponent;