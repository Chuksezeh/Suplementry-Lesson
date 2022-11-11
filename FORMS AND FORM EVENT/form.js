const form = document.querySelector('form');
const username = document.querySelector('#username')
//console.log(username)
const usernamePattern = /[a-zA-Z]{8,12}/;
form.addEventListener('submit', (e) =>{
e.preventDefault();
console.log(form.username.value)



 //testing ReEx
 //const username = '@ffgghryuryryyr';
//  const pattern = /[a-z]{8,}/;

//  let result = pattern.test(username);

//  console.log(result)
//  if (result) {
//     console.log('your password is good')
//  }else{
//     console.log('choose another password')
//  }

//  let result = username.search(pattern);
//  console.log(result)
const feedback = document.querySelector('.feedback')
//validation///////////////////////////////////////////////////////////
const usernameT = form.username.value;


if (usernamePattern.test(usernameT)) {
    feedback.textContent = 'that username is valid';

}else{
    feedback.textContent = 'username must contain letters only and be above eight characters long'
}
});

//live feedback////////////////////////////////////////////////////////

form.username.addEventListener('keyup', e =>{
    console.log(e)
    //console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')

    }else{
        form.username.setAttribute('class', 'error')
    }
});