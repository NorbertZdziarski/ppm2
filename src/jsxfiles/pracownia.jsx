import React from 'react';
import Footer from "./footer.jsx";

function Pracownia() {
    return (
        <>
            <div className="conteiner mainview_conteiner paddingtop">
                <header className="projekty_header">
                    <h2>Pracownia:</h2>
                </header>

                <p className="mainfont pracownia_section">PRACOWNIA PROJEKTOWA M KWADRAT, to autorska pracownia architektoniczna, działająca formalnie od 2004 roku. Zajmuje się projektowaniem architektonicznym w szerokiej skali – zaczynając od projektów wnętrz, poprzez projekty budynków mieszkalnych i użyteczności publicznej, a kończąc na przestrzeniach publicznych placów miejskich oraz budowlach inżynierskich.</p>
                <p className="mainfont pracownia_section">Sprawdzona przez lata w praktyce metoda tworzenia indywidualnych zespołów zadaniowych z wyspecjalizowanymi projektantami, pozwala z dużą elastycznością, kreatywnością i zaangażowaniem finalizować złożony i trudny proces projektowy. Równie ważnym obszarem działań pracowni projektowej jest czynny udział w międzynarodowych i krajowych konkursach projektowych, co pozwala stale konfrontować swoje pomysły ze współczesnymi wizjami architektonicznymi w wydaniu niekomercyjnym. Z tego też powodu jesteśmy szczególnie dumni z licznych nagród i wyróżnień uzyskanych w ramach profesjonalnego współzawodnictwa.</p>
                <p className="mainfont pracownia_section">Zapraszamy do współpracy inwestorów i podmioty z branży, dla których świadome projektowanie jest jednym z kluczowych czynników determinujących jakość i sukces inwestycji.</p>


            </div>
            <Footer/>
        </>
    );
}

export default Pracownia;