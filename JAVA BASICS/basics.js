//alert('hello');
// console.log(1);
// console.log(2);
//Strings
let email = 'chuksintellectual@gmail.com';


//String concatenation

let firstName = "Chuks";
let lastName = 'Ezeh';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[3]);

//string length

console.log(fullName.length);

//string methods

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result);

let index = email.indexOf('g');
console.log(index);

//common String methods
let resit = email.lastIndexOf('k');
console.log(resit)


let men = email.slice(1,8);
console.log(men);

let meTo = email.replace('c','t');
console.log(meTo);


//Math operators +, -, *, /, **, %

let radius = 20;
let pie = 3.15;

console.log(radius,pie);
 let check = radius / pie;

 console.log(check)
 let reason = 3 % radius;

 console.log(reason);

 let con = pie * radius**2;
 console.log(con)

 let likes = 20;

 //likes = likes + 2;
 //likes++;
 likes --;

 likes += 10;
 likes-= 6;
 likes *=2;
 likes /=4;


 console.log(likes);

 let all = 'the books wriiten so far has'+ ' '+ likes + ' '+ 'buyers';
 console.log(all);

 //template String
 const title = 'the broken bone';
 const author = 'Chukwuka';
 const buyers = 50;

//concatenation

 let titleT = 'The name of the book is'+' '+ title + ' '+ 'the author name is '+ ' '+ ' ' + author + ' '+'and he has sold'+' ' +'' + buyers;

 console.log(titleT);

 //template string
 let authorBooks = `The name of the book written by the author is ${title} the author's name is ${author} and he has sold ${buyers} pieces.
 
 `
 console.log(authorBooks);

 //creating html template

 let html = `
 <h3>${title}</h3>
 <p>${title}</p>
 <span>${title}</span>
 `

console.log(html)

//Array

let people = ['chike', 'gane', 'kamel'];
people[1] = 'game'
//console.log(people[2])
console.log(people);

let ages = [20,30,60,78];
console.log(ages.length)

//Array methods

//let full = people.join('-');
//let full = people.indexOf('game');
//let full = people.concat(['them', 'peter','paul' ]);
//let full = people.push('okeke');

console.log(people);

let full = people.pop();

console.log(people);

//booleans & comparisons

let names = ['kind','sin','hen'];

let resut = names.includes('sin');
console.log(resut);

//comparison operators

let aging = 30;

console.log(aging==25);
console.log(aging!=25);
console.log(aging < 25);
console.log(aging > 25);
console.log(aging <= 25);
console.log(aging >=25);

let alfer = 'breather'

console.log('compare2=>>',alfer == 'breath');
console.log(alfer == 'breather');
console.log(alfer > 'Areath');
console.log(alfer > 'Breath');
console.log(alfer > 'Seath');


//loose comparism
let age = 67;

console.log('example>>>',age=='67');
console.log(age!= 67);
console.log(age !='67');

//strict comparison (different types cannot be equal)

console.log('example 2 >>>',age=='67');
console.log(age === 67);
console.log(age === '67');
console.log(age!== 67);
console.log(age!== '67');

//type convertion

let score = '100';

score = Number(score);

console.log(score + 1);
console.log(typeof score);

score = String(score);
console.log(score, typeof score);

score = Boolean(score);
console.log(score, typeof score)