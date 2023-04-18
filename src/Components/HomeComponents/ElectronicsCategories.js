import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ElectronicsCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleLaptopsAndDesktops = () => {
        navigate("/electronics/laptopsAndDesktops");
    }

    const handleHeadphones = () => {
        navigate("/electronics/headphones");
    }

    const handleSmartWearables = () => {
        navigate("/electronics/smartWearables");
    }

    const handleStylingDevices = () => {
        navigate("/electronics/stylingDevices");
    }

    const handleCameras = () => {
        navigate("/electronics/cameras");
    }

    const handleTablets = () => {
        navigate("/electronics/tablets");
    }

    const handleComputerAccessories = () => {
        navigate("/electronics/computerAccessories");
    }

    const handleMobileProtection = () => {
        navigate("/electronics/mobileProtection");
    }

    const handlePowerBanks = () => {
        navigate("/electronics/powerBanks");
    }

    const handleSpeakers = () => {
        navigate("/electronics/speakers");
    }

    const handleMobileAccessories = () => {
        navigate("/electronics/mobileAccessories");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divElectronicsImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonElectronicsCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleLaptopsAndDesktops}>
                                                <img src="https://www.itsitio.com/wp-content/uploads/2019/01/Samsung-Notebook-Flash-1-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Laptops and Desktops</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleHeadphones}>
                                                <img src="https://www.pirmi.lt/image/bsimage%3A%2F%2Fprintlog%2FProductProperty%2Fd4995905-5671-4463-a02f-af5100d8c10a%40612x408%3Fw%3Dx2048%26f%3DWebp" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Headphones</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleSmartWearables}>
                                                <img src="https://img.global.news.samsung.com/za/wp-content/uploads/2018/11/3_Galaxy-Watch-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Smart Wearables</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleStylingDevices}>
                                                <img src="https://media.istockphoto.com/id/680168804/photo/various-hair-styling-devices-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=oJobuAkBygJ88sYNloVqYgBBFcKeNAmOk5DTwr8dWkk=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Styling Devices</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleCameras}>
                                                <img src="https://www.sony.eu/presscentre/assets/resized/2021/05/6-PR_ILCE-7SM3_ECM-B1M_Situation18_DSC03234_landscape_2000x700.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Cameras</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleTablets}>
                                                <img src="https://img.global.news.samsung.com/latin/wp-content/uploads/2022/02/Galaxy-Tab-S8_Silver_R30-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Tablets</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleComputerAccessories}>
                                                <img src="https://media.istockphoto.com/id/635790376/photo/computer-peripherals-laptop-accessories-composition-on-stone.jpg?s=612x612&w=0&k=20&c=EIu4Pmadacbq6Kk2iSezHUZFiCeLEGP5BhYjajTCSBU=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Computer Accessories</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronics" onClick={handleMobileProtection}>
                                                <img src="https://img.global.news.samsung.com/za/wp-content/uploads/2018/10/Making-The-Galaxy-Note9-Uniquely-Yours-_main1-612x408.png" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronics">Mobile Protection</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronicsPowerbanks" onClick={handlePowerBanks}>
                                                <img src="https://media.istockphoto.com/id/1282797494/photo/man-hands-holding-phone-with-isolated-screen-and-powerbank-suitcase.jpg?s=612x612&w=0&k=20&c=KFwePk4tKcGkv51kzPLHGjxSqKhyYbQDmjVuiC9FxjQ=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronicsPowerbanks">Powerbanks</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronicsSpeakers" onClick={handleSpeakers}>
                                                <img src="https://rukminim1.flixcart.com/image/612/612/k5vcya80pkrrdj/speaker/laptop-desktop-speaker/9/h/z/zebronics-zeb-warrior-original-imafmyptqxt2dubt.jpeg?q=70" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronicsSpeakers">Speakers</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divElectronics">
                                            <button type="button" className="btn btn-outline-light" id="buttonElectronicsMobile" onClick={handleMobileAccessories}>
                                                <img src="https://media.istockphoto.com/id/1156397327/photo/mobile-kit-with-smartphone-headphones-and-chargers.jpg?s=612x612&w=0&k=20&c=t3ohE9UBWLzblm_-IVuMQ1AYXR17NEH9nJJBDu_H67w=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingElectronicsMobile">Mobile Accessories</h3>
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

export default ElectronicsCategoriesComponent;