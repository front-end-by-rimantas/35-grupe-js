/*
OBJECT
*/

/*
Mokiniai (array):
    - mokinys (???):
        - varda (string), 
        - pazymius (array), 
        - kontaktini asmeni (???)
            - varda (string), 
            - telefono nr (number)
*/

const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P.',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Maryte',
        marks: [10, 7],
        contact: {
            name: 'M.M.',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Jonas',
        marks: [10, 8],
        contact: {
            name: 'J.J.',
            phone: 333,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Ona',
        marks: [10, 9],
        contact: {
            name: 'P.P.',
            phone: 444,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 3;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contactName = student.contact.name;
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;

console.log(name);
console.log(marks);
console.log(contactName);
console.log(contactPhone);
console.log(contactCity);