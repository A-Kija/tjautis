console.log('START');


// deklaravimas
function hello() {
    console.log('Hello, Africa');
}

console.log('Bla bla bla');


// iskvietimas
hello();
console.log('Again');
hello();
console.log('Again');
hello();


console.log('FINISH');


// deklaravimas
function helloWhat(what) { // what = america
    console.log('Hello, ' + what);
}

let america = 'America';
// iskvietimas
helloWhat('America'); // argumentas - turi reiksme
helloWhat(america);
helloWhat('Arctic');


// deklaravimas
function oneTwo(one, two) {
    console.log('Pirmas:', one, 'Antras:', two);
}

// iskvietimas
oneTwo('Cat', 'Dog');
oneTwo('Bebras', 'Barsukas');


// deklaravimas
const sum = function(a, b) {
    let suma = a + b;
    console.log(suma);
}

// let sum = function(a, b) {
//     let suma = a * b;
//     console.log(suma);
// }


// iskvietimas
sum(5, 8);