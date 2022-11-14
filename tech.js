// NAVIGATION BAR ON MOBILE
const navMenu = document.querySelector('.navlinks');
const menuBurger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-icon');


menuBurger.addEventListener('click', () => {
    navMenu.style.top = '0';
});

closeMenu.addEventListener('click', () => {
    navMenu.style.top = '-400px';
});







// TECHNOLOGY SECTION

const parentBtn = document.querySelector('.tech-button');
const techButton = parentBtn.querySelectorAll('button');

techButton.forEach(tech => {
    tech.addEventListener('click', changeTech)
})

function changeTech(t) {
    const techTarget = t.target;
    const targetTech = techTarget.getAttribute('aria-controls');
    const techContainer = techTarget.parentNode;
    const overContainer = techContainer.parentNode;

    const techFlex = document.querySelectorAll('.tech-flex')

    techFlex.forEach(flex => {
        flex.style.display = "none";
    })



    overContainer.querySelector([`#${targetTech}`]).removeAttribute('style')


    console.log(overContainer)
}