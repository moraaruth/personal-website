const sections = document.querySelectorAll('.section');
const allSections = document.querySelector('.main-content');

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')

});