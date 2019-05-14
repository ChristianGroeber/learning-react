import React from 'react';
import * as ReactDom from "react-dom";

const Welcome = (props) => {
    return(
        <h1>Hello there - {props.title} {props.name}</h1>
    )
};

const App = () => {
    return (
        <div>
            <Welcome name="Yoda" title="JediMaster"/>
            <Welcome name="Kenobi" title="General"/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));