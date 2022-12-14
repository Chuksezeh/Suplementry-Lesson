//filter method////////////////////////////////////////////////////////
//const scores = [20,30,87,98,67,33,67,39,25,37];

// const filteredScores = scores.filter((score) =>{
//     return score > 40
    
// })
// console.log(filteredScores);

const users =   [{name:'chubuzo', score: 50, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chuzo', score: 30, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 70, class: 'js1'},
                {name:'chuo', score: 40, class: 'js1'},
                {name:'chubuzo', score: 80, class: 'js1'},]

 const mainUsers = users.filter((main)=>{
    return main.score > 40
 }) 
 
 console.log(typeof mainUsers);

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

 //console.log(totalScore)

 const userReduce = users.reduce((acc, curr) =>{
    if (curr.name === 'chubuzo') {
        acc += curr.score;
    }
    return acc;
 },0);
 console.log(userReduce);

 //find method//////////////////////////////////////////////////

//  const findTotal = users.find((user) =>{
//     return user.score > 70;

//  });
//  console.log(findTotal);


 //sort method////////////////////////////////////////////////////////////////////////////////////

// const numbers = [59,60,9,4,32,53,59,23,30,31,32,60,57,34]
// //const users =   [{name:'chubuzo', score: 50, class: 'js1'},
//                 {name:'chubuzo', score: 60, class: 'js1'},
//                 {name:'chuzo', score: 30, class: 'js1'},
//                 {name:'chubuzo', score: 60, class: 'js1'},
//                 {name:'chubuzo', score: 70, class: 'js1'},
//                 {name:'chuo', score: 40, class: 'js1'},
//                 {name:'chubuzo', score: 80, class: 'js1'},]

//numbers.sort((a,b)=> b-a);

// console.log(numbers);

// users.sort((a,b)=> b.score -a.score);

// console.log(users)


//chaining an array////////////////////////////////////////////////////////////////////////////////

const chainArrays = users
      .filter(users =>users.score > 40)
      .map(users => `the indvidual name${users.name} and their score is ${users.score / 2} score`);
      console.log(chainArrays)




var myData = document.querySelector('.array')

const allData = function() {
      fetch ( 'https://jsonplaceholder.typicode.com/posts').then((response) =>{
          console.log('resolved', response);
          return response.json();
          
      }).then(data =>{
          console.log(data);
          console.log('info from jason', data[2].body);
          
      data.sort((a,b) =>{
            b.data - a.data;
          })
          myData.innerHTML = data[2].body;
      const info = JSON.parse(data)
      console.log('converted', info)
      }).catch((err) =>{
          console.log('rejected', err)
      });
};
allData(); 
    
// const getPro = async () =>{
//  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//  if (response.status !== 200) {
//     throw new Error('cannot fetch the data');
//  }
//  const data = await response.json();
 
//  myData.innerHTML = data.sort((a,b)=>{
//   data.forEach(user =>{
//     a.userId - b.userId;
//   })
//  });
//  return data;

// }
// getPro()
// .then(data => console.log('resolved:', data))
// .catch(err =>console.log('rejected:', err.message));

const displayPop = document.querySelector('.total')
const getPro = async () =>{
    const response = await fetch('array.json');
    if (response.status !== 200) {
       throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    console.log(data);
    const total = data.map((pop) =>{
        console.log(pop)
        if (pop.Population) {
            return {Population: pop.Population}
        }else{
            return pop;
        }
        
    })
   console.log(total);
   const totalPop = total.reduce((acc,curr)=>{
      if (curr.Population) {
        acc += curr.Population;
      }
      return acc;
   },0)
   console.log('The total U.S population from 2011 to 2020 is',totalPop);
   displayPop.innerHTML = `<h1 class="total">The U.S total population from 2013 to 2020 is / ${totalPop}</h1>`


   data.sort((a,b)=>{
    if (b.Year > a.Year) {
        return -1;
    }else if (a.Year > b.Year) {
        return 1;
    } else {
        return 0;
    }
   })
   console.log(data)
   };
   getPro()
   .then(data => console.log('resolved:', data))
   .catch(err =>console.log('rejected:', err.message));

   //https://datausa.io/api/data?drilldowns=Nation&measures=Population
   function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
   
   



