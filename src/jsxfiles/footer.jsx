import React from 'react';

function Footer() {
    const d = new Date()
    let year = d.getFullYear();
    return (
        <footer className="footer mainfont">
            <p >(C) {year} Pracownia Projektowa M Kwadrat Michał Dąbek. Realizacja: Norbert Zdziarski</p>
        </footer>
    );
}

export default Footer;