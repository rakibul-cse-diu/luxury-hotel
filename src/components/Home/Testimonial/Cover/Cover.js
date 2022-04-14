import React from 'react';

const Cover = ({ person }) => {
    console.log(person)
    return (
        <div>
            <h1>{person.name}</h1>
        </div>
    );
};

export default Cover;