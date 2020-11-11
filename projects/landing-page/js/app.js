/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const secs = document.querySelectorAll('.landing__container');
const navbar__list = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();
const active_class = 'your-active-class';

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


for(let sec of secs) {
    const navbar_item = document.createElement('li');

    const anc = document.createElement('a');
    anc.href = '#' + sec.parentElement.id;
    anc.textContent = sec.parentElement.dataset.nav;
    anc.classList.add('menu__link');

    navbar_item.appendChild(anc);

    fragment.appendChild(navbar_item);
}

navbar__list.appendChild(fragment);


// Add class 'active' to section when near top of viewport

navbar__list.addEventListener('click', function(event){
    event.preventDefault();

    const desiredId = event.target.href.split('#')[1];
    const secId = document.getElementById(desiredId);

    for(let sec of secs){

        if(sec.parentElement.id === desiredId){
            sec.parentElement.classList.add(active_class);
        }
        else{
            sec.parentElement.classList.remove(active_class);
        }
    }
})

// Scroll to anchor ID using scrollTO event

navbar__list.addEventListener('click', function(event){
    event.preventDefault();

    const desiredId = event.target.href.split('#')[1];
    const secId = document.getElementById(desiredId);

    window.scrollTo({
        top: secId.offsetTop,
        behavior: 'smooth'
      });
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

function set_active(){
    console.log(1);
    for(let sec of secs){
        if(sec.parentElement.offsetTop <= window.pageYOffset && sec.parentElement.offsetTop + sec.parentElement.offsetHeight >= window.pageYOffset){
            sec.parentElement.classList.add(active_class);
        }
        else{
            sec.parentElement.classList.remove(active_class);
        }
    }
}

document.addEventListener('wheel', set_active)
document.addEventListener('click', set_active)
window.addEventListener('load', set_active)