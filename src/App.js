import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import RandomCat from './examples/randomCat';
import Home from './Home/Home';
import ReconciliationExample from './examples/reconciliation/ReconciliationExample';
import Task2 from './tasks/task2';
import Task1 from './tasks/task1';
import CVGenerator from './exercises/CVGenerator';
import MostWanted from './exercises/mostWanted';
import UserList from './tasks/map/UserList';
import Button from './examples/legacyCompare/SimpleButton';
import Events from "./tasks/events/Events";
import Hooks from "./examples/hooks";
import StateAndEvents from "./exercises/state/StateAndEvents";

const PRESENTATION_LINK = 'https://docs.google.com/presentation/d/1G3h2-Q-bOm-877jMMkyaWJvFODeaWHIXWGP0AUdhI2s/edit#slide=id.g25c66934188_0_51';

function App() {
  return (
      <div className={'app'}>
          <main className={`app__container`}>
              <Router>
                    <Routes>
                        <Route path="przyklady/button" element={<Button />} />
                        <Route path="przyklady/useEffect" element={<Hooks />} />
                        <Route path="zadania/eventy" element={<Events />} />
                        <Route path="zadania/map" element={<UserList />} />
                        <Route path="zadania/stateAndEvents" element={<StateAndEvents />} />
                        <Route path="/task1" element={<Task1 />} />
                        <Route path="/task2" element={<Task2 />} />
                        <Route path="/cv-generator" element={<CVGenerator />} />
                        <Route path="/most-wanted" element={<MostWanted />} />
                        <Route path="/randomCat" element={<RandomCat />} />
                        <Route path="/reconciliation" element={<ReconciliationExample />} />
                        <Route path="/" element={<Home presentationLink={PRESENTATION_LINK} />} />
                    </Routes>
              </Router>
          </main>
      </div>
  );
}

export default App;
