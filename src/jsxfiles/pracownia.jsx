import React from 'react';
import Footer from "./footer.jsx";

function Pracownia(props) {
    return (
        <>
            <div className="conteiner mainview_conteiner ">
                <header className="projekty_header">
                    <h2>Nasza pracownia:</h2>
                </header>
                <p className="mainfont">to sami profesjonaliści</p>

            </div>
            <Footer/>
        </>
    );
}

export default Pracownia;