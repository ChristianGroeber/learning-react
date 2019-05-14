import React from 'react';
import * as ReactDom from "react-dom";

let person = {
    title: 'General',
    name: 'Kenobi',
    age: 5000
};

const formatUser = (person) => {
    return person.title + " " + person.name;
};

const element = (
    <h1>
        Hello there - {formatUser(person)}
    </h1>
);

ReactDom.render(
    element,
    document.getElementById('root')
);