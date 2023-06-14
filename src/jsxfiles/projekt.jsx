import React from 'react';

function Projekt({projekt}) {
    return (
        <div className="projekt">
            <div >

                <img className="prj_main_img" src="../../src/image/prj/kladka_1A.jpg"/>
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