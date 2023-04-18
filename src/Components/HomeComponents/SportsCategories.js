import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SportsCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleSportsShoes = () => {
        navigate("/sports/sportsShoes");
    }

    const handleSportsWear = () => {
        navigate("/sports/sportsWear");
    }

    const handleSportsGear = () => {
        navigate("/sports/sportsGear");
    }

    const handleFitnessEquipments = () => {
        navigate("/sports/fitnessEquipments");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divSportsImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonSportsCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divSports">
                                            <button type="button" className="btn btn-outline-light" id="buttonSports" onClick={handleSportsShoes}>
                                                <img src="https://www.innovationintextiles.com/uploads/13246/Nike-Running-612x408-boxed.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingSports">Sports Shoes</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divSports">
                                            <button type="button" className="btn btn-outline-light" id="buttonSports" onClick={handleSportsWear}>
                                                <img src="https://media.istockphoto.com/id/466367844/photo/clothes-make-running.jpg?s=612x612&w=0&k=20&c=eGOSP7X2MoXpGKhv8a3UlYHplvKvIIdUPmVKBSd3bMI=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingSports">Sports Wear</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divSports">
                                            <button type="button" className="btn btn-outline-light" id="buttonSports" onClick={handleSportsGear}>
                                                <img src="https://media.istockphoto.com/id/1136317339/photo/sports-equipment-on-floor.jpg?s=612x612&w=0&k=20&c=-aI8u_Se89IC-HJZYH724ei5z-bIcSvRW6qUwyMtRyE=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingSports">Sports Gear</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divSports">
                                            <button type="button" className="btn btn-outline-light" id="buttonSports" onClick={handleFitnessEquipments}>
                                                <img src="https://media.istockphoto.com/id/80488814/photo/treadmills-in-a-row.jpg?s=612x612&w=0&k=20&c=_nDKxbnJVazDDztmTDOO884wCJrqkJi0WefbLC2T1Ac=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingSports">Fitness Equipments</h3>
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

export default SportsCategoriesComponent;