//JSON
// Javascript Object Notation

let person = {
  "name": "Manuel",
  "adress": "42 rue de 666eme rugissant",
  "zipcode": "42666",
  "city": "Pimpcity"
}

let person2 = {
  "name": "Le Zoan",
  "adress": "les jardins du 42 rue de 666eme rugissant",
  "zipcode": "42666",
  "city": "Pimpcity"
}

let person3 = {
  "name": "La chèvre",
  "adress": "l'enclos dans le jardin du 42 rue de 666eme rugissant",
  "zipcode": "42666",
  "city": "Pimpcity"
}


let thingsToStore = [person,person2];
thingsToStore.push(person3);

if(localStorage.setItem('person', JSON.stringify(thingsToStore))) {
  console.log(JSON.stringify(person));
} else {
  console.log('ERROR');
}


let me = '';

if (me = localStorage.getItem('person')) {
  console.log(JSON.parse(me));
}

let persons = localStorage.getItem('person');

for (let person of JSON.parse(persons)) {
  console.log(person.name);
}
