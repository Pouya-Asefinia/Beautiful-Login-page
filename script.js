'use strict'
const ActiveLogin = document.querySelector('.active-btn-login');
const ActiveSignup = document.querySelector('.active-btn-signup')
    , Login = document.getElementById('login')
    , Signup = document.getElementById('signup');

ActiveSignup.addEventListener('click', (e) => {
    e.preventDefault();
    Signup.classList.remove('active-signup');
    Login.classList.add('active-login');
});

ActiveLogin.addEventListener('click', (e) => {
    e.preventDefault();
    Signup.classList.add('active-signup');
    Login.classList.remove('active-login');
});

