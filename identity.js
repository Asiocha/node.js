const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Krystyna', 'Paulina', 'Grażyna', 'Halina'];
const femaleNames = ['Krzysztof', 'Roman', 'Piotr', 'Rafał'];
const lastNames = ['Zimoch', 'Krzak', 'Groch', 'Paluch'];
const age = ['21', '33', '68', '71'];

const arr = [genders, maleNames, femaleNames, lastNames, age]

function randChoice = () => {
   return arr[Math.floor(arr.length * Math.random())];
};

const people = [];

for(let i = 0; i < 20; i++){
    
}

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });