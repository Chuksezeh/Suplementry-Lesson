//filter method////////////////////////////////////////////////////////
const scores = [20,30,87,98,67,33,67,39,25,37];

const filteredScores = scores.filter((score) =>{
    return score > 40
    
})
console.log(filteredScores);

const users =   [{name:'chubuzo', score: 50, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 30, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 70, class: 'js1'},
                {name:'chubuzo', score: 40, class: 'js1'},
                {name:'chubuzo', score: 80, class: 'js1'},]

 const mainUsers = users.filter((main)=>{
    return main.score > 40
 }) 
 
 console.log(mainUsers);