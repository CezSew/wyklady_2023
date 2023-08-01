import { Link } from 'react-router-dom';
import './index.css';

const Home = ({ presentationLink }) => {
    return (
        <>
            <h1>{`React 2023`}</h1>
            <div>
                <p>{`Link do prezentacji:`}</p>
                <a href={presentationLink}>{presentationLink}</a>
            </div>
            <p>{`Przykłady:`}</p>
            <ul className={`lessons`}>
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
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/cv-generator">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Generator CV`}
                        </h3>
                    </Link>
                </li>
            </ul>
            <p>{`Ćwiczenia:`}</p>
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/task1">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`JSX: Tworzenie elementów`}
                        </h3>
                    </Link>
                </li>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/task2">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`Eventy i stan`}
                        </h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Home;
