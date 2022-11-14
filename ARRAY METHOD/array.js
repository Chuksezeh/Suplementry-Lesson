//filter method////////////////////////////////////////////////////////
//const scores = [20,30,87,98,67,33,67,39,25,37];

// const filteredScores = scores.filter((score) =>{
//     return score > 40
    
// })
// console.log(filteredScores);

// // const users =   [{name:'chubuzo', score: 50, class: 'js1'},
// //                 {name:'chubuzo', score: 60, class: 'js1'},
// //                 {name:'chuzo', score: 30, class: 'js1'},
// //                 {name:'chubuzo', score: 60, class: 'js1'},
// //                 {name:'chubuzo', score: 70, class: 'js1'},
// //                 {name:'chuo', score: 40, class: 'js1'},
// //                 {name:'chubuzo', score: 80, class: 'js1'},]

//  const mainUsers = users.filter((main)=>{
//     return main.score > 40
//  }) 
 
//  console.log(mainUsers);

//  //map method////////////////////////////////////////////
//  const totalScores = scores.map((score) =>{
//    return score / 2;
//  });
//  console.log(totalScores)

//  const jenUsers = users.map((use) =>{
//     if (use.score >= 50) {
//         return {name: use.name, score: use.score / 2, class: use.class}
//     }else{
//         return use;
//     }
//  });

//  console.log(jenUsers)


 //reduce method///////////////////////////////////
//  const users =   [{name:'chubuzo', score: 50, class: 'js1'},
//                 {name:'chubuzo', score: 60, class: 'js1'},
//                 {name:'chuzo', score: 30, class: 'js1'},
//                 {name:'chubuzo', score: 60, class: 'js1'},
//                 {name:'chubuzo', score: 70, class: 'js1'},
//                 {name:'chuo', score: 40, class: 'js1'},
//                 {name:'chubuzo', score: 80, class: 'js1'},]
//  const scores = [20,30,87,98,67,33,67,39,25,37];
//  const totalScore = scores.reduce((acc, curr) =>{
//     if (curr > 50) {
//        acc ++; 
//     }
//         return acc;
    
//  },0);

//  console.log(totalScore)

//  const userReduce = users.reduce((acc, curr) =>{
//     if (curr.name === 'chubuzo') {
//         acc += curr.score;
//     }
//     return acc;
//  },0);
//  console.log(userReduce);

 //find method//////////////////////////////////////////////////

//  const findTotal = users.find((user) =>{
//     return user.score > 70;

//  });
//  console.log(findTotal);


 //sort method////////////////////////////////////////////////////////////////////////////////////

const numbers = [59,60,9,4,32,53,59,23,30,31,32,60,57,34]
const users =   [{name:'chubuzo', score: 50, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chuzo', score: 30, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 70, class: 'js1'},
                {name:'chuo', score: 40, class: 'js1'},
                {name:'chubuzo', score: 80, class: 'js1'},]

numbers.sort((a,b)=> b-a);

console.log(numbers);

users.sort((a,b)=> b.score -a.score);

console.log(users)


//chaining an array////////////////////////////////////////////////////////////////////////////////

const chainArrays = users
      .filter(users =>users.score > 40)
      .map(users => `the indvidual name${users.name} and their score is ${users.score / 2} score`);
      console.log(chainArrays)




 