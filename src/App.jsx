import "../src/css/reset.css";
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CharacterAllPage from "./pages/CharacterAllPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path={LOGIN} element={< PageLogin />} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/personagens' element={<CharacterAllPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
