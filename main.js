const menu = document.querySelector('.menu');
const dropDown = document.querySelector('.dropDown');
const unorderedList = document.querySelector('.unorderedList');
/**
* 1. Hover on menu
* 2. transition triggers
* 3. text in view
*/
menu.addEventListener('click', function(){
  unorderedList.classList.toggle('menuHover');
});
