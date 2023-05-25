import { useState } from 'react'
import MainView from "./jsxfiles/mainView.jsx";
import Pracownia from "./jsxfiles/pracownia.jsx";
import Projekty from "./jsxfiles/projekty.jsx";
import Kontakt from "./jsxfiles/kontakt.jsx";



function App() {

    const [viewMain, setViewMain] = useState(true);
    const [viewPracowania, setViewPracownia] = useState('1');
    const [viewProjekty, setViewProjekty] = useState('1');
    const [viewKontakt, setViewKontakt] = useState('1');
    console.log("ddd")

    function SectionSelection(value) {
        console.log(value)
        switch (value) {
            case 1:
                setViewMain(true);
                setViewPracownia(false);
                setViewProjekty(false);
                setViewKontakt(false);
                return;
            case 2:
                setViewMain(false);
                setViewPracownia(true);
                setViewProjekty(false);
                setViewKontakt(false);
                return;
            case 3:
                setViewMain(false);
                setViewPracownia(false);
                setViewProjekty(true);
                setViewKontakt(false);
                return;
            case 4:
                setViewMain(false);
                setViewPracownia(false);
                setViewProjekty(false);
                setViewKontakt(true);
                return;
        }
    }

  return (
    <>
        <main className="main_structure">
          <header className='header_style menufont'>
              <div className="header_title">
                  <img src="../src/image/ico/logo_white.png" alt="logo ppm2" onClick={() => SectionSelection(1)}/>
                  <p className="header_company_name">PRACOWNIA PROJEKTOWA M KWADRAT </p>
                  <p className="header_person_name">MICHAŁ DĄBEK</p>
              </div>
              <div className="header_title">
                  <nav>
                      <a className="header_button" onClick={() => SectionSelection(2)}>PRACOWNIA</a>
                      <a className="header_button" onClick={() => SectionSelection(3)}>PROJEKTY</a>
                      <a className="header_button" onClick={() => SectionSelection(4)}>KONTAKT</a>
                  </nav>
              </div>
          </header>
            {viewMain ? <MainView/> : ''}
            {viewPracowania ? <Pracownia/> : ''}
            {viewProjekty ? <Projekty/> : ''}
            {viewKontakt ? <Kontakt/> : ''}
        </main>
    </>
  )
}

export default App
