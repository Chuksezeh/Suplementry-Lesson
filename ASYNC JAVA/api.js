//fetch api/////////////////////////////////////////////////
var myData = document.querySelector('.showData')

fetch ( 'https://jsonplaceholder.typicode.com/posts').then((response) =>{
    console.log('resolved', response);
    return response.json();
    
}).then(data =>{
    console.log(data);
    console.log('info from jason', data[2].body);
    myData.innerHTML = data[2].body;
const info = JSON.parse(data)
console.log('converted', info)
}).catch((err) =>{
    console.log('rejected', err)
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
  
//   .then(json => console.log(json))

//   const inner = document.querySelector('.inner')
//    inner.innerHTML = json.tittle
  

//https://jsonplaceholder.typicode.com/posts

//const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// const getTodos = () =>{
// const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',() =>{
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText)
            
//         }else if (request, readyState === 4) {
//             callback('could not fecht data', undefined)
//         }
//     });
//     request.open('GET','https://jsonplaceholder.typicode.com/posts' )
//     request.send();
// };

// getTodos((err,data) =>{
//     console.log('callback fired');
//     if(err){
//         console.log(err)
//     }else{ 
//         console.log(data);
//     }
// });
