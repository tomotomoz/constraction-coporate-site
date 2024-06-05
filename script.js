const nav = document.querySelector('.header-area');
const btn = document.querySelector('.hamburger')

btn.addEventListener('click', function() {
nav.classList.toggle('open')
});

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray('.fade')
console.log(contents)

contents.forEach((content) => {
  gsap.to(content, {
  
scrollTrigger: {
  trigger: content,
  start: 'top 70%',
  markers: true
},
  y: 0,
  opacity: 1,
  })
  });