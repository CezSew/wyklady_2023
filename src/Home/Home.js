import { Link } from 'react-router-dom';
import './index.css';

const Home = ({ presentationLink }) => {
    return (
        <>
            <h1>{`React od podstaw`}</h1>
            <div className={`code-box`}>
                <p>{`Link do oficjalnej dokumentacji:`}</p>
                <a href={`https://react.dev/learn`}>{`https://react.dev/learn`}</a>
                {/*<p>{`Link do prezentacji:`}</p>*/}
                {/*<a href={presentationLink}>{presentationLink}</a>*/}
            </div>
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/sandbox">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Piaskownica`}
                        </h3>
                    </Link>
                </li>
            </ul>
            <p>{`Ćwiczenia:`}</p>
            <div className={`code-box`}>
                <p>{`Ćwiczenia utrwalające zagadnienia teoretyczne`}</p>
            </div>
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/zadania/map">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Listy`}
                        </h3>
                    </Link>
                </li>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/przyklady/useEffect">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`useEffect`}
                        </h3>
                    </Link>
                </li>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/zadania/stateAndEvents">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Stan, Eventy i Inputy`}
                        </h3>
                    </Link>
                </li>
            </ul>
            <p>{`Przykłady:`}</p>
            <div className={`code-box`}>
                <p>{`Przykłady izolujące konkretne zagadnienia`}</p>
            </div>
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/przyklady/button">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Tworzenie elementów`}
                        </h3>
                    </Link>
                </li>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/reconciliation">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Podstawy Reacta- Rekoncyliacja`}
                        </h3>
                    </Link>
                </li>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/randomCat">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Podstawy Reacta- eventy i stan`}
                        </h3>
                    </Link>
                </li>
            </ul>
            <p>{`Projekty:`}</p>
            <div className={`code-box`}>
                <p>{`Główne zadania. Tutaj użyjemy całej nabytej wiedzy.`}</p>
            </div>
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/most-wanted">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Wyszukiwarka FBI (poz. podstawowy)`}
                        </h3>
                    </Link>
                </li>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/cv-generator">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Generator CV (poz. średniozaawansowany)`}
                        </h3>
                    </Link>
                </li>
            </ul>
            {/*<p>{`Utrwalanie wiedzy:`}</p>*/}
            {/*<div className={`code-box`}>*/}
            {/*    <p>{`Dla chętnych. Proste zadania na utrwalenie wiedzy, sprawdzane automatycznie przez testy jednostkowe.`}</p>*/}
            {/*    <p>{`Aby uruchomić testy należy użyć komendy npm run test. Można także odpalić testy dla pojedynczego pliku przekazując argument z nazwą pliku, np. npm run test Task1`}</p>*/}
            {/*</div>*/}
            {/*<ul className={`lessons`}>*/}
            {/*    <li className={`lessons__lesson-tile`}>*/}
            {/*        <Link className={`lessons__lesson-link`} to="/task1">*/}
            {/*            <h3 className={`lessons__lesson-link-text`}>*/}
            {/*                {`JSX: Tworzenie elementów`}*/}
            {/*            </h3>*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li className={`lessons__lesson-tile`}>*/}
            {/*        <Link className={`lessons__lesson-link`} to="/task3">*/}
            {/*            <h3 className={`lessons__lesson-link-text`}>*/}
            {/*                Propsy (ndk)*/}
            {/*                /!* dostosuj komponent tak, by zamiast propsów przyjął dane z context *!/*/}
            {/*            </h3>*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li className={`lessons__lesson-tile`}>*/}
            {/*        <Link className={`lessons__lesson-link`} to="/task2">*/}
            {/*            <h3 className={`lessons__lesson-link-text`}>*/}
            {/*                {`Eventy i stan`}*/}
            {/*            </h3>*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </>
    )
}

export default Home;
