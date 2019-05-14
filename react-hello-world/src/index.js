import React from 'react';
import * as ReactDom from "react-dom";

let person = {
    title: 'General',
    name: 'Kenobi',
    age: 5000
};

let villain = {
    title: 'General',
    name: 'Grievous'
};

let niceMan = {
    title: "Jedi Master",
    name: "Yoda"
};

const formatUser = (person) => {
    return person.title + " " + person.name;
};

const greetTheNiceMan = (villain) => {
    if (villain.name === 'Grievous'){
        return "Hello there";
    }else{
        return "Wut?";
    }
};

const element = (
    <h1>
        {greetTheNiceMan(villain)} - {formatUser(person)}
        {greetTheNiceMan(niceMan)} - {formatUser(person)}
    </h1>
);

ReactDom.render(
    element,
    document.getElementById('root')
);