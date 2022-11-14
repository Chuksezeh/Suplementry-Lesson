// const userOne = {
//     username: 'chukap',
//     email: 'chuksintellectual@gmail.com',
//     login(){
//         console.log('the user just loged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// };
// console.log(userOne.username, userOne.email)
// userOne.login();

//class constructor 'new' keyword//////////////////////////////////////////////////


//the 'new' keyword
// 1: it creates a new empty object{}
// 2: it binds the value of 'this' to the new empty object
// 3: it calls the constructor function to 'build' the object

class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
   }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;  
    }
    inScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this;
    }
}
//admin user class/////////////////////////////////////////////////////////////// class inheritance
class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
 deleteUser(user){
   users = users.filter((u) =>{
    return u.username !== user.username;
   })
 }
}

const userOne = new User('Peter', 'chuksintellectual@gmail.com');
const userTwo = new User('Kanu', 'kanu@gmail.com');
const userThree = new Admin ('paul', 'chukwukaezeh@gmail.com', 'broken bone')

console.log(userOne, userTwo, userThree);
userOne.login().inScore().logout();
userTwo.login().inScore().logout();

let users = [userOne, userTwo,userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);
console.log(userThree);




