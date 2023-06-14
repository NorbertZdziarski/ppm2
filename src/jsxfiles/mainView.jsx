import React from 'react';
import Footer from "./footer.jsx";
import portugalia from "../../src/image/prj/Portugalia2016_3.jpg"
import nysa from "../../src/image/prj/Nysa_S1.jpg"
import tpn from "../../src/image/prj/TPN-w2-a.jpg"
import {Link} from "react-router-dom";

function MainView() {
    return (
        <>
            <header className="mainview_header">

            </header>
            <main>
                <section className="mainview_conteiner">
                    <div className="mainview_section">
                        <h2>WYBRANE PROJEKTY</h2>
                    </div>
                    <Link to="/pracownia/16">

                    <div className="mainview_portfolio_project">
                        <div className="mainview_box mainview_box__title">
                            <h3>SAGRES, PORTUGALIA</h3>
                        </div>
                        <div className="mainview_box mainview_box__description">
                            <div>
                                <h4>Okno żeglarza</h4>
                                <p className="mainfont">Niezaprzeczalnym walorem lokalizacji projektu, jest rozległy widok, w którym dominują horyzontalne linie. Stojąc na krawędzi klifu widz może obserwować wszystkie charakterystyczne punkty lokalnego krajobrazu połączone linią horyzontu.</p>
                            </div>
                        </div>
                        <div className="mainview_box mainview_box__image">
                            <img src={portugalia} className="mainview_image" alt="Portugal" />
                        </div>
                    </div>
                    </Link>

                    <div className="mainview_portfolio_project">

                        <div className="mainview_box mainview_box__title mainview_box__title_order">
                            <h3>ZAKOPANE, POLSKA</h3>
                        </div>



                        <div className="mainview_box mainview_box__description mainview_box__description_order">
                            <div>
                                <h4>Park Narodowy</h4>
                                <p className="mainfont">Poszukiwania ideowe dla formy projektowanego obiektu stały się pretekstem do zdefiniowania „bramy” jako punktu styku między „terytorium przyrody” a „terytorium człowieka”. Specyficzny sposób postrzegania budynku (stojącego przy drodze) przez przechodzącego turystę idącego w kierunku gór lub wracającego do miasta podsunął pomysł aby skonfrontować te dwa wglądy..</p>
                            </div>
                        </div>

                        <div className="mainview_box mainview_box__image mainview_box__image_order">
                            <img src={tpn} className="mainview_image" alt="TPN" />
                        </div>


                    </div>

                    <div className="mainview_portfolio_project">
                        <div className="mainview_box mainview_box__title">
                            <h3>NYSA, POLSKA</h3>
                        </div>
                        <div className="mainview_box mainview_box__description">
                            <div>
                                <h4>Nysa</h4>
                                <p className="mainfont">Całą złożoną funkcję projektowanego budynku sądu, wpisano w jedna bryłę akcentując jej narożnik, który stanowi istotny kierunek widokowy a równocześnie nawiązuje do wycofanej elewacji Budynku Straży Pożarnej.</p>
                            </div>
                        </div>
                        <div className="mainview_box mainview_box__image">
                            <img src={nysa} className="mainview_image" alt="Nysa" />
                        </div>
                    </div>




                </section>

            </main>
            <Footer/>
        </>
    );
}

export default MainView;