import React from 'react';
import './styles.scss';

const Error = () => {
    return (
        
        <div id="app">
            <div id="wrapper">
                <h1 className="glitch" data-text="ERROR 404">ERROR 404</h1>
                <span className="sub" data-text="La page est surement perdue">La page est surement perdue</span>
                    <br></br>
                <span className="sub2" href="#">Retour à l'accueil</span>
            </div>
        </div>
        
    );
};

export default Error;
