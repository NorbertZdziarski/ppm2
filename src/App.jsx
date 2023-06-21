import { useState } from 'react'
import MainView from "./jsxfiles/mainView.jsx";
import Pracownia from "./jsxfiles/pracownia.jsx";
import Projekty from "./jsxfiles/projekty.jsx";
import Kontakt from "./jsxfiles/kontakt.jsx";
import Nagrody from "./jsxfiles/nagrody.jsx";
import logo from "../src/image/ico/logo_white.png";
import {
    Route,
    Routes, Router, useRoutes, BrowserRouter, Link,
} from "react-router-dom";
import Projekt from "./jsxfiles/projekt.jsx";
import {StoreProvider, useStoreState} from 'easy-peasy';


function App() {
    const page = useStoreState((state) => state.page);
  return (
    <>

        <main className="main_structure">

                <BrowserRouter basename="">
                  <header className='header_style menufont'>
                      <div className="header_title">
                          <Link to="/"><img src={logo} alt="logo ppm2"  className="logo_btn" /></Link>
                              <div className="rwd_conteiner">
                                  <div className="screen">
                                     <p className="header_company_name ">PRACOWNIA PROJEKTOWA M KWADRAT </p><p className="header_person_name">MICHAŁ DĄBEK</p>
                                  </div>
                                  <div className="mobile">
                                      <p className="header_company_name">PPm2 </p>
                                      <p className="header_person_name">MICHAŁ DĄBEK</p>
                                  </div>
                              </div>

                      </div>
                      <div className="header_title">
                          <nav className="header_menu_rwd">
                              <Link to="/pracownia"><a className="header_button" >PRACOWNIA</a></Link>
                              <Link to="/projekty"><a className="header_button" >PROJEKTY</a></Link>
                              <Link to="/nagrody"><a className="header_button" >NAGRODY</a></Link>
                              <Link to="/kontakt"><a className="header_button" >KONTAKT</a></Link>
                          </nav>
                      </div>
                  </header>

                    <Routes>
                        <Route path="/" element={<MainView/>} />
                        <Route path="/pracownia" element={<Pracownia/>} />
                        <Route path="/projekty" element={<Projekty/>} />
                        <Route
                            path={`/projekty/${page.id}`}
                            element={<Projekt
                                        projekt = {page}
                            />}
                        />
                        <Route path="/kontakt" element={<Kontakt/>} />
                        <Route path="/nagrody" element={<Nagrody/>} />
                    </Routes>
                </BrowserRouter>

        </main>
    </>
  )
}

export default App

