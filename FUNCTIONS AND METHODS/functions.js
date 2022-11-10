//function declaration/////////////////////////////////////////////////////
greet();
function greet(){
    console.log('hello dear')
}
greet();


//function expression/////////////////////////////////////////////////////////


//hgspeak();
const speak = function() {
    console.log('buy bread')
}
speak();

//argument and parameters////////////////////////////////////////////////////////
const uche = function(time, name) {
    console.log(`how are you this ${time} ${name}`);
};
uche('morning', 'Ify');

//Question 1: In this task, your tasks are to 1a)Store the value of the name property inside the catName variable, using bracket notation. 
//1b)Run the greeting() (it will log the greeting to the browser's console). 1c)Update the color property value to black.
// 1
const cat = document.querySelector('.name');


const catName = function(name = 'meuu!!!') {
   let html =`My greetings to all of you ${name}`
   console.log(html)
}
catName('weldon!')

//returning values///////////////////////////////////////////////////

const calc = function(radius) {
    let area = 3 * radius **2;
    return area;
}
const we = calc(6);

console.log(we)

//with this here we can reuse it//
const totalCalc = function(we) {
    return we;
    
};
console.log(we);
totalCalc();

//arrow function
const pen = (price) =>{
    return 4 + price + 4;
}
const price = pen(2);
console.log('The price is',price );

const greeter = () => 'hellow';
const result = greeter();
console.log(result);


const bill = function(products, tax){
    let total = 0;
    for (let i =0; i < products.length; i++) {
        total += products[i] + products[i] *tax;
        }
     return total;   
}

const call = bill([20,50,43], 0.2);
console.log('the total calculation is',call);

const kind = (products, tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] *tax;
        }
     return total;   
};
const ton = kind([56,70,79], 6.8);
console.log('Another example',ton);

///function/////////////////////////////////////////////////////////
const namey = 'ukata'

const grut = () => 'person';
let resultOne = grut();
console.log(resultOne);
  
//methods//////////////////////////////////////////////////////////
let resultTwo = namey.toLocaleUpperCase();
console.log(resultTwo);

//callbacks and foreach///////////////////////////////////////////l

let allPeople = ['uche','kenedy', 'ebube', 'ifeco','ukaeje','wakanda'];

allPeople.forEach((person,index) =>{
    console.log(index,person)
    
});

const tenKut = (person, index) =>{
    console.log(`${index} hello ${person}`)
}
allPeople.forEach(tenKut);

//get a reference to the 'ul'///////////////////////////////////////////////////
const them = document.querySelector('.pin');

let html = ``;

allPeople.forEach(person => {
    html +=`        
    
    <li style="color: red">${person}</li>
    `
});
them.innerHTML = html;

