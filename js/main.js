/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');



if (navToggle) {
  navToggle.addEventListener('click', ()=>{
   navMenu.classList.add('show-menu') 
  });
}
if (navClose) {
  navClose.addEventListener('click', ()=>{
   navMenu.classList.remove('show-menu') 
  });
}
/*=============== REMOVE MENU MOBILE ===============*/


const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu')
};
navLink.forEach( n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
  const header = document.querySelector('#header')

  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
  const scrollUp = document.querySelector('#scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' :'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () =>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true // Animations reapet
})

sr.reveal(`.home__data, .list__container, .join__content, .footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.health__image, .routine__images, .follow__img-3`, {origin: 'left'})
sr.reveal(`.health__data, .routine__data, .follow__img-4`, {origin: 'right'})
sr.reveal(`.foolow__data, .follow__content-1`, {interval: 100})