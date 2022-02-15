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