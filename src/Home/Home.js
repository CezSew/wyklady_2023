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
            <p>{`Lista lekcji:`}</p>
            <ul className={`lessons`}>
                <li className={`lessons__lesson-tile`}>
                    <Link className={`lessons__lesson-link`} to="/randomCat">
                        <h3 className={`lessons__lesson-link-text`}>
                            {`I. Podstawy Reacta- eventy i stan`}
                        </h3>
                        <span className={`lessons__lesson-link-text`}>{`getCat.js`}</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Home;
