const container = document.querySelector('.container')
const login = document.querySelector('.login-link')
const register = document.querySelector('.register-link')
const button = document.querySelector('.login-btn')
const close = document.querySelector('.close-icon')

register.addEventListener('click', () => {
    container.classList.add('active')
});

login.addEventListener('click', () => {
    container.classList.remove('active')
});

button.addEventListener('click', () => {
    container.classList.add('btn-popup')
});

close.addEventListener('click', () => {
    container.classList.remove('btn-popup')
});