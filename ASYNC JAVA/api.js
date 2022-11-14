//fetch api/////////////////////////////////////////////////
var myData = document.querySelector('.showData')
fetch ( 'https://api.coindesk.com/v1/bpi/currentprice.json').then((response) =>{
    console.log('resolved', response);
    return response.json();
}).then(data =>{
    console.log(data);
    console.log('data.disclaimer', data.time);
    myData.innerHTML += data.time;

}).catch((err) =>{
    console.log('rejected', err)
});



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
// const getTodos = (callback) =>{
// const request = new XMLHttpRequest();


// request.addEventlistener('readystatechange', () =>{
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         Callback(undefined, data);
//     }else if(request.readyState ===4){
//            Callback('could not fetch data', undefined);

//     }
// });
// request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
// request.send();
// };
// getTodos((err,data) =>{
//     console.log('callback fired');
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// });
