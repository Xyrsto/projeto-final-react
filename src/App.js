import './App.css';
import './MainPage.css';
import Screens from './app/Screens.js';
import MainScreen from './app/MainScreen.js';
import Movies from './app/Movies.js';
import Series from './app/Series.js';
import Account from './app/Account.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">    
      <header className="App-header">
          <Router>
            <Routes>
              <Route path="/" element={<MainScreen/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/series" element={<Series/>}/>
              <Route path="/account" element={<Account/>}/>
            </Routes>
          </Router>          
      </header>
    </div>
  );
}

export default App;
