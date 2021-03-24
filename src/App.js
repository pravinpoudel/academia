import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ButtonCounter />
       <HoverCounter />
      </header>
    </div>
  );
}

export default App;
