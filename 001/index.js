// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(10 - i);
// }

const animal = 'Begemotas';

// console.log(animal[0]);
// console.log(animal[6]);


// for (let i = 0; i < animal.length; i++) {
//     console.log(animal[i], i);
// }



let animal100 = '';

for (let i = 0; i < 100; i++) {
    animal100 = animal100 + ' ' + animal;
    // animal100 += animal; tas pats
}

console.log(animal100);