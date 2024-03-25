/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des femmes adultes
- Le second ne contient que des hommes adultes
(Étant donné qu'une personne est un adulte si elle a 18 ans ou plus)

const persons = [
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Maggie Simpson', age: 2, sex: 'female' },
  { name: 'Leonardo', age: 92, sex: 'male' },
  { name: 'Carla Moreau', age: 24, sex: 'female' },
  { name: 'Mickael Jackson', age: 17, sex: 'male' },
  { name: 'Penelope Milena', age: 27, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
];

*/

function findAdults(persons) {
    male = [];
    female = [];

    if (Array.isArray(persons)) {
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].age >= 18) {
                if (persons[i].sex === "male") {
                    male.push(persons[i]);
                } else {
                    female.push(persons[i]);
                }
            }
        }
        persons = [];
        persons.push(female, male);
        return persons;
    } else {
        return "Input is not an array";
    }

    console.log(male, female);
    console.log(persons);
}

module.exports = findAdults;
