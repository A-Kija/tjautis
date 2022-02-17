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
    mas.push(rand(4, 11));
}

console.table(mas);

// for (let i = 0; i < mas.length; i++) {

//     if (mas[i] > 3) {
//         console.log(mas[i]);
//     }

// }


let bigSum = 0;

for (let i = 0; i < mas.length; i++) {

    bigSum = bigSum + mas[i];

}
console.log(bigSum);



let minVal = mas[0];

for (let i = 1; i < mas.length; i++) {

    if (mas[i] < minVal) {
        minVal = mas[i];
    }

}
console.log(minVal);


let count = 0;

for (let i = 0; i < mas.length; i++) {

    if (mas[i] % 2 == 0) {
        count++;
    }

}
console.log(count);

let one = ['Nausėda', 'Antanas', 'Petras'];
let two = ['Linas', 'Birutė', 'Bebras', 'Žirafa'];
let three = ['Tomas', 'Sima', 'Saulius'];

let bigHouse = [];

bigHouse.push(one);
bigHouse.push(two);
bigHouse.push(three);

console.table(bigHouse);

// console.log(bigHouse[2][1]);


for (let i = 0; i < bigHouse.length; i++) {
    // console.log(bigHouse[i]); // butu masyvas
    // const store = bigHouse[i];
    // const flats = store.length;
    for (let k = 0; k < bigHouse[i].length; k++) {
        console.log(bigHouse[i][k]);
    }
}


for (let i = 0; i < bigHouse.length; i++) {
    for (let k = 0; k < bigHouse[i].length; k++) {
        if (bigHouse[i][k] == 'Birutė') {
            console.log('Birutė gyvena:', i, k);
        }
    }
}