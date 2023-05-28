import React, {useState} from 'react';
import Footer from "./footer.jsx";

function Projekty() {
    const [bigView, setBigView] = useState(true)
    const [choosePrj, setChoosePrj] = useState(0)
    const bazaProjektow = [
        {
            "title": "PROJEKT KŁADKI PIESZO-ROWEROWEJ „KAZIMIERZ-PODGÓRZE” W KRAKOWIE – KŁADKA OJCA BERNATKA",
            "type": "",
            "description": "Koncepcja formalna kładki inspirowana jest organiczną strukturą liścia, którego konstrukcja zbudowana jest z systemu żyłek wyrastających z osiowej konstrukcji nośnej. Lekkość naturalnej formy wspartej o oba brzegi rzeki jest punktem wyjścia dla projektu przeprawy dla pieszych. Odniesienie do formy biologicznej pozwala wpisać się w historyczną zabudowę             nabrzeża, oraz kamiennych obwałowań Wisły. Rozwiązanie urbanistyczne powiązań komunikacyjnych opiera się na istniejących ciągach pieszo-jezdnych i istniejących ścieżkach rowerowych. Różnice wysokości obwałowań można             pokonywać istniejącymi pochylniami i schodami zachowując bogaty detal kamienny zabytkowych murów oporowych. Kamienne przyczółki, pozostałości po wyburzonym moście,             w pełni nadają się do wykorzystania dla nowej konstrukcji kładki.Układ funkcjonalny kładki stanowią dwa ciągi komunikacyjne o szerokości użytkowej 3.00 m.             Dzięki temu rozdzielono ruch pieszy i rowerowy. Niezależnie od korzyści funkcjonalnych rozdzielenia ruchu, uzyskano możliwość oparcia konstrukcji na jednym łuku biegnącym w osi             kładki. Łukowate wygięcie rzutu obu pomostów, stwarza dodatkową sztywność przestrzenną konstrukcji i miękko wpisuje się w istniejący układ urbanistyczny. ",
            "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER",
            "phase":"Projekt budowlany i wykonawczy",
            "award":"I nagroda w konkursie /2006 r./",
            "realization": "Realizacja",
            "id": 1
        },
        {
            "title": "PROJEKT BUDYNKU POLITECHNIKI LUBELSKIEJ – WYDZIAŁ ARCHITEKTURY",
            "type": "",
            "description":"Przedmiotem inwestycji była przebudowa zespołu pałacowego Sobieskich w Lublinie przy ulicy Bernardyńskiej 13 dla inwestycji p.n. „Wschodnie Innowacyjne Centrum Architektury – rozbudowa i wyposażenie kompleksu dydaktyczno – naukowego Politechniki Lubelskiej dla kierunku Architektura i Urbanistyka”.",
            "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER.",
            "phase":"/ Projekt budowlany i wykonawczy /2009 r./",
            "award":"",
            "realization": "",
            "dataPTI" : 4906,
            "dataPZ" : 2549,
            "dataPU" : 6126,
            "dataKubatura" : 32147,
            "id": 2,
        },
        {
            "title": "PROJEKT BUDYNKU MIESZKALNEGO Z USŁUGAMI TOWARZYSZĄCYMI PRZY UL. NADWIŚLAŃSKIEJ W KRAKOWIE.",
            "type": "",
            "description":"Przedmiotem projektu był budynek mieszkalny – z parterem usługowym w zabudowie kwartałowej w ciągu ulic Nadwiślańskiej i Piwnej.",
            "cooperation":"Projekt zrealizowano we współpracy autorskiej z BP – WOJCIECH SARAN.",
            "phase":"Projekt budowlany /2009 r./",
            "award":"",
            "realization": "",
            "dataPTI" : 6848,
            "dataPZ" : 5448,
            "dataPU" : 27627,
            "dataKubatura" : 85755,
            "id": 3,
        },
        {
            "title": "",
            "type": "",
            "description":"",
            "cooperation":"",
            "phase":"",
            "award":"",
            "realization": "",
            "dataPTI" : 0,
            "dataPZ" : 0,
            "dataPU" : 0,
            "dataKubatura" : 0,
            "id": 4,
        }
    ]
    const ShowBigPrj = ({ind, setBigView, description}) => {
        if (ind !== choosePrj) return;
        return (<>
            <p className="mainfont txtsection"></p>
            <p className="mainfont txtsection">{description}</p>
            <button className="moreless_btn" value={ind} onClick={() => setBigView(true)}>zamknij</button>
        </>)
    }

    const chooseProject = (event) => {
        setChoosePrj(event);
        setBigView(false);
    }



    const ShowProject = ({projekt, ind}) => {

        let projektNr = projekt.id - 1;
        return (<div className="projekt_box" key={ind}>
            <p className="mainfont txtsection">{projekt.title}</p>
            <p className="mainfont txtsection_akaptit">{projekt.type}</p>
            <p className="mainfont txtsection_akaptit">{projekt.phase}</p>
            <p className="mainfont txtsection_akaptit">{projekt.award}</p>
            <p className="mainfont txtsection_akaptit">{projekt.realization}</p>

            {(bigView ? <>
                <p className="mainfont">{projekt.description.slice(0,200)} ...</p>
                <button className="moreless_btn" value={projektNr} onClick={() => chooseProject(projektNr)}>więcej informacji</button>
                </> :<ShowBigPrj ind={ind} setBigView = {setBigView} description = {projekt.description} />)}
        </div>)
    }

    return (
        <>
            <div className="conteiner mainview_conteiner paddingtop" key="projekty">
                <header className="projekty_header">
                    <h2>Projekty:</h2>
                </header>
                {bazaProjektow.map((projekt,ind) => <ShowProject
                    projekt={projekt}
                    ind={ind}
                />)}
            </div>
        <Footer/>
        </>
    );
}

export default Projekty;