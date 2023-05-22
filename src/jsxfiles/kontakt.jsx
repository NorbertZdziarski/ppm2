import React from 'react';
import Footer from "./footer.jsx";

function Kontakt(props) {
    return (
        <>
        <div className="kontakt_conteiner conteiner">
            <div className="kontakt_box">
                <img src="../../src/image/ico/logo_white.png" className="kontakt_img" alt="logo PPm2"/>
                <div className="kontakt_right_column">
                    <div className="kontakt_header">
                        <p className="kontakt_fnt">PRACOWNIA PROJEKTOWA M KWADRAT </p>
                        <p className="kontakt_fnt_name">MICHAŁ DĄBEK</p>
                    </div>

                    <div>
                        <p className="kontakt_main_font">dane kontaktowe:</p>
                    </div>
                </div>
            </div>

        </div>
            <Footer/>
        </>
    );
}

export default Kontakt;