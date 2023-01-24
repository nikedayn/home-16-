import{hWelcome} from './script'
export let name = document.cookie.match(/username(.+?)(;|$)/);
export let cookieCheck = () => {
    if (name == null){
        hWelcome.textContent = 'Welcome, stranger!'
    }
    else {
        let username = name[1].substring(1);
        hWelcome.textContent = `Welcome, ${username}!`
    }
}
