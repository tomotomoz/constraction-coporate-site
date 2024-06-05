const nav = document.querySelector('.header-area');
const btn = document.querySelector('.hamburger')

btn.addEventListener('click', function() {
nav.classList.toggle('open')
});