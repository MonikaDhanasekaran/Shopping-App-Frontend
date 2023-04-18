import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AppliancesCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleSmartTv = () => {
        navigate("/appliances/smartTV");
    }

    const handleWashingMachine = () => {
        navigate("/appliances/washingMachine");
    }

    const handleRefrigerators = () => {
        navigate("/appliances/refrigerators");
    }

    const handleFansAndAirCoolers = () => {
        navigate("/appliances/fansAndAirCoolers");
    }

    const handleKitchenAppliances = () => {
        navigate("/appliances/kitchenAppliances");
    }

    const handleAirConditioners = () => {
        navigate("/appliances/airConditioners");
    }

    const handleHomeAppliances = () => {
        navigate("/appliances/homeAppliances");
    }

    const handleMicrowaveOvens = () => {
        navigate("/appliances/microwaveOven");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divAppliancesImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonAppliancesCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleSmartTv}>
                                                <img src="https://img.global.news.samsung.com/latin/wp-content/uploads/2022/01/Neo-QLED-8K__2-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Smart TVs</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleWashingMachine}>
                                                <img src="https://media.istockphoto.com/id/1310076735/photo/laundry-room-with-a-washing-machine.jpg?s=612x612&w=0&k=20&c=w3KSGj4j9qX2Uwzyk7Z3ybafj_pOUnLX2zZmGi9L9I8=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Washing Machine</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleRefrigerators}>
                                                <img src="https://img.global.news.samsung.com/uk/wp-content/uploads/2020/01/RS68N8941SL-WS_004_Front-With-On-Screen_Silver-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Refrigerators</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleFansAndAirCoolers}>
                                                <img src="https://media.istockphoto.com/id/520910061/photo/conditioners-close-up.jpg?s=612x612&w=0&k=20&c=-dugQN0fABD5UJsYi1nz_42axeMOhu6L4_hSq1kp1mQ=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Fans and Air Coolers</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleKitchenAppliances}>
                                                <img src="https://media.istockphoto.com/id/940975636/photo/home-appliances-set-of-household-kitchen-technics-isolated-on-white-background-fridge-gas.jpg?s=612x612&w=0&k=20&c=UNeZiekh2yc5z5PCw3Q3X8NxgG328ED_VamOfe_Pyj4=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Kitchen Appliances</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleAirConditioners}>
                                                <img src="https://media.istockphoto.com/id/1368514998/photo/hand-adjusting-temperature-on-air-conditioner.jpg?s=612x612&w=0&k=20&c=sx_08JADhXZFKFadmJE9vfjF43C5ru5X96YPHLo-EPE=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Air Conditioners</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleHomeAppliances}>
                                                <img src="https://media.istockphoto.com/id/507212963/photo/tailor-at-work-on-sewing-machine.jpg?s=612x612&w=0&k=20&c=mBcv2VzKR3vH9dn7_Bhpq6e6uU2yUCWVierQWh0efqY=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Home Appliances</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divAppliances">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppliances" onClick={handleMicrowaveOvens}>
                                                <img src="https://media.istockphoto.com/id/1284122895/photo/a-womans-hands-closing-microwave-oven-door.jpg?s=612x612&w=0&k=20&c=rEqpaV-6wT2WryjcTZdJ_WxDDWVNXaRN-USgbWJAT0Y=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingAppliances">Microwave Ovens</h3>
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

export default AppliancesCategoriesComponent;