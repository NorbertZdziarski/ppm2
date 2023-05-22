import { useState } from 'react'
import MainView from "./jsxfiles/mainView.jsx";



function App() {
    const [view, setView] = useState('0');
    console.log("ddd")
  return (
    <>
        <main className="main_structure">
          <header className='header_style menufont'>
              <div className="header_title">
                  <img src="../src/image/ico/logo_white.png" alt="logo ppm2"/>
                  <p className="header_company_name">PRACOWNIA PROJEKTOWA M KWADRAT </p>
                  <p className="header_person_name">MICHAŁ DĄBEK</p>
              </div>
              <div className="header_title">
                  <nav>
                      <a className="header_button">PRACOWNIA</a>
                      <a className="header_button">PROJEKTY</a>
                      <a className="header_button">KONTAKT</a>
                  </nav>
              </div>
          </header>
            <MainView/>
        </main>
    </>
  )
}

export default App
