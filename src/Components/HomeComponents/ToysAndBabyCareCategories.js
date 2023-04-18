import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ToysAndBabyCareCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleBabyCareEssentials = () => {
        navigate("/toysAndBabyCare/babyCareEssentials");
    }

    const handleToysAndGames = () => {
        navigate("/toysAndBabyCare/toysAndGames");
    }

    const handleGuidanceForParents = () => {
        navigate("/toysAndBabyCare/guidanceForParents");
    }

    const handleStationeryAndSchoolSupplies = () => {
        navigate("/toysAndBabyCare/stationeryAndSchoolSupplies");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divToysAndBabyCareImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonToysAndBabyCareCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divToysAndBabyCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonToysAndBabyCare" onClick={handleBabyCareEssentials}>
                                                <img src="https://media.istockphoto.com/id/1253821157/photo/diapers-and-baby-supplies-on-a-pink-background.jpg?s=612x612&w=0&k=20&c=dLUhHGkYDiU5CjbM-YA3ArH0kvqv38rondSC4RdFa6Q=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingToysAndBabyCare">Baby Care Essentials</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divToysAndBabyCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonToysAndBabyCare" onClick={handleToysAndGames}>
                                                <img src="https://www.aiprescience.com/wp-content/uploads/call-centre-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingToysAndBabyCare">Toys & Games</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divToysAndBabyCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonToysAndBabyCare" onClick={handleGuidanceForParents}>
                                                <img src="https://media.istockphoto.com/id/1373621705/photo/mother-and-her-teenager-daughter-talking-with-therapist.jpg?s=612x612&w=0&k=20&c=njK97ZUSlTxxvDE7vBDWCQzsTFT4_9fAIZKAWoN2BSs=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingToysAndBabyCare">Guidance for Parents</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divToysAndBabyCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonToysAndBabyCare" onClick={handleStationeryAndSchoolSupplies}>
                                                <img src="https://www.sd44.ca/school/windsor/FeaturedStories/recycle%20pens.png" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingToysAndBabyCare">Stationery & School Supplies</h3>
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

export default ToysAndBabyCareCategoriesComponent;