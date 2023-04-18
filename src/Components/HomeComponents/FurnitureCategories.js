import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FurnitureCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleSofas = () => {
        navigate("/furniture/sofas");
    }

    const handleBeds = () => {
        navigate("/furniture/beds");
    }

    const handleWardrobes = () => {
        navigate("/furniture/wardRobes");
    }

    const handleDiningTables = () => {
        navigate("/furniture/diningTables");
    }

    const handleOfficeChairs = () => {
        navigate("/furniture/officeChairs");
    }

    const handleRecliners = () => {
        navigate("/furniture/recliners");
    }

    const handleTVUnits = () => {
        navigate("/furniture/tvUnits");
    }

    const handleLaptopTables = () => {
        navigate("/furniture/portableLaptopTables");
    }

    const handleSwings = () => {
        navigate("/furniture/swings");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divFurnitureImage">
                <div>
                    <button className="btn btn-outline-dark" id="buttonFurnitureCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleSofas}>
                                                <img src="https://havenly.com/blog/wp-content/uploads/2016/09/livingroom_makeover_1-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Sofas</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleBeds}>
                                                <img src="https://havenly.com/blog/wp-content/uploads/2016/03/GLG_Havenly_Design_01-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Beds</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleWardrobes}>
                                                <img src="https://cdn.sanity.io/images/15w996j8/cms/d737404ef7604a530f0c21f1acfaa5d04e62c527-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Wardrobes</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleDiningTables}>
                                                <img src="https://lenbrook-atlanta.org/sites/default/files/resize/news/image/Kingsboro%20Findley%20Home%20%281%29-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Dining Tables</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleOfficeChairs}>
                                                <img src="https://www.furnitureman.ie/image/cache/catalog/Chantelle-Grey-Set--612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Office Chairs</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleRecliners}>
                                                <img src="https://media.istockphoto.com/id/512351128/photo/brown-reclining-leather-chair.jpg?s=612x612&w=0&k=20&c=HfPu1hdKA_xUj_LxAWYdd9rJnwZ_1bNncfLHrnPskRs=" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Recliners</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleTVUnits}>
                                                <img src="https://img.global.news.samsung.com/latin/wp-content/uploads/2022/02/Neo-QLED-Lifestyle_5-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">TV Units</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleLaptopTables}>
                                                <img src="https://havenly.com/blog/wp-content/uploads/2015/08/YGUsJIhqIKwpt9Ia0nAG56YhzROj443xjJIGfw-yjEU-612x408.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Portable Laptop Tables</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divFurniture">
                                            <button type="button" className="btn btn-outline-light" id="buttonFurniture" onClick={handleSwings}>
                                                <img src="http://cdn.home-designing.com/wp-content/uploads/2019/05/Teak-Swing-Sofa-with-Cushion-Cream-Color-Outdoor-Seating-Ideas-Modern-Elegant-Luxury-600x440.jpg" className="card-img-top"
                                                    id="mobileRoundCard" alt="..." />
                                            </button>
                                            <h3 id="headingFurniture">Swings</h3>
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

export default FurnitureCategoriesComponent;