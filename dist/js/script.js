window.addEventListener('DOMContentLoaded', function () {
let hamburger = document.querySelector('.hamburger');
let leftBar = document.querySelector('.leftBar');
let bodys = document.querySelector('body');
let close = document.querySelector('.close');

    hamburger.addEventListener('click', function () {
        // bodys.setAttribute("style", "overflow:hidden;");
        leftBar.classList.add('active');
        close.style.display = 'block';
    });
    close.addEventListener('click', function () {
        bodys.setAttribute("style", "overflow:none;");
        leftBar.classList.remove('active');
        close.style.display = 'none';

    });
});