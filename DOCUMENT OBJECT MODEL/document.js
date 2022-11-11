//const para = document.querySelector('p');

// console.log(para)

// para.innerHTML = 'protected soul';

const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para.innerHTML);
    para.innerHTML += 'new month';
});

// const general = document.querySelector('.general');

// const people = ['chibike', 'men', 'gangster'];

// people.forEach(person =>{
//     general.innerHTML += `<p>${person}</p> `
// });


const yes = document.querySelector('.yes');

//yes.innerHTML = 'control panel'

//getting and changing the html element//////////////////////////////////////y
yes.getAttribute('class');
yes.setAttribute('class', 'yes');
//yes.innerHTML = 'prodigal son';

yes.setAttribute('style', 'color: red');

const color = document.querySelector('h3')

console.log(color.style);

yes.style.margin = '50px';
yes.style.marker = '30px'
yes.style.borderColor = 'blue'

 yes.setAttribute('style', 'borderColor: blu');

 const join = document.querySelectorAll('p');
 console.log(join)

 join.forEach(pen =>{
    if (pen.textContent.includes('to')) {
        pen.classList.add('pen')
    }
    if (pen.textContent.includes('nital')) {
        pen.classList.add('nital')
    }
 });

 const toggle = document.querySelector('.pe')

 toggle.classList.toggle('test'); //to add toggle
 toggle.classList.toggle('test'); //repeat to remove toggle

 //parent children relationship///////////////////////////////////////////////
 
 const article = document.querySelector('article');
 Array.from(article.children).forEach((child) =>{
    child.classList.add('better');
 }
 )
 const parent = document.querySelector('h4');
 console.log(parent.parentElement.parentElement);

 console.log(parent.nextElementSibling);
 
 console.log(parent.parentElement.nextElementSibling.children);

 //listening to an event/////////////////////////////////////////////////////////////////
 const control = document.querySelector('button');
 const items = document.querySelectorAll('li');
 const ul = document.querySelector('.peace')

//  control.addEventListener('click', () =>{

//  })
// items.forEach(item =>{
//     item.addEventListener('click',(e) =>{
//         //console.log('item clicked')
//         console.log(e.target);
//         e.target.style.textDecoration = 'underline';
//         e.target.remove()

//     });
// });

control.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'something added';
    ul.append(li);
    //ul.prepend(li);hg
});
ul.addEventListener('click', e =>{
 if (e.target.tagName === 'LI') {
    e.target.remove();
 }
});

//other events////////////////////////////////////////////////////////////////////////

const copy = document.querySelector('.copy-me');
const box = document.querySelector('.box');


copy.addEventListener('copy', () =>{
    console.log('do not copy me!')
});

box.addEventListener('mousemove',(e)=>{
    box.textContent = `moving ${e.offsetX} to ${e.offsetY}`
});

document.addEventListener('wheel', (e) =>{
   console.log(e.pageX, e.pageY)
})