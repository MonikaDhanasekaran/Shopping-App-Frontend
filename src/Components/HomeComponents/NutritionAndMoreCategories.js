import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NutritionAndMoreCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleFoodAndBeverages = () => {
        navigate("/nutritionAndMore/foodAndBeverages");
    }

    const handleNutritionAndHealthCare = () => {
        navigate("/nutritionAndMore/nutritionAndHealthCare");
    }

    const handleSportsAndFitness = () => {
        navigate("/nutritionAndMore/sportsAndFitness");
    }

    const handleAutoAccessories = () => {
        navigate("/nutritionAndMore/autoAccessories");
    }

    const handlePetsSupplies = () => {
        navigate("/nutritionAndMore/petsSupplies");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divNutritionAndMoreImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonNutritionAndMoreCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divNutritionAndMore">
                                            <button type="button" className="btn btn-outline-light" id="buttonNutritionAndMore" onClick={handleFoodAndBeverages}>
                                                <img src="https://media.istockphoto.com/id/1317505029/photo/pouring-cornflakes-cereals-in-a-bowl-on-a-blue-table-breakfast-table-in-natural-light.jpg?s=612x612&w=0&k=20&c=TvkPqf9_irXtwF85ygccBJ1P2LwTrTZooPNFR-8RnKY=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingNutritionAndMore">Food & Beverages</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divNutritionAndMore">
                                            <button type="button" className="btn btn-outline-light" id="buttonNutritionAndMore" onClick={handleNutritionAndHealthCare}>
                                                <img src="https://media.istockphoto.com/id/1159204281/photo/healthy-food-for-balanced-flexitarian-mediterranean-diet-concept.jpg?s=612x612&w=0&k=20&c=6QdOXtmOuhCyzEEURu9tcO1AJ1E8QJLqs2qErWJH-mU=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingNutritionAndMore">Nutrition & Health Care</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divNutritionAndMore">
                                            <button type="button" className="btn btn-outline-light" id="buttonNutritionAndMore" onClick={handleSportsAndFitness}>
                                                <img src="https://media.istockphoto.com/id/1192423446/photo/asian-man-cycling-on-bike-in-fitness-gym.jpg?s=612x612&w=0&k=20&c=T34-LKIUUvdsIhngY82SKoCe9FJPByZmIjUbM9_5T2g=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingNutritionAndMore">Sports & Fitness</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divNutritionAndMore">
                                            <button type="button" className="btn btn-outline-light" id="buttonNutritionAndMore" onClick={handleAutoAccessories}>
                                                <img src="https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingNutritionAndMore">Auto Accessories</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divNutritionAndMore">
                                            <button type="button" className="btn btn-outline-light" id="buttonNutritionAndMore" onClick={handlePetsSupplies}>
                                                <img src="https://media.istockphoto.com/id/1212071081/photo/image-of-different-species-of-goods-in-pet-store.jpg?s=612x612&w=0&k=20&c=ea1_EDfaV8gVHfBnHp_pVmpgoH8xoJO0i6JpOZb6LFc=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingNutritionAndMore">Pet Supplies</h3>
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

export default NutritionAndMoreCategoriesComponent;