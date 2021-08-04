function darkMode() {
    const body = document.body;
    const wasDarkMode = localStorage.getItem('darkMode') === 'true';

    localStorage.setItem('darkMode', !wasDarkMode);
    body.classList.toggle('dark-mode', !wasDarkMode);
}

document.querySelector('.btn').addEventListener('click', darkMode);

function onLoad() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true')
}

document.addEventListener('DOMContentLoaded', onLoad);