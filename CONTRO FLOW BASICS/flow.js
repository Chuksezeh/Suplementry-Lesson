//for loop////////////////////////////////////////////////////////////
for(let i = 0; i > 5; i++){
   

}

const names = ['chuka','ebuka', 'anikwe', 'amechi', 'chilata'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i])
//     let html = `
//     <div>${names[i]}</div>
//     `
//     console.log(html)
// } //do not use curly bracket here!

//while loop/////////////////////////////////////////////////

let i = 0;
 while (i < names.length) {
    console.log(names[i]);
    i++;
 }

 //do while loop/////////////////////////////////////

//  let i = 0;

//  do {
//     console.log(names[i]);
//     i++;
//  } while (i < names.length);

//if statement/////////////////////////////////////////////

const age = 25;
 
// if (age  > 20){
//     console.log('you are old enough')
// }

// if(names.length > 4){
//     console.log("that's a lot of nigas");
// }



//logical operators/////////////////////////////////
const password = 'emeri@rr';

if (password.length >= 12 && password.includes('@')) {

    console.log('that password is long enough');

}else if(password.length >= 8 || password.includes('@') && password.length > 8){

 console.log('that password is mighty strong');

}else{

    console.log('password is weak');
};


//logical not//////////////////////////////////////
 
let user = false;

if (!user) {
   console.log('you must login to continue') 
};
console.log(user)
console.log(!user)

//break and continue////////////////////////////////////////
const scores = [34,60,70,90,38,0,100,58,30,48];


 
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i])
    if (scores[i]===100) {
      console.log('you are the top scorer');
      break;   
    }
    
}

//switch statement//////////////////////////////////////////////
const grades = [{name:'chubuzo', score: 50, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 30, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 70, class: 'js1'},
                {name:'chubuzo', score: 40, class: 'js1'},
                {name:'chubuzo', score: 80, class: 'js1'},
];
// switch (grades.scores) {
//     case value:
//         console.log('you')
//         break;

//     default:
//         break;
// }
const grade = 70;

switch (grade) {
    case 50:
        console.log('you got C')
        break;
    case 70:
        console.log('you got A')
        break;

    case 40:
            console.log('you got D')
            break;
    case 50:
            console.log('you got C')
            break;    

    default:
        console.log('not a valid grade')
};


//variables and block scope/////////////////////////////////////////////////////
let ages = 30;

if(true){
    let ages = 40;
    console.log(ages)
}
console.log(ages)