import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import Footer from "./footer.jsx";
import {useStoreActions, useStoreState} from "easy-peasy";

function Projekt({projekt}) {



    const [photoNr, setPhotoNr] = useState(0);
    const photoUp = () => {
        if (photoNr === projekt.photo.length - 1) {
            setPhotoNr(0);
            return};
        setPhotoNr(photoNr + 1)
    }
    const photoDown = () => {
        if (photoNr === 0) { setPhotoNr(projekt.photo.length - 1); return;}
        setPhotoNr(photoNr - 1)
    }




    return (
        <>
            <div className="projekt">
                <div className="projekt_box_img">
                    <div className="prj_main_btn_l" onClick={photoDown}></div>
                    <div className="prj_main_btn_r" onClick={photoUp}></div>
                    <img className="prj_main_img" src={`../image/prj/${projekt.id}/${projekt.photo[photoNr]}`}/>

                </div>
                <div className="prj_description_box">
                    <div className="prj_left_column">
                        <h2> {projekt.title} </h2>
                        <p> {projekt.cooperation} </p>
                        <p> {projekt.award} </p>
                        <p> {projekt.phase} </p>
                        {(projekt.dataPTI !== 0 ? <p>Powierzchnia terenu inwestycji: {projekt.dataPTI} m2</p> : <></> )}
                        {(projekt.dataPZ !== 0 ? <p> Powierzchnia zabudowy: {projekt.dataPZ} m2</p> : <></> )}
                        {(projekt.dataPU !== 0 ? <p> Powierzchnia użytkowa: {projekt.dataPU} m2</p> : <></> )}
                        {(projekt.dataKubatura !== 0 ? <p> Kubatura: {projekt.dataKubatura} m3</p> : <></> )}
                        <p> {projekt.realization} </p>
                        <Link to="/projekty">
                            <button className="moreless_btn screen">powrót</button>
                        </Link>



                    </div>
                    <div className="prj_right_column mainfont">
                        <p> {projekt.description} </p>
                    </div>
                    <Link to="/projekty">
                        <button className="moreless_btn mobile">powrót</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Projekt;