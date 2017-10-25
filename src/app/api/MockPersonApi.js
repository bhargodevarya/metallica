export const persons = [
    {name:"Bhargo",age:23},
    {name:"Amar",age:23},
    {name:"Raj",age:23}
]

const getPersons = () => {
    return persons;
}

const logPerson = () => {
    console.log(persons)
}

//export default getPersons
module.exports = {
    getPersons,
    logPerson
}