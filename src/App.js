import './App.css';
import './MainPage.css';
import MainScreen from './app/Views/MainScreen.js';
import Movies from './app/Views/Movies.js';
import Series from './app/Views/Series.js';
import Login from './app/Views/Login.js';
import Register from './app/Views/Register.js';
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
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </Router>          
      </header>
    </div>
  );
}

export default App;
