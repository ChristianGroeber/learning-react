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

let count = 1;
const tick = () => {
    const element = (
        <div className={person.name}>
            <h2>{count}</h2>
        </div>
    );
    count++;
    ReactDom.render(element, document.getElementById('root'));
};

setInterval(tick, 1000);