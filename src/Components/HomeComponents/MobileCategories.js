import React from "react";
import "../HomeComponents/shop.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MobileCategoriesComponent = () => {

    const navigate = useNavigate();

    const handleRealMeMobile = () => {
        navigate("/mobile/realme");
    }

    const handlePocoMobile = () => {
        navigate("/mobile/poco");
    }

    const handleSamsungMobile = () => {
        navigate("/mobile/samsung");
    }

    const handleVivoMobile = () => {
        navigate("/mobile/vivo");
    }

    const handleAppleMobile = () => {
        navigate("/mobile/apple");
    }

    const handleMotorolaMobile = () => {
        navigate("/mobile/motorola");
    }

    const handleXiaomiMobile = () => {
        navigate("/mobile/xiaomi");
    }

    const handleOppoMobile = () => {
        navigate("/mobile/oppo");
    }

    const handleGoogleMobile = () => {
        navigate("/mobile/googlePixel");
    }

    const handleBack = () => {
        navigate("/categories");
    }

    return (
        <>
            <div id="divMobileImage">
                <div id="divMobileCategories">
                    <button className="btn btn-outline-dark" id="buttonMobileCategories" onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handleRealMeMobile}><img src="https://wallpaperaccess.com/full/5333421.png" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">Realme</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handlePocoMobile}><img src="https://assets.mspimages.in/wp-content/uploads/2020/04/POCO-logo.jpg" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">POCO</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handleSamsungMobile}><img src="https://assets.gadgets360cdn.com/pricee/assets/brand/og-samsung-logo.png" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">Samsung</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handleVivoMobile}><img src="https://assets.mspimages.in/wp-content/uploads/2019/11/vivo-upcoming-smartphones.png" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">Vivo</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonAppleMobiles" onClick={handleAppleMobile}><img src="https://i.pinimg.com/originals/b0/fc/18/b0fc18f7ad25cb3af09cc0905ecb39db.jpg" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobiles">Apple</h3>
                                        </div>
                                    </div>
                                    &nbsp; &nbsp;
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handleMotorolaMobile}><img src="https://gumlet.assettype.com/swarajya%2F2020-09%2F4ade7640-dae8-4a20-bb03-5a4d13babaa6%2F10x1210ibn534moto.jpg?q=75&auto=format%2Ccompress&w=1200" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">Motorala</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handleXiaomiMobile}><img src="https://theshillongtimes.com/wp-content/uploads/2021/03/Xiaomi-logo.jpg" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">Xiaomi</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobile">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobile" onClick={handleOppoMobile}><img src="https://www.thestatesman.com/wp-content/uploads/2021/04/OPPO_Logo.jpg" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">OPPO</h3>
                                        </div>
                                    </div>
                                    <div className="col mb-5">
                                        <div id="divMobiles">
                                            <button type="button" className="btn btn-outline-light" id="buttonMobileGoogle" onClick={handleGoogleMobile}><img src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2020/05/google-pixel-logo.jpg" className="card-img-top" id="mobileRoundCard" alt="..." /></button>
                                            <h3 id="headingMobile">Google Pixel</h3>
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

export default MobileCategoriesComponent;