import './index.html';
import './style.css';

console.log('funguju!');

const tlacNavigace = document.querySelector('#nav-btn');
const Navigace = document.querySelectior('nav');
const Navlinks = document.querySelectorAll('nav a');

tlacNavigace.addEventListener('click', () => {
Navigace.classlist.toggle('nav-closed');
});
