//objectliteral notation
   let people = [{name:'chubuzo', score: 50, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 30, class: 'js1'},
                {name:'chubuzo', score: 60, class: 'js1'},
                {name:'chubuzo', score: 70, class: 'js1'},
                {name:'chubuzo', score: 40, class: 'js1'},
                {name:'chubuzo', score: 80, class: 'js1'},]
;

console.log(people)

const user = {   name: 'control',
                   Age: 30,
                   email: 'chuksintellectual@gmail.com',  
                   location: 'Abuja',
                   books: [{name:'chubuzo', score: 30, class: 'js1'},
                   {name:'chubuzo', score: 60, class: 'js1'},
                   {name:'chubuzo', score: 70, class: 'js1'},],

                   booksoso:function (){
                    console.log('this user has wriiten the following books:');
                    this.books.forEach(books => {
                        console.log(books.name, books.score, books.class);
                    });
                   }
                   
                                 
}
user.booksoso();
console.log(this)

console.log(user.email);
user.Age = 35;

console.log(user);
console.log(user['location']);
user['name'] = 'okeke';
console.log(user);

console.log(typeof user)

//math object/////////////////////////////////////////////////////////////////////
console.log(Math)

const area = 10.7

//console.log(Math.PI(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
console.log(Math.round(area));
console.log(Math.random(area));

//random number//////////////////////////////////////////////////
const random = Math.random();
console.log(Math.round(random * 10000));