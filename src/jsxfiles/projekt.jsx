import React, {useState} from 'react';
import {useStoreState} from "easy-peasy";

function Projekt({projekt}) {
    const bazaProjektow = useStoreState((state) => state.bazaProjektow);
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
        <div className="projekt">
            <div className="projekt_box_img">
                <div className="prj_main_btn_l" onClick={photoDown}></div>
                <div className="prj_main_btn_r" onClick={photoUp}></div>
                <img className="prj_main_img" src={`../../src/image/prj/${projekt.id}/${projekt.photo[photoNr]}`}/>

            </div>
            <div className="prj_description_box">
                <div className="prj_left_column">
                    <h2> {projekt.title} </h2>
                    <p> {projekt.cooperation} </p>
                    <p> {projekt.award} </p>
                    <p> {projekt.phase} </p>
                    <p> {projekt.realization} </p>
                </div>
                <div className="prj_right_column mainfont">
                    <p> {projekt.description} </p>
                </div>
            </div>
            <p>powrót</p><p> {projekt.id} </p>

        </div>
    );
}

export default Projekt;