import { Button } from 'bootstrap';
import React from 'react';
import ButtonCounter from "../ButtonCounter";
import HoverCounter from "../HoverCounter";
import Home from "../FunctionalComponent";
import {Route, Link, Switch} from 'react-router-dom';


function Navbar({name}) {
    return (
        <>
        <nav className= "nav navbar navbar-expand-lg navbar-light bg-light">
            <ul className= "navbar-nav mr-aut nav-link">
                <li className="nav-item active ">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/">Button</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/">Text</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/">
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

export default Navbar;
