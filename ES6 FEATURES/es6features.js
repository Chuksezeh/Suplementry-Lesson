//rest parameters/////////////////////////////////////////////////////////////////////////////
const double = (...nums)=>{
console.log(nums)
return nums.map(num => num*2);
};

const result = double(4,5,4,6,8,7,6,4,3,7,6,9);
console.log(result);

//spread syntax (arrays)/////////////////////////////////////////////////////////////////////////////

const people = ['men','girl','hen','kind', 'hen', 'men', 'men', 'chy']; //...people, will spread the array out

const peoples = ['thing','wen', 'gen',...people]; //can use this to join array inside an array
console.log(people);

//spread object////////////////////////////////////////////////////////////////////////////////////

const person = {name: 'ebuka', school: 'abia', job: 'game'};
const members = {...person, spouse: 'chioma'};

 console.log( members);


 //SET  //SET/////////////////////////////////////////////////////////////////////////////////

const peopleSet = new Set (people); // removes all the duplicates
const peopleS = [...new Set(people)];// another example
console.log(peopleSet);


const ages = new Set();
ages.add(20);
ages.add(46).add(67);
ages.add(20).add(68);
ages.delete(20);
//ages.clear()

console.log(ages, ages.size);
const main = document.querySelector('.main');

const teleG = new Set([
    {name: 'ebuka', school: 'ksa', job: 'cant'},
    {name: 'ebu', school: 'aty', job: 'yui'},
    {name: 'cha', school: 'tuli', job: 'gen'}
]);

teleG.forEach(tele =>{
    console.log('His name is',tele.name,'working in', tele.job)
    main.innerText = ` His name is ${tele.name}/ workin at ${tele.job}`
    
});

//symbol///////////////////////////////////////////////////////// can be used as a key in an object, no two symbol are the same

const symbolOne = Symbol('special name');
const symbolTwo = Symbol('speciail name');
console.log(symbolOne == symbolTwo);

const chuks = {};

chuks[symbolOne] = 'emeka'
chuks[symbolTwo] = 'jideofor'
console.log(chuks)


