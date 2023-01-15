const person = {
    name: 'Chris',
    location: {
        city: 'Belfast'
    }
}

console.log(`person city: ${person.location.city}`)

const spreadClone = {...person};
const structuredClonePerson = structuredClone(person);

console.log('-- Change the spreadClone city --');
spreadClone.location.city = 'London';
console.log(`spreadClone: ${spreadClone.location.city}`)
console.log(`person: ${person.location.city}`)

console.log('');
console.log('');

console.log('-- Change structuredClonePerson --');
structuredClonePerson.location.city = 'New York';
console.log(
    `spreadClone: ${structuredClonePerson.location.city}`
);
console.log(`person: ${person.location.city}`)
