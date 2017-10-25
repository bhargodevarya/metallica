import React from 'react';

function personData(person, index) {
    return <div key={index}>The name is {person.name} and his age is {person.age}</div>
}

const PersonList = (props) => {
    let personRow = props.persons.map(personData)
    console.log(personRow)
    return(<div>
    {personRow}
    </div>
    );
}

export default PersonList