const login = document.getElementById('Login');
const register = document.getElementById('Register');

login.style.display = 'flex';
let mode = 1

function changeMode() {
    if (mode == 0) {
        login.style.display = 'flex';
        register.style.display = 'none';
        mode = 1;
    } else {
        login.style.display = 'none';
        register.style.display = 'flex';
        mode = 0;
    }
}