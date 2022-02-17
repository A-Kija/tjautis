function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let namas = ['Antanas', 'Laima', 'Bebras'];
namas.unshift('Zuikis');

// console.table(namas);
// namas.shift();
// console.table(namas);

for (let i = 0; i < 10; i++) {
    namas.push('kdhkjhgfd');
}

let mas = [];

for (let i = 0; i < 10; i++) {
    mas.push(rand(0, 7));
}

console.table(mas);