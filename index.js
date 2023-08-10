const btnBurgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const checkbox = document.querySelector(".burger-menu__check");

function handleMenu() {
  if (menu.classList.contains('menu_opened')) {
    menu.classList.remove('menu_opened')
    menu.style.transform = 'translateY(-100vh)'
  } else {
    menu.classList.add('menu_opened')
    menu.style.transform = 'translateY(0)'
  }
}

window.matchMedia("(min-width: 501px)").addListener(ev => {
  if (ev.matches) {
    menu.style.transform = "translateY(0)";
  } else {
    menu.classList.remove('menu_opened')
    menu.style.transform = 'translateY(-100vh)';
    checkbox.checked = false;
  }
});

btnBurgerMenu.addEventListener('click', handleMenu);