const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeT = document.querySelector('.popup-close');
//const pop = document.querySelector('.popup')

button.addEventListener('click', () =>{
    popup.style.display = 'block';
});
popup.addEventListener('click', () =>{
    
    popup.style.display = 'none';
});

closeT.addEventListener('click', (e) =>{
  console.log(e)
    popup.style.display = 'none';
})


