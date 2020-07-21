import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/item.hbs';

const newItem = itemTemplate(menu) 
const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('afterbegin', newItem);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const main = document.querySelector('body');
const mainSwitch = document.querySelector('.js-switch-input');
mainSwitch.addEventListener('change', () => {
    console.dir(mainSwitch);
    mainSwitch.checked 
    ? (localStorage.setItem('changeTheme', ' '), main.classList.add(Theme.DARK), main.classList.remove(Theme.LIGHT)) 
    : (localStorage.removeItem('changeTheme'), main.classList.add(Theme.LIGHT), main.classList.remove(Theme.DARK));
    
});

if (localStorage.getItem('changeTheme')){
    main.classList.add(Theme.DARK);
    mainSwitch.checked = true;
}