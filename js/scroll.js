/* VARIABLES */

const btnToNews = document.querySelector('.btnNews');
const btnCourses = document.querySelector('.btnCourses');
const btnPartnership = document.querySelector('.btnPartnership');
const btnContact = document.querySelector('.btnContact');

const news = document.querySelector('#news');
const courses = document.querySelector('#courses');
const partnership = document.querySelector('#partnership');
const contact = document.querySelector('#contact');


/* SCROLL UP / SCROLL DOWN */

btnToNews.addEventListener("click", () => scrollIt(news));
btnCourses.addEventListener("click", () => scrollIt(courses));
btnPartnership.addEventListener("click", () => scrollIt(partnership));
btnContact.addEventListener("click", () => scrollIt(contact));

function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}



const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener("click", () => window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 0
}));

/* DISPLAY / HIDE ARROW*/

const displayArrow = document.getElementById("btnScrollToTop");
window.addEventListener('scroll', () => {

    if (window.scrollY >= 1000) {
        displayArrow.style.display = "block";
    }
    if (window.scrollY < 1000) {
        displayArrow.style.display = "none";
    }
});