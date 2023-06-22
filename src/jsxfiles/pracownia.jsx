import React, {useEffect, useState} from 'react';
import Footer from "./footer.jsx";
import michalDabekPhoto from "../image/office/MichalDabek_png.png"
import michalDabekPhotoMobile from "../image/office/MichalDabek_mobile.jpg"


function Pracownia() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="conteiner mainview_conteiner paddingtop">

                <header className="projekty_header">
                    <h2>Pracownia:</h2>
                </header>
                <div className="pracownia_box">
                    <div className="pracownia_column mainfont pracownia_section">

                        {windowWidth < 950 && (
                            <img src={michalDabekPhotoMobile} alt="Michał Dąbek" className=" pracownia_img_mobile mobile"/>
                        )}
                        <p >PRACOWNIA PROJEKTOWA M KWADRAT, to autorska pracownia architektoniczna, działająca formalnie od 2004 roku. Zajmuje się projektowaniem architektonicznym w szerokiej skali – zaczynając od projektów wnętrz, poprzez projekty budynków mieszkalnych i użyteczności publicznej, a kończąc na przestrzeniach publicznych placów miejskich oraz budowlach inżynierskich.</p>

                        <p >Sprawdzona przez lata w praktyce metoda tworzenia indywidualnych zespołów zadaniowych z wyspecjalizowanymi projektantami, pozwala z dużą elastycznością, kreatywnością i zaangażowaniem finalizować złożony i trudny proces projektowy. Równie ważnym obszarem działań pracowni projektowej jest czynny udział w międzynarodowych i krajowych konkursach projektowych, co pozwala stale konfrontować swoje pomysły ze współczesnymi wizjami architektonicznymi w wydaniu niekomercyjnym. Z tego też powodu jesteśmy szczególnie dumni z licznych nagród i wyróżnień uzyskanych w ramach profesjonalnego współzawodnictwa.</p>
                        <p >Zapraszamy do współpracy inwestorów i podmioty z branży, dla których świadome projektowanie jest jednym z kluczowych czynników determinujących jakość i sukces inwestycji.</p>
                    </div>
                    {windowWidth >= 950 && (
                        <img src={michalDabekPhoto} alt="Michał Dąbek" className="pracownia_img screen"/>
                    )}

                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Pracownia;