import React from 'react';
import * as ReactDom from "react-dom";

class Welcome extends React.Component{
    render(){
        return <h1>Hello there - {this.props.title} {this.props.name}</h1>;
    }
}

const element = <Welcome title="General" name="Kenobi"/>;

ReactDom.render(element, document.getElementById('root'));