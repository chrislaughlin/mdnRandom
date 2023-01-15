const person = {
    name: 'Chris',
    location: {
        city: 'Belfast'
    }
}

console.log(`Original person city: ${person.location.city}`)

const spreadClone = {...person};
const structuredClonePerson = structuredClone(person);

console.log('-- Change the spreadClone city --');
spreadClone.location.city = 'London';
console.log(`spreadClone person city: ${spreadClone.location.city}`)
console.log(`Original person city: ${person.location.city}`)
console.log('');
console.log('');

console.log('-- Change the structuredClonePerson city --');
structuredClonePerson.location.city = 'New York';
console.log(`spreadClone person city: ${structuredClonePerson.location.city}`)
console.log(`Original person city: ${person.location.city}`)
