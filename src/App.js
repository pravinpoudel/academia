import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverCounter from './components/HoverCounter';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent />
       <ButtonCounter name="Pravin"/>
       <HoverCounter />
      </header>
    </div>
  );
}

export default App;
