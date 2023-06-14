import React from 'react';
import Footer from "./footer.jsx";
import logo from "../../src/image/ico/logo_white.png"

function Kontakt() {
    return (
        <>
        <div className="kontakt_conteiner conteiner">
            <div className="kontakt_box">
                <img src={logo} className="kontakt_img" alt="logo PPm2"/>
                <div className="kontakt_right_column">
                    <div className="kontakt_header">
                        <p className="kontakt_fnt">PRACOWNIA PROJEKTOWA M KWADRAT </p>
                        <p className="kontakt_fnt_name">MICHAŁ DĄBEK</p>
                    </div>

                    <div>
                        <p className="kontakt_main_font">dane kontaktowe:</p>
                    </div>
                    <div>
                        <p className="kontakt_main_font txtsection_odstep">Tel: 509 059 789</p>
                        <p className="kontakt_main_font txtsection_odstep">E-mail: <a href="mailto:biuro@ppm2.pl" className="kontakt_main_font">biuro@ppm2.pl</a></p>

                    </div>
                </div>
            </div>

        </div>
            <Footer/>
        </>
    );
}

export default Kontakt;