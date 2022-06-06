import "../src/css/reset.css";
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path={LOGIN} element={< PageLogin />} /> */}
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
