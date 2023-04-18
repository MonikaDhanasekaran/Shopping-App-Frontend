import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PersonalCareCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleSkinCare = () => {
        navigate("/personalCare/skinCare");
    }

    const handleHairCare = () => {
        navigate("/personalCare/hairCare");
    }

    const handleMakeup = () => {
        navigate("/personalCare/makeup");
    }

    const handleFragrances = () => {
        navigate("/personalCare/fragrances");
    }

    const handleDailyEssentials = () => {
        navigate("/personalCare/dailyEssentials");
    }

    const handleMenGrooming = () => {
        navigate("/personalCare/menGrooming");
    }

    const handleOralCare = () => {
        navigate("/personalCare/oralCare");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divPersonalCareImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonPersonalCareCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleSkinCare}>
                                                <img src="https://media.istockphoto.com/id/1198863709/photo/skin-and-hair-care-beauty-product-mock-up-lotion-bottle-oil-cream-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=_0-9dLUohaQrThH0669Ygx3Ar17rX0cRkXy0cEexfQw=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Skin Care</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleHairCare}>
                                                <img src="https://media.istockphoto.com/id/1356587396/photo/shampoo-and-hair-conditioner-bottle-with-soapy-bubbles-beauty-hair-care-cosmetic-packaging.jpg?s=612x612&w=0&k=20&c=jM2woyBay4kGCbVsLVqvx1ZXWDU6KLAGGan3DMoTFgU=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Hair Care</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleMakeup}>
                                                <img src="https://media.istockphoto.com/id/1173485056/photo/let-the-beautification-begin.jpg?s=612x612&w=0&k=20&c=8kkK6OhWRkDILt5CmxRqX5O3x3gEcsmIxdaG86D5JWI=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Makeup</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleFragrances}>
                                                <img src="https://media.istockphoto.com/id/1314395929/photo/the-girl-uses-perfume-perfume-in-female-hands.jpg?s=612x612&w=0&k=20&c=ytb2KhYM0V0po595LwvD6SzqvKZjJuQL6mblaQ0gpt4=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Fragrances</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleDailyEssentials}>
                                                <img src="https://media.istockphoto.com/id/157671523/photo/many-shampoo-and-soap-bottles-on-a-bathroom-shelf.jpg?s=612x612&w=0&k=20&c=bUFEO1zyG7gGuwoaei2pTOOrrtSJMkZ1TABV93gxGaE=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Daily Essentials</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleMenGrooming}>
                                                <img src="https://media.istockphoto.com/id/156985506/photo/shave-tools.jpg?s=612x612&w=0&k=20&c=BmV5lXqS0kHPdsnpME38mIKvnJAA5Zat3Q6945es9Y8=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Men's Grooming</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divPersonalCare">
                                            <button type="button" className="btn btn-outline-light" id="buttonPersonalCare" onClick={handleOralCare}>
                                                <img src="https://media.istockphoto.com/id/1218034484/photo/dental-health-and-care-products.jpg?s=612x612&w=0&k=20&c=zFu1r99j50kItortis1OrMasoGnVSbCq6PHAlsACbLo=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingPersonalCare">Oral Care</h3>
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

export default PersonalCareCategoriesComponent;