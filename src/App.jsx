import "../src/css/reset.css";
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CharacterAllPage from "./pages/CharacterAllPage";
import {HOME, PERSONAGENS} from "./routes"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path={LOGIN} element={< PageLogin />} /> */}
          <Route path={HOME} element={<HomePage />} />
          <Route path={PERSONAGENS} element={<CharacterAllPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
