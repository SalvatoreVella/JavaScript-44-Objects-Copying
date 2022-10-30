const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

/* const person2 = {};

for (keys in person1) {
  person2[keys] = person1[keys];
} */

const person2 = Object.assign({}, person1);

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

/* Se dichiariamo che person2 = person1, non stiamo creando un altro oggetto 
ma un altra variabile che punta allo stesso oggetto, quindi se modifichiamo 
un valore da person1 o da person2 modifichermo lo stesso oggetto in entrambi i casi
e al console log delle due variabili il risultato sarà sempre identico */