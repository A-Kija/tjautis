function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let siunta = 'M';

console.log('Siunčiam ', siunta);


if (siunta == 'S') {
    console.log('Telpa S');
}
if (siunta == 'S' || siunta == 'M') {
    console.log('Telpa M');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L') {
    console.log('Telpa L');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L' || siunta == 'XL') {
    console.log('Telpa XL');
}

switch (siunta) {
    case 'S':
        console.log('Telpa S');
    case 'M':
        console.log('Telpa M');
    case 'L':
        console.log('Telpa L');
    default:
        console.log('Telpa XL');
}


let light = 'yellow';

console.log('light', light);

if (light == 'green') {
    console.log('Go');
} else if (light == 'yellow') {
    console.log('Ready');
} else {
    console.log('Wait');
}

switch (light) {
    case 'green':
        console.log('Go');
        break;
    case 'yellow':
        console.log('Ready');
        break;
    default:
        console.log('Wait');
}


let run = rand(1, 6);

console.log('run', run);

switch (run) {
    case 1:
    case 5:
        console.log('Ledai');
        break;
    case 2:
    case 4:
        console.log('Cipsai');
        break;
    default:
        console.log('Pienas');
}

let run2;
let count2 = 0;
let saugiklis = 0;
do {
    if (saugiklis++ > 100) break;
    count2++;
    run2 = rand(1, 6);
    console.log(run2);

} while (run2 != 5);
console.log('prasisuko:', count2);



// == --> !=
// != --> ==
// > --> <=
// <= --> >
// < --> >=
// >= --> <
// || --> &&
// && --> ||



let run3;
let count3 = 0;

do {

    count3++;
    run3 = rand(1, 6);
    console.log(run3);

} while (run3 != 5 && run3 != 1);
console.log('prasisuko:', count3);


let runSum = 0;
let count4 = 0;

// do {
//     let run = rand(1, 6);
//     console.log(run);
//     count4++;
//     runSum = runSum + run;
// } while (runSum <= 33);

while (runSum <= 33) {
    let run = rand(1, 6);
    console.log(run);
    count4++;
    runSum = runSum + run;
}

console.log('prasisuko:', count4, 'suma:', runSum);