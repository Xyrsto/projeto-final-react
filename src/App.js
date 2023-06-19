import './App.css';
import './MainPage.css';
import MainScreen from './app/Views/MainScreen.js';
import Movies from './app/Views/Movies.js';
import Series from './app/Views/Series.js';
import Login from './app/Views/Login.js';
import Register from './app/Views/Register.js';
import Library from './app/Views/Library.js';
import UserPage from './app/Views/UserPage.js';
import SingleContent from './app/Views/SingleContent.js';
import PasswordChange from './app/Views/PasswordChange.js';
import CreateContent from './app/Views/CreateContent.js'
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
            <Route path= "/library" element={<Library/>}/>
            <Route path= "/userpage" element={<UserPage/>}/>
            <Route path= "/conteudos/*" element={<SingleContent/>}/>
            <Route path= "/passwordChange/*" element={<PasswordChange/>}/>
            <Route path= "/CreateContent" element ={<CreateContent/>}/>
          </Routes>
        </Router>                 
      </header>
    </div>
  );
}

export default App;
