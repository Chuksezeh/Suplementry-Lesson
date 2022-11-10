//const para = document.querySelector('p');

// console.log(para)

// para.innerHTML = 'protected soul';

const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para.innerHTML);
    para.innerHTML += 'new month';
});

const general = document.querySelector('.general');

const people = ['chibike', 'men', 'gangster'];

people.forEach(person =>{
    general.innerHTML += `<p>${person}</p> `
});
