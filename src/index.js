// Code React.js
import React from 'react';
import { render } from 'react-dom';
//COMPONENTS
import App from './components/App'
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
//CSS
import './index.css';
//ROUTER
import { BrowserRouter, Miss, Match } from 'react-router';

const Root = () =>{
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Connexion} />
                <Match pattern="/pseudo/:pseudo" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(
    <Root />, document.getElementById('root')
);