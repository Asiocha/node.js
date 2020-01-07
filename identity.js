const fs = require('fs');

const genders = ['male', 'female'];
const femaleNames = ['Krystyna', 'Paulina', 'Grażyna', 'Halina'];
const maleNames = ['Krzysztof', 'Roman', 'Piotr', 'Rafał'];
const lastNames = ['Zimoch', 'Krzak', 'Groch', 'Paluch'];
const age = ['21', '33', '68', '71'];

const arr = [genders, maleNames, femaleNames, lastNames, age]



const randChoice = arr => {
   return arr[Math.floor(arr.length * Math.random())];
};

const people = [];

for (let i = 0; i < 20; i++) {
   let person = {};
   person.gender = randChoice(genders);
   if (person.gender === "male") {
      person.name = randChoice(maleNames);

   }
   else {
      person.name = randChoice(femaleNames);
   }
   person.lastName = randChoice(lastNames);
   person.age = randChoice(age);
   people.push(person);
}

const json = JSON.stringify(people);

fs.writeFile('people.json', json, (err) => {
   if (err) throw err;
   console.log('The json has been saved!');
});
