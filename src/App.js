import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import RandomCat from './lessons/randomCat';
import Home from './Home/Home';

const PRESENTATION_LINK = 'https://docs.google.com/presentation/d/1G3h2-Q-bOm-877jMMkyaWJvFODeaWHIXWGP0AUdhI2s/edit#slide=id.g25c66934188_0_51';

function App() {
  return (
      <div className={'app'}>
          <main className={`app__container`}>
              <Router>
                    <Routes>
                        <Route path="/randomCat" element={<RandomCat />} />
                        <Route path="/" element={<Home presentationLink={PRESENTATION_LINK} />} />
                    </Routes>
              </Router>
          </main>
      </div>
  );
}

export default App;
