import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverCounter from './components/HoverCounter';
import FunctionalComponent from './components/FunctionalComponent';
import ErrorBoundary from './components/ErrorBoundary';
import FunctionalComponent2 from './components/Reference/FunctionalComponent2'
import Home from "./components/TryComponents/Home";
import Modal from "./components/TryComponents/Modal"
import Modals from "./components/Portals/Modals";
import Navbar from "./components/NavBar/Navbar"
import {Route, Link, NavLink, withRouter, Switch} from 'react-router-dom';

function App(props) {

    // setTimeout(() => {
    //     props.history.push("/button")
    // }, 2000);
    return (
        <>
        <nav className="nav navbar">
            <h3> Logo </h3>
            <ul className= "nav-link1">
                <li className="nav-item1 ">
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="nav-item1 ">
                    <NavLink to="/button">Button</NavLink>
                </li>
                <li className="nav-item1 ">
                    <NavLink to="/text">Text</NavLink>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/button">
                <ButtonCounter />
            </Route>
            <Route path="/text">
                <HoverCounter />
            </Route>
        </Switch>
        </>
    )
}
export default withRouter(App);
