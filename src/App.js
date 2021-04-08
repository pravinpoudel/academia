import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverCounter from './components/HoverCounter';
import FunctionalComponent from './components/FunctionalComponent';
import ErrorBoundary from './components/ErrorBoundary';
import FunctionalComponent2 from './components/Reference/FunctionalComponent2'
// import styled from 'styled-components';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        {/* <ErrorBoundary> */}
        <FunctionalComponent2 />
         <FunctionalComponent />
        {/* </ErrorBoundary> */}
        {/* <StyledDiv> */}
         <ButtonCounter name="Pravin"/>  
        {/* </StyledDiv> */}
        <HoverCounter />
      </header>
    </div>
       
  );
}

export default App;
