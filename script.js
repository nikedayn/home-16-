export let hWelcome = document.querySelector('#welcome');
let inputName = document.querySelector('#writeName');
import {name, cookieCheck} from './cookie';
cookieCheck();

inputName.addEventListener('change', () => {
    let inputValue = inputName.value;
    if(inputValue != 0){
        document.cookie = `username = ${inputValue}`;
        hWelcome.textContent = `Welcome, ${inputValue}!`;
    }
});