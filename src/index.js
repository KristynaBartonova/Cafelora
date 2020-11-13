import './index.html';
import './style.css';

console.log('funguju!');

const menicko = document.querySelector('#nav-btn');
let navigace = document.querySelector('#nav');
const vyber = document.querySelectorAll('.nav a');

menicko.addEventListener('click',() => {
  navigace.classList.toggle('nav-closed');}
  );

vyber.addEventListener('click',() => {
  navigace.classList.add('nav-closed');}
  );

  //ukol 4//

  let ordered = false;

  const DrinkCup = document.querySelector('#order-btn');
  
  DrinkCup.addEventListener('click',() => 
  { DrinkCup.classList.toggle('--selected');
});
















