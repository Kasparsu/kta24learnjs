function hello(name){
    return 'Hello ' + name;
}

let greeting = hello('Kaspar');
console.log(greeting);
greeting = hello('Martin');
console.log(greeting);

let goodbye = function (name) {
    return 'goodbye ' + name;
}

goodbye = (name) => {
    return 'goodbye ' + name;
}

goodbye = name => {
    return 'goodbye ' + name;
}

goodbye = name => 'goodbye ' + name;


let farewell = goodbye('Kaspar');
console.log(farewell);
farewell = goodbye('Martin');
console.log(farewell);

let person = {
    name: 'Kaspar',
    age: 31,
    greeting(){
        console.log(this);
        return 'hello';
    },
    goodbye: () => {
        console.log(this);
        return 'goodbye';
    }
}

console.log(person.greeting());
console.log(person.goodbye());


function recursive(i){
    console.log(i);
    if(i<10){
        recursive(i+1);
    }
}

recursive(0);

for(let i = 0; i<10; i++){
    console.log(i);
}
let boo = 'scary';
let template = `hello
 world
 ${person.name}
 ${boo}
 !!!!`;

console.log(template);
console.log(template.length);

console.log('💩'.length);

console.log('hello'.toLocaleLowerCase());

console.log(0xFF);
console.log(015); 

console.log(100_000_000_000_000);

let array = [
    'asdasd',
    1,
    true,
    () => 'hello',
    { cat: 'Nuustik'},
    [1, 2, 'hello'],
];

array[8] = 'something';
console.log(array);
console.log(array[0]);
console.log(array[4].cat);
console.log(array[5][2]);
let i = 10;
if(i<10){
    console.log('i on väiksem kui 10');
} else if(i>10) {
    console.log('i on suurem kui 10');
} else {
    console.log('i võrdne 10');
}
let day = new Date().getDay();
console.log(day);

let answer = '';
if(day==0){
    answer = 'Pühapäev'; 
} else if(day==1){
    answer = 'Esmaspäev'; 
} else if(day==2){
    answer = 'Teisipäev'; 
} else if(day==3){
    answer = 'Kolmapäev'; 
} else if(day==4){
    answer = 'Neljapäev'; 
} else if(day==5 || day==6){
    answer = 'Pidupäev'; 
} else {
    answer = 'Weird day';
}
console.log(answer);

switch(day){
    case 0:
        answer = 'Pühapäev';
        break;
    case 1:
        answer = 'Esmaspäev';
        break;
    case 2:
        answer = 'Teispäev';
        break;
    case 3:
        answer = 'Kolmapäev';
        break;
    case 4:
        answer = 'Neljapäev';
        break;
    case 5:
        console.log('reede');
    case 6:
        answer = 'Pidupäev';
        break;
    default: 
        answer = 'Weirdday';
}
console.log(answer);

for(let i=1 ; i<1_000_000 ; i*=2){
    console.log(i);
}

let startSec = new Date().getSeconds();
let currentSec = new Date().getSeconds();
let count = 0;
while(currentSec == startSec){
    currentSec = new Date().getSeconds();
    console.log(count);
    count++;
}

// while(true){ 
//
//}
let a = 1;

while(a<1) {
    console.log('did stuff');
}


do {
    console.log('did stuff');
} while(a<1);

for(let key in person){
    console.log(key, person[key]);
}

for(let value of array){
    console.log(value);
}

for(let i = 0; i<10; i++){
    if(i==3){
        continue;
    }
    if(i==7){
        break;
    }
    console.log(i);
}