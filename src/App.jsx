import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Route path='/home'>
          <HomePage />
        </Route>

      </Router>
    </div>
  );
}

export default App;
