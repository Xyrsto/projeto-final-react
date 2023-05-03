import logo from './logo.svg';
import './App.css';
import './MainPage.css';
import TopBar from './app/TopBar';

function App() {
  return (
    <div className="App">    
      <header className="App-header">
          <TopBar/>
          <div class = "d-inline"></div>              
      </header>
    </div>
  );
}

export default App;
