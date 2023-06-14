import React, {useState} from 'react';
import Footer from "./footer.jsx";
import {useNavigate} from "react-router-dom";
import {useStoreActions, useStoreState} from "easy-peasy";

function Projekty() {

    // const bazaProjektow = [
    //     {
    //         "title": "PROJEKT KŁADKI PIESZO-ROWEROWEJ „KAZIMIERZ-PODGÓRZE” W KRAKOWIE – KŁADKA OJCA BERNATKA",
    //         "type": "",
    //         "description": "Koncepcja formalna kładki inspirowana jest organiczną strukturą liścia, którego konstrukcja zbudowana jest z systemu żyłek wyrastających z osiowej konstrukcji nośnej. Lekkość naturalnej formy wspartej o oba brzegi rzeki jest punktem wyjścia dla projektu przeprawy dla pieszych. Odniesienie do formy biologicznej pozwala wpisać się w historyczną zabudowę             nabrzeża, oraz kamiennych obwałowań Wisły. Rozwiązanie urbanistyczne powiązań komunikacyjnych opiera się na istniejących ciągach pieszo-jezdnych i istniejących ścieżkach rowerowych. Różnice wysokości obwałowań można             pokonywać istniejącymi pochylniami i schodami zachowując bogaty detal kamienny zabytkowych murów oporowych. Kamienne przyczółki, pozostałości po wyburzonym moście,             w pełni nadają się do wykorzystania dla nowej konstrukcji kładki.Układ funkcjonalny kładki stanowią dwa ciągi komunikacyjne o szerokości użytkowej 3.00 m.             Dzięki temu rozdzielono ruch pieszy i rowerowy. Niezależnie od korzyści funkcjonalnych rozdzielenia ruchu, uzyskano możliwość oparcia konstrukcji na jednym łuku biegnącym w osi             kładki. Łukowate wygięcie rzutu obu pomostów, stwarza dodatkową sztywność przestrzenną konstrukcji i miękko wpisuje się w istniejący układ urbanistyczny. ",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER",
    //         "phase":"Projekt budowlany i wykonawczy",
    //         "award":"I nagroda w konkursie /2006 r./",
    //         "realization": "Realizacja",
    //         "photo": ["1_kladka_1.jpg","kladka_1B.jpg","kladka_1C.jpg","kladka_1D.jpg","kladka_1E.jpg","kladka_1F.jpg","kladka_1G.jpg"],
    //         "id": 1,
    //         "link":"kladka"
    //     },
    //     {
    //         "title": "PROJEKT BUDYNKU POLITECHNIKI LUBELSKIEJ – WYDZIAŁ ARCHITEKTURY",
    //         "type": "",
    //         "description":"Przedmiotem inwestycji była przebudowa zespołu pałacowego Sobieskich w Lublinie przy ulicy Bernardyńskiej 13 dla inwestycji p.n. „Wschodnie Innowacyjne Centrum Architektury – rozbudowa i wyposażenie kompleksu dydaktyczno – naukowego Politechniki Lubelskiej dla kierunku Architektura i Urbanistyka”.",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER.",
    //         "phase":"/ Projekt budowlany i wykonawczy /2009 r./",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 4906,
    //         "dataPZ" : 2549,
    //         "dataPU" : 6126,
    //         "dataKubatura" : 32147,
    //         "photo": ["politechnika_1B.jpg","politechnika_1C.jpg","politechnika_1A.jpg"],
    //         "id": 2,
    //     },
    //     {
    //         "title": "PROJEKT BUDYNKU MIESZKALNEGO Z USŁUGAMI TOWARZYSZĄCYMI PRZY UL.NADWIŚLAŃSKIEJ W KRAKOWIE.",
    //         "type": "",
    //         "description":"Przedmiotem projektu był budynek mieszkalny – z parterem usługowym w zabudowie kwartałowej w ciągu ulic Nadwiślańskiej i Piwnej.",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z BP – WOJCIECH SARAN.",
    //         "phase":"Projekt budowlany /2009 r./",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 6848,
    //         "dataPZ" : 5448,
    //         "dataPU" : 27627,
    //         "dataKubatura" : 85755,
    //         "photo": ["nadwislanska_4a.jpg","nadwislanska_4.jpg"],
    //         "id": 3,
    //     },
    //     {
    //         "title": "PROJEKT BUDYNKU USŁUGOWO-HANDLOWEGO PRZY UL. REDUTA W KRAKOWIE",
    //         "type": "",
    //         "description":"Przedmiotem projektu była budowa niewielkiego dwukondygnacyjnego budynku usługowo –\n" +
    //             "handlowego z garażem podziemnym pełniącego funkcję domu pogrzebowego z funkcjami\n" +
    //             "towarzyszącymi dla znajdującego się nieopodal cmentarza Batowickiego.",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z BP WOJCIECH SARAN.",
    //         "phase":"Projekt budowlany i wykonawczy",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 511,
    //         "dataPZ" : 211,
    //         "dataPU" : 515,
    //         "dataKubatura" : 2516,
    //         "photo": ["reduta_2a.jpg","reduta_2b.jpg"],
    //         "id": 4,
    //     },
    //     {
    //         "title": "PROJEKT ROZBUDOWY CENTRUM REKREACYJNO-SPORTOWEGO „KOLNA” PRZY TORZE\n" +
    //             "KAJAKARSTWA GÓRSKIEGO W KRAKOWIE",
    //         "type": "",
    //         "description":"Projektowany obiekt spełnia wymogi centrum szkolenia olimpijskiego. Wykorzystywany jest\n" +
    //             "również na potrzeby, klubów sportowych o profilu kajakowym jak również przez\n" +
    //             "mieszkańców Krakowa w zakresie rekreacji i wypoczynku. Obiekt wpisany jest w większy\n" +
    //             "kompleks realizowanych i planowanych w tym rejonie, rekreacyjnych założeń\n" +
    //             "inwestycyjnych.\n" +
    //             "Na terenie zainwestowania (pow 15ha), którym jest Ośrodek Sportowo-Rekreacyjny,\n" +
    //             "znajdują się obiekty które zostały wybudowane w trzech etapach:\n" +
    //             "– etap I (w latach 2000-2003) -Tor kajakarstwa górskiego wraz z budynkiem zaplecza\n" +
    //             "socjalno-technicznego i infrastrukturą techniczną,\n" +
    //             "– etap II (w latach 2004-2007) -Hala sportowa z basenami krytymi wraz z budynkiem\n" +
    //             "kotłowni i przewiązka oraz infrastrukturą techniczną.\n" +
    //             "– etap II (w latach 2007-2010) Budynek internatu sportowego o standardzie\n" +
    //             "czterogwiazdkowym wraz z zapleczem żywieniowym oraz szkoleniowym.",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER.",
    //         "phase":"",
    //         "award":"",
    //         "realization": "Etap II (2004-2007) Etap III (2007-2010)",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["centrum_rekreacyjno_sportowe_5A.jpg","centrum_rekreacyjno_sportowe_5B.jpg","centrum_rekreacyjno_sportowe_5C.jpg","centrum_rekreacyjno_sportowe_5D.jpg","centrum_rekreacyjno_sportowe_5E.jpg"],
    //         "id": 5,
    //     },
    //     {
    //         "title": "AULA ASP W KRAKOWIE – PROJEKT BUDOWLANY I WYKONAWCZY",
    //         "type": "",
    //         "description":"Przedmiotem inwestycji była nowa przestrzeń wielofunkcyjna o charakterze\n" +
    //             "ogólnouczelnianym obejmująca amfiteatralną salę wielofunkcyjną na ok.220 miejsc,\n" +
    //             "arenowe sale audytoryjno-ekspozycyjne oraz przestrzeń galeryjną z funkcjami\n" +
    //             "towarzyszącymi.",
    //         "cooperation":"",
    //         "phase":"Projekt budowlany i wykonawczy",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 2842,
    //         "dataPZ" : 0,
    //         "dataPU" : 1375,
    //         "dataKubatura" : 8400,
    //         "photo": ["aula_asp_1A.jpg","aula_asp_1B.jpg","aula_asp_1C.jpg","aula_asp_1D.jpg"],
    //         "id": 6,
    //     },
    //     {
    //         "title": "KONKURS URBANISTYCZNO-ARCHITEKTONICZNY NA OPRACOWANIE PROJEKTU KONCEPCYJNEGO PLACU LITEWSKIEGO W LUBLINIE",
    //         "type": "",
    //         "description":"Podstawowym problemem organizacji placu był brak relacji pomiędzy jego całościową\n" +
    //             "kompozycją a podziałem na poszczególne strefy funkcjonalne zdeterminowane historycznie\n" +
    //             "i przestrzennie.\n" +
    //             "Ranga urbanistyczna i znaczeniowa miejsca preferuje przestrzenne scalenie placu w jedno\n" +
    //             "wnętrze i nadanie mu odpowiedniej skali. Jednakże podporządkowanie osi kompozycyjnych\n" +
    //             "istniejącym zabytkowym budynkom o charakterze pałacowym, oraz ważnej przestrzeni\n" +
    //             "publicznej z pomnikami, nakazuje szukanie kompromisu.\n" +
    //             "Plastycznym odniesieniem kompozycji placu jest symboliczny gest splatania dłoni jako\n" +
    //             "znaczeniowego obrazowania idei Unii Lubelskiej. Przeniesienie tego symbolu na rozwiązania\n" +
    //             "przestrzenne i materiałowe placu stanowi trwałą i unikalną identyfikację znaczeniową\n" +
    //             "historycznego miejsca.",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER",
    //         "phase":"Wystawa pokonkursowa 2010",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["plac_litewski_1c.jpg","plac_litewski_1b.jpg","plac_litewski_1a.jpg","plac_litewski_1d.jpg","plac_litewski_1e.jpg","plac_litewski_1f.jpg","plac_litewski_1g.jpg"],
    //         "id": 7,
    //     },
    //     {
    //         "title": "PROJEKT FORMY PRZESTRZENNEJ O CHARAKTERZE POMNIKOWYM UPAMIĘTNIAJĄCEJ OBECNOŚĆ JANA PAWŁA II NA WESTERPLATTE W GDAŃSKU",
    //         "type": "",
    //         "description":"Założeniem projektu jest wpisanie się w istniejącą sytuację urbanistyczną, bez zbędnego zaburzania jej struktury. Projekt zakłada scalenie dwóch form upamiętnienia w jeden układ, unikając sytuacji ich wzajemnej konkurencji. Wizualną „niewidzialność” projektowanego założenia postanowiono uzyskać dzięki wykorzystaniu rzeźby terenu oraz subtelnych sugestii formalnych.\n" +
    //             "Nacinając delikatnie stok kopca tworzy się przestrzeń korytarza, o ścianach wykończonych surową powierzchnią betonu architektonicznego oraz kontrastującymi z nim elementami stali nierdzewnej. Materiał ten poprzez zdolność odbijania światła przyciąga uwagę eksponując jednocześnie walory otoczenia.\n" +
    //             "Światło w projekcie, zarówno dzienne jak i sztuczne spełnia niezwykle istotną rolę, stając się materią modelowania przestrzeni. Nocna iluminacja pomnika nadaje założeniu nową funkcję – widocznego z oddali świecącego symbolu.\n",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z artystą rzeźbiarzem Janem Kuką",
    //         "phase":"Wystawa pokonkursowa 2011",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["westerplatte_1a.jpg","westerplatte_2b.jpg","westerplatte_2c.jpg","westerplatte_2d.jpg"],
    //         "id": 8,
    //     },
    //     {
    //         "title": "KONCEPCJA POMNIKA UPAMIĘTNIAJĄCEGO OFIARY KATASTROFY LOTNICZEJ POD SMOLEŃSKIEM 10 KWIETNIA 2010",
    //         "type": "",
    //         "description":"Koncepcja ideowa pomnika zakłada wydzielenie z otoczenia przestrzeni „sacrum”. Tworzą ją ściany wysokości 350 cm i szerokości 75 cm ułożone jako niemiarowy kwadrat wyznaczający w uproszczeniu granice Polski. Niepokojące ułożenie ścian wyznaczających przestrzeń jest wynikiem przechylenia ich w dwóch kierunkach. Powstające w ten sposób wspornikowe, ukośne płaszczyzny opierające się punktowo na niskich murkach i unoszące się miejscami nad ziemią, odsłaniają niewielkimi kadrami tajemnice „sacrum”. Tym samym akcentowana jest atmosfera tragicznego zdarzenia, wielkiej katastrofy w historii najnowszej państwowości.\n" +
    //             "Pęknięcie na obwodzie bryły umożliwia wejście do przestrzeni wewnętrznej. Przewężenie takie wymusza wchodzenie do wnętrza niewielkiej grupy osób, aby bez towarzystwa tłumu kontemplować powagę miejsca. W przestrzeni tej przewiduje się lokalizację krzyża, napisów z nazwiskami ofiar katastrofy i znicz pamięci. Godło państwowe na frontowej ścianie przy wejściu kieruje nasze skojarzenia do rzutu całej formy pomnika, wyznaczającej granice Polski. Forma ta będzie czytelna głównie z powietrza przy lądowaniu samolotów.\n",
    //         "cooperation":"Projekt zrealizowano we współpracy autorskiej z APPP-ANDRZEJ GETTER",
    //         "phase":"",
    //         "award":"wyróznienie w konkursie międzynarodowym ",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["smolensk_2a.jpg","smolensk_2b.jpg","smolensk_2c.jpg","smolensk_2d.jpg","smolensk_2e.jpg"],
    //         "id": 9,
    //     },
    //     {
    //         "title": "PROJEKT POMNIKA HENRYKA SŁAWIKA I JÓZEFA ANTALLA SENIORA W KATOWICACH.",
    //         "type": "",
    //         "description":"Pomnik Sławika i Antalla został zrealizowany na placu przy nowym budynku Międzynarodowego Centrum Kongresowego, nieopodal hali Spodka i nowej siedziby Narodowej Orkiestry Symfonicznej Polskiego Radia. Kompozycję przestrzenną pomnika stanowią dwie równoległe ściany z betonu architektonicznego o długości 9,5m i 11,34m w rozstawie osiowym 3,1m i wysokości 2,5m. Integralną częścią pomnika jest betonowa posadzka oraz 10 drzew o wysokości 7-9 m. Wewnątrz przestrzeni wydzielonej przez ściany znajdują się inskrypcje w języku Polskim i Węgierskim oraz reliefowe portrety bohaterów. Użyte materiały: Beton architektoniczny, stal nierdzewna, kruszywo ozdobne, oświetlenie iluminacyjne.\n Adres opracowania:\n" +
    //             "Katowice ul. Korfantego, ul. Roździeńskiego, ul. Olimpijska\n" +
    //             "Inwestor:\n" +
    //             "MIASTO KATOWICE\n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz",
    //         "cooperation":"",
    //         "phase":"Projekt wyłoniony w międzynarodowym konkursie rozstrzygniętym w dniu 29.05.2014.",
    //         "award":" Trzecie miejsce – MIĘDZYNARODOWE BIENNALE ARCHITEKTURY 2015 W KRAKOWIE, temat edycji : „Ludzki wymiar miejskich przestrzeni”;\n" +
    //             "GRAND PRIX 2016 – „Najlepsza przestrzeń publiczna” (nagroda otrzymana wspólnie z JEMS Architekci sp. z o.o.).",
    //         "realization": "Uroczyste odsłonięcie pomnika nastąpiło w dniu 21.03.2015.",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["SiA-fot1.jpg","rzut1.jpg","przekrój1.jpg"],
    //         "id": 10,
    //     },
    //     {
    //         "title": "PANTEON – MAUZOLEUM OFIAR ZBRODNI KOMUNISTYCZNYCH ZLOKALIZOWANEGO NA KWATERZE „Ł” CMENTARZA WOJSKOWEGO NA POWĄZKACH W WARSZAWIE.",
    //         "type": "",
    //         "description":"Mauzoleum znajduje się w południowo-wschodniej części Cmentarza Wojskowego na Powązkach w Warszawie. Podstawą układu kompozycji są prostopadłościenne filary o wysokości 3,9 m i wymiarach podstawy 1,5 x 1,5 m ustawione na planie kwadratu o długości boku 14m. Wytyczoną przestrzeń, modlitwy i kontemplacji przykrywa na wysokości 3,4 m ażurowa krata wypełniająca moduł układu między filarami. Struktura i konstrukcja filarów służy do zlokalizowania miejsc na urny ze szczątkami ofiar. Dzieląc wewnętrzną przestrzeń slupów uzyskano 280 miejsc indywidualnego pochowku.\n" +
    //             "Użyte materiały : Konstrukcja żelbetowa, okładzina granitowa, kostka bazaltowa, blacha brązowa, kruszywo ozdobne.\n" +
    //             "– Powierzchnia terenu opracowania 451 m2\n" +
    //             "– Powierzchnia mauzoleum 196 m2\n" +
    //             "– Powierzchnia zabudowy 71,75 m2\n" +
    //             "Inwestor:\n" +
    //             "Rada Ochrony Pamięci Walk i Męczeństwa/SARP o. Warszawa\n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz",
    //         "cooperation":"mgr Jan Kuka – artysta, rzeźbiarz",
    //         "phase":"",
    //         "award":"Projekt nagrodzony w konkursie rozstrzygniętym w dniu 09.03.2015 (wyróżnienie + wybór projektu do realizacji)",
    //         "realization": "Uroczyste otwarcie mauzoleum (1 etapu) nastąpiło w dniu 27.09.2015.",
    //         "dataPTI" : 451,
    //         "dataPZ" : 71.75,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["Mauzoleum-fot5.jpg","Mauzoleum-fot1.jpg","Mauzoleum-fot2.jpg","Mauzoleum-fot3.jpg","Mauzoleum-fot4.jpg"],
    //         "id": 11,
    //     },
    //     {
    //         "title": "PROJEKT KONCEPCYJNY PUNKTÓW WEJŚCIA DO TATRZAŃSKIEGO PARKU NARODOWEGO W ZAKOPANYM.",
    //         "type": "",
    //         "description":"Poszukiwania ideowe dla formy projektowanego obiektu stały się pretekstem do zdefiniowania „bramy” jako punktu styku między „terytorium przyrody” a „terytorium człowieka”. Specyficzny sposób postrzegania budynku (stojącego przy drodze) przez przechodzącego turystę idącego w kierunku gór lub wracającego do miasta podsunął pomysł aby skonfrontować te dwa wglądy.\n" +
    //             "Schodząc ze szlaku i przekraczając granicę parku widzimy na tle pierwszych zabudowań miasta „żywy, zielony” dach budynku kojarzony ze światem natury. Idąc w przeciwnym kierunku, sytuacja ulega odwróceniu – to elewacja budynku kontrastuje z naturalnym tłem tatrzańskiej przyrody.\n" +
    //             "Kolejnym, istotnym założeniem projektowym była próba wykreowana uniwersalnej, spójnej formy wejścia na teren parku dla wszystkich wskazanych przez inwestora lokalizacji. Ma to duże znaczenie wizerunkowe, które jednoczenie tworzy w świadomości turysty czytelny, jasno określony znak granicy Tatrzańskiego Parku Narodowego.\n" +
    //             "Zaproponowana forma obiektu o zwartej horyzontalnej formie z pochyłym zielonym dachem umożliwia subtelniejsze wpisanie się w bardzo zróżnicowany charakter otoczenia wszystkich wejść do parku poprzez skojarzenie i swoje podobieństwo bardziej do struktury muru oporowego niż do lokalnej zabudowy.\n" +
    //             "Zagospodarowanie terenu poszczególnych punktów będzie się znacząco różniło w zależności od uwarunkowań lokalizacyjnych i intensywności ruchu turystycznego. Z uwagi na bliskość granicy parku przyjęto założenie o redukowaniu ilości elementów zagospodarowania (będących obcą formą w środowisku naturalnym) terenu do następujących elementów:\n" +
    //             "– budynku sprzedaży biletów i zaplecza magazynowego, przykrytych zielonym stropodachem;\n" +
    //             "– utwardzone nawierzchnie w rejonie podjazdów technicznych (zielony parking) i strefy kolejki do kasy (bruk granitowy); Inwestor:\n" +
    //             "Tatrzański Park Narodowy \n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz\n",
    //         "cooperation":"mgr Jan Kuka – artysta, rzeźbiarz",
    //         "phase":"",
    //         "award":"Projekt zgłoszony do konkursu, rozstrzygniętym w dniu 18.11.2015",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["TPN-w2-a.jpg","TPN-w1.jpg","TPN-w2.jpg"],
    //         "id": 12,
    //     },
    //     {
    //         "title": "KWATERY PAMIĘCI NA CMENTARZU MARYNARKI WOJENNEJ NA OKSYWIU W GDYNI",
    //         "type": "",
    //         "description":"Analizując istniejącą przestrzeń cmentarza, zauważyć można wielki potencjał krajobrazowy miejsca, polegający na występowaniu na tym terenie zieleni wysokiej oraz bliskim sąsiedztwie linii brzegowej i morza. Proponowane rozwiązanie projektowe stara się używać obu tych elementów do stworzenia spójnego wizualnie i ideowo założenia – miejsca pamięci i spoczynku dla bohaterów Marynarki Wojennej.\n" +
    //             "W skali urbanistycznej, układ przestrzenny cmentarza zdefiniowano za pomocą dwóch prostopadłych osi, alei komunikacyjnych o szerokości 5 m, rozmieszczonych na planie krzyża. W części wschodniej alei głównej wytyczono przestrzeń memoratywną na planie prostokąta o wymiarach 55 na 10 metrów. Przestrzeń ta od strony północnej i wschodniej, otoczona zostanie „leśną pierzeją” istniejących drzew, natomiast od strony cmentarza wydzieli ją rzeźbiarska forma wolnostojącego krzyża o wysokości 6,8 m. Krzyż ten, stojący jednocześnie na skrzyżowaniu obu osi stanie się główną dominantą całego cmentarza.\n" +
    //             "Przechodząc wzdłuż przestrzeni memoratywnej zwanej Kwaterą Pamięci w stronę morza dochodzimy do monolitycznej Ściany Pamięci o wysokości 10 m , która w centralnej części posiada bramę w kształcie negatywu krzyża. \n" +
    //             "Osiowe, wzajemne rozmieszczenie obu krzyży (głównego i negatywowego) odwołuje się symbolicznie do znaków nawigacji morskiej, która poprzez nabieżnik kieruje okręt do portu. W tym jednak przypadku przechodząc przez wspomnianą bramę na końcu Kwatery Pamięci znajdziemy się na tarasie z wglądem na Bałtyk co pozwoli scalić widokowo i ideowo te dwie przestrzenie cmentarza Marynarki Wojennej i bezkresu morza.\n" +
    //             "Jasny kolor Ściany Pamięci z symbolem krzyża widziany od strony morza będzie kontrastował z ciemną plamą koron drzew stając się czytelnym znakiem identyfikującym miejsca spoczynku.\n" +
    //             "Inwestor:\n" +
    //             "Urząd Miasta Gdynia\n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz",
    //         "cooperation":"mgr Jan Kuka – artysta, rzeźbiarz",
    //         "phase":"",
    //         "award":"Projekt otrzymał II nagrodę w konkursie rozstrzygniętym w dniu 20.02.2017",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["13_GdyniaOksywie-w1.jpg","13_GdyniaOksywie-w2.jpg","13_GdyniaOksywie-w3.jpg","13_GdyniaOksywie-w4.jpg","13_GdyniaOksywie-w5.jpg","13_GdyniaOksywie-w6.jpg"],
    //         "id": 13,
    //     },
    //     {
    //         "title": "KONCEPCJA RZEŹBIARSKO-ARCHITEKTONICZNA POMNIKA OFIAR DEPORTACJI MIESZKAŃCÓW GÓRNEGO ŚLĄSKA DO ZWIĄZKU SOWIECKIEGO W 1945 R.",
    //         "type": "",
    //         "description":"Narracja znaczeniowa pomnika upamiętnienia Ofiar Deportacji Mieszkańców Górnego Śląska do Związku Sowieckiego podejmuje próbę zobrazowania idei „pustki po…”. Tragiczne i bolesne zdarzenia, które miały miejsce w 1945 roku pozostawiły niezaprzeczalną pustkę w wielu aspektach życia – społecznego, socjologicznego i materialnego ludności Śląska.\n" +
    //             "W celu wyrażenia głównej idei do zbudowania przestrzennych relacji pomnika wybrano formę architektoniczną głównego obiektu, nawiązującą skalą i kształtem do archetypicznego domu mieszkalnego – familoka. Jego ściany wydzielają przestrzeń (pustkę), która w metaforyczny sposób pokazuje opuszczony i zniszczony budynek ze schodami prowadzącymi w nieznane.\n" +
    //             "Użyte materiały : konstrukcja żelbetowa, okładzina z blach typu cor-ten, kostka granitowa, głazy granitowe.\n" +
    //             "– Powierzchnia terenu opracowania 14400m2\n" +
    //             "– Powierzchnia pomnika 532 m2\n" +
    //             "Adres opracowania:\n" +
    //             "Katowice ul. Dobrowolskiego, al. Roździeńskiego\n" +
    //             "Inwestor:\n" +
    //             "MIASTO KATOWICE\n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz",
    //         "cooperation":"mgr Jan Kuka – artysta, rzeźbiarz",
    //         "phase":"",
    //         "award":"Projekt otrzymał 1 nagrodę konkursie rozstrzygniętym w dniu 19.11.2017 (wybór do realizacji) ",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["PomnikOfiar-Deportacji_05.jpg","PomnikOfiar-Deportacji_01.jpg","PomnikOfiar-Deportacji_02.jpg","PomnikOfiar-Deportacji_03.jpg","PomnikOfiar-Deportacji_04.jpg","PomnikOfiar-Deportacji_06.jpg","PomnikOfiar-Deportacji_07.jpg","PomnikOfiar-Deportacji_08.jpg","PomnikOfiar-Deportacji_09.jpg"],
    //         "id": 14,
    //     },
    //     {
    //         "title": "KONCEPCJA RZEŹBIARSKO-ARCHITEKTONICZNA POMNIKA POLSKICH OFIAR KOMUNIZMU ZLOKALIZOWANEGO NA TERENIE PLACU IZAAKA SINGERA W LUBLINIE.",
    //         "type": "",
    //         "description":"Poszukując idei formalnej założenia pomnikowego, który za pomocą niefiguratywnego i współczesnego języka plastycznego zbuduje subtelną i ponadczasową narrację z odbiorcą odwołano się do symbolu przeskalowanej, horyzontalnej „kraty” jako synonimu totalitarnego i represyjnego sytemu jakim jest komunizm. Ta mocna i rozpoznawalna w swej symbolice forma stała się modułem całego założenia. Co istotne „krata” jest przedstawiona jako forma zdefragmentowana, połamana i ugięta. Dla kontrastu wprowadzono też drugi uporządkowany element kompozycji o pozytywnym wydźwięku - „przerastające” kratę, regularne szeregi drzew – symbol wolności i żywotności narodu.\n" +
    //             "Głównym zadaniem przestrzennej kompozycji jest wykreowanie zróżnicowanych mikro wnętrz parkowych, które będą oddziaływały na widza i jego zmysły. \n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz\n",
    //         "cooperation":"",
    //         "phase":"",
    //         "award":"Projekt otrzymał 1 nagrodę konkursie rozstrzygniętym w dniu 30.12.2019 r",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["15_Lublin-1.jpg","15_Lublin-2.jpg","15_Lublin-3.jpg","15_Lublin-4.jpg","15_Lublin-5.jpg","15_Lublin-6.jpg"],
    //         "id": 15,
    //     },
    //     {
    //         "title": "MIĘDZYNARODOWY KONKURS ARCHITEKTONICZNY „SITE LANDMARK INTERNATIONAL ARCHITECTURE IDEAS COMPETITION” SAGRES, PORTUGALIA",
    //         "type": "",
    //         "description":"Okno żeglarza\n" +
    //             "Niezaprzeczalnym walorem lokalizacji projektu, jest rozległy widok, w którym dominują horyzontalne linie. Stojąc na krawędzi klifu widz może obserwować wszystkie charakterystyczne punkty lokalnego krajobrazu połączone linią horyzontu.\n" +
    //             "\n" +
    //             "Głównym założeniem projektowym było zachowanie tego widoku bez kreowania nowych wertykalnych form.\n" +
    //             "Aby spełnić takie założenia zdecydowano się budowlę zlokalizować poniżej powierzchni terenu.\n" +
    //             "\n" +
    //             "Wykonując nacięcie w terenie na osi północ – południe (zgodnie z kierunkiem najczęściej wiejącego wiatru), wyznaczono główną oś kompozycyjną.\n" +
    //             "Powstałe w ten sposób ściany oporowe i łagodnie opadająca ścieżka tworzą nową przestrzeń, korytarz, który pozwala stopniowo dojść do krawędzi wybrzeża. Na styku tych trzech żywiołów – ziemi, wody i powietrza zaprojektowano monumentalne, symboliczne okno kadrujące widok na ocean.\n" +
    //             "Na powstałej scenie widz może obserwować powiewającą kotarę – żagiel, który materializuje podmuchy wiejącego wiatru. Tłem i naturalną scenografią całego spektaklu jest ocean, niebo i światło.\n" +
    //             "Idąc wzdłuż klifu możliwe jest wejście na górną platformę z siedzącymi miejscami widokowymi.\n" +
    //             "\n" +
    //             "Od strony wody okno z kotarą symbolizuje dom, do którego wraca się z dalekiej, morskiej podróży.\n" +
    //             "Wszystkie, wymagane programem funkcjonalnym pomieszczenia zlokalizowano we wschodniej części pod ziemią.\n" +
    //             "\n" +
    //             "Projektanci:\n" +
    //             "mgr inż. arch. Michał Dąbek\n" +
    //             "mgr Jan Kuka – artysta, rzeźbiarz\n" +
    //             "WYSTAWA POKONKURSOWA 2016",
    //         "cooperation":"mgr Jan Kuka – artysta, rzeźbiarz",
    //         "phase":"WYSTAWA POKONKURSOWA 2016",
    //         "award":"",
    //         "realization": "",
    //         "dataPTI" : 0,
    //         "dataPZ" : 0,
    //         "dataPU" : 0,
    //         "dataKubatura" : 0,
    //         "photo": ["16_Portugalia2016_1.jpg","16_Portugalia2016_2.jpg","16_Portugalia2016_3.jpg","16_Portugalia2016_4.jpg","16_Portugalia2016_5.jpg"],
    //         "id": 16,
    //     }
    // ]



    const navigate = useNavigate();
    const bazaProjektow = useStoreState((state) => state.bazaProjektow);
    const setPage = useStoreActions((actions) => actions.setPage);

console.log(bazaProjektow)
    const chooseProject = (event) => {
        setPage(event.id);
        navigate(`/projekty/${event.id}`);
    }



    const ShowProject = ({projekt, ind}) => {
        return (<div className="projekt_box" key={ind}>

            <img className="prj_photo" src={`../../src/image/prj/${projekt.id}/${projekt.photo[0]}`}/>
            <div className="projekt_blenda" onClick={() => chooseProject(projekt)}>
                <h3 className="projekt_opis">{projekt.title}</h3>
            </div>

        </div>)
    }

    return (
        <>
            <div className="conteiner mainview_conteiner paddingtop2" key="projekty">
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