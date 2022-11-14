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





// CREW SECTION
const buttonParent = document.querySelector('.crew-button');
const crewButton = buttonParent.querySelectorAll('button')

crewButton.forEach(button => {
    button.addEventListener('click', changeCrew)
});


function changeCrew(e) {
    const targetButton = e.target;
    const targetCrew = targetButton.getAttribute('aria-controls')
    const targetContainer = targetButton.parentNode;
    const mainContainer = targetContainer.parentNode;

    const crewFlex = document.querySelectorAll('.crew-flex')

    crewFlex.forEach(container => {
        container.style.display = 'none';
    })

    mainContainer.querySelector([`#${targetCrew}`]).removeAttribute('style');

    console.log(mainContainer);
}









